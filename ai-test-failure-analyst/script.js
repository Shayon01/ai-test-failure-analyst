const errorInput = document.getElementById("errorInput");
const analyzeButton = document.getElementById("analyzeButton");
const results = document.getElementById("results");

analyzeButton.addEventListener("click", analyzeFailure);

async function analyzeFailure() {
const errorMessage = errorInput.value.trim();

if (errorMessage === "") {
    results.textContent = "";
    const message = document.createElement("p");
    message.textContent = "Please enter an error message before analyzing.";
    results.appendChild(message);
    return;
}

const error = errorMessage.toLowerCase();
let diagnosis;

// 1. Check known errors using existing rules.

if (
    error.includes("timeout") ||
    error.includes("timed out")
) {
    diagnosis = {
        category: "Timeout",
        explanation: "The test did not receive the expected response within the allowed time.",
        causes: [
            "The application or service responded slowly.",
            "A dependent service may not have responded.",
            "The test timeout may be too short."
        ],
        actions: [
            "Check application and service logs around the failure time.",
            "Check whether the request reached the expected service.",
            "Compare the response time with successful test runs."
        ]
    };

} else if (
    error.includes("element not found") ||
    error.includes("no such element") ||
    error.includes("unable to locate element")
) {
    diagnosis = {
        category: "Element Not Found",
        explanation: "The automated test could not locate an element it expected on the page.",
        causes: [
            "The page layout or element selector may have changed.",
            "The page may not have finished loading.",
            "The element may not be visible or available yet."
        ],
        actions: [
            "Inspect the page to confirm that the element exists.",
            "Check whether the selector is still correct.",
            "Review page-loading and waiting conditions."
        ]
    };

} else if (
    error.includes("connection refused") ||
    error.includes("network error") ||
    error.includes("failed to fetch")
) {
    diagnosis = {
        category: "Network or Connection Failure",
        explanation: "The test could not establish or complete the expected network communication.",
        causes: [
            "The target service may be unavailable.",
            "The network endpoint or port may be incorrect.",
            "A network, firewall, or configuration issue may be blocking access."
        ],
        actions: [
            "Check whether the target service is running.",
            "Verify the endpoint and connection settings.",
            "Review network logs and service availability."
        ]
    };

} else if (
    /(?:http|status code)\s*(?:500|502|503|504)\b/.test(error)
) {
    diagnosis = {
        category: "Server Error",
        explanation: "The response indicates a server-side failure. The underlying cause still needs investigation.",
        causes: [
            "The service may be temporarily unavailable.",
            "A dependent service may be failing or responding slowly.",
            "The server may be experiencing resource or configuration issues."
        ],
        actions: [
            "Check service logs around the failure timestamp.",
            "Inspect the response body and request ID, if available.",
            "Check the health of dependent services.",
            "Compare the failed request with a successful request."
        ]
    };

} else if (
    /(?:http|status code)\s*(?:400|401|403|404)\b/.test(error)
) {
    diagnosis = {
        category: "Client or Request Error",
        explanation: "The response indicates that the request may be invalid, unauthorised, or directed at an unavailable resource.",
        causes: [
            "The request payload or parameters may be invalid.",
            "Authentication or permissions may be incorrect.",
            "The requested endpoint or resource may not exist."
        ],
        actions: [
            "Inspect the HTTP status code and response body.",
            "Validate the request payload and endpoint.",
            "Check authentication credentials and permissions.",
            "Compare the request with the API documentation."
        ]
    };

} else if (
    error.includes("database connection failed") ||
    error.includes("could not connect to database") ||
    error.includes("connection to database refused")
) {
    diagnosis = {
        category: "Database Connection Failure",
        explanation: "The error indicates that the application could not establish the expected database connection.",
        causes: [
            "The database may be unavailable.",
            "The connection settings may be incorrect.",
            "Network access or connection limits may be preventing access."
        ],
        actions: [
            "Check the database service health.",
            "Verify the connection settings and network access.",
            "Review database logs and connection limits.",
            "Check whether the issue affects other requests."
        ]
    };

} else {
    // 2. Send unknown errors to the Gemini-powered backend.

    results.replaceChildren();

    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Analyzing your error with AI...";
    results.appendChild(loadingMessage);

    analyzeButton.disabled = true;

    try {
        const response = await fetch("/api/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                errorLog: errorMessage
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "The server could not analyze this error."
            );
        }

        // Display the AI-generated analysis.

        const analysis = data.analysis;

        if (!analysis || typeof analysis !== "object") {
            throw new Error("The server returned an unexpected AI response.");
        }

        results.replaceChildren();

        const heading = document.createElement("h3");
        heading.textContent = analysis.category || "AI Diagnosis";
        results.appendChild(heading);

        const explanation = document.createElement("p");
        explanation.textContent =
            analysis.explanation || "No explanation was provided.";
        results.appendChild(explanation);

        addList(
            "Possible causes",
            Array.isArray(analysis.causes) ? analysis.causes : []
        );

        addList(
            "Evidence from the error log",
            Array.isArray(analysis.evidence) ? analysis.evidence : []
        );

        addList(
            "Recommended next steps",
            Array.isArray(analysis.actions) ? analysis.actions : []
        );

        const uncertaintyHeading = document.createElement("h4");
        uncertaintyHeading.textContent = "Limitations and uncertainty";
        results.appendChild(uncertaintyHeading);

        const uncertainty = document.createElement("p");
        uncertainty.textContent =
            analysis.uncertainty ||
            "The available evidence may be insufficient to confirm the root cause.";
        results.appendChild(uncertainty);

        const note = document.createElement("p");
        note.textContent =
            "AI-generated analysis: possible causes are hypotheses, not confirmed root causes.";
        note.className = "disclaimer";
        results.appendChild(note);

    } catch (error) {
        results.replaceChildren();

        const errorHeading = document.createElement("h3");
        errorHeading.textContent = "Analysis Request Failed";
        results.appendChild(errorHeading);

        const errorDetails = document.createElement("p");
        errorDetails.textContent =
            "The AI analysis failed. Check that the Express server is running on port 3001. Details: " +
            error.message;
        results.appendChild(errorDetails);

    } finally {
        analyzeButton.disabled = false;
    }

    return;
}

// 3. Display results for known errors.
displayDiagnosis(diagnosis);

}

function displayDiagnosis(diagnosis) {
results.replaceChildren();

const heading = document.createElement("h3");
heading.textContent = diagnosis.category;
results.appendChild(heading);

const explanation = document.createElement("p");
explanation.textContent = diagnosis.explanation;
results.appendChild(explanation);

addList("Possible causes", diagnosis.causes);
addList("Recommended next steps", diagnosis.actions);

const note = document.createElement("p");
note.textContent =
    "These are preliminary hypotheses based on the error text, not a confirmed root cause.";
note.className = "disclaimer";
results.appendChild(note);

}

function addList(title, items) {
const heading = document.createElement("h4");
heading.textContent = title;
results.appendChild(heading);

const list = document.createElement("ul");

items.forEach(function (item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
});

results.appendChild(list);

}
