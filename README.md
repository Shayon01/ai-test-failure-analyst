# AI Test Failure Analyst 🧪🤖

**An AI-powered assistant that helps software testers investigate test failures by analyzing error logs and recommending actionable debugging steps.**

## 📌 Overview

When automated tests fail, developers and QA engineers often spend time manually inspecting logs to understand what went wrong.

AI Test Failure Analyst aims to simplify this initial investigation. Users can submit a failed test's error log and receive an AI-generated analysis containing a plain-English explanation, possible causes, supporting evidence, and recommended next steps.

The goal is to reduce the effort required to begin investigating test failures—not to replace human debugging or guarantee a root cause.

## ✨ Features

* **Error Log Analysis:** Submit error messages and failed test logs for investigation.
* **AI-Generated Explanations:** Translate technical errors into understandable language.
* **Possible Root Causes:** Explore plausible explanations for a failure.
* **Evidence-Based Analysis:** Identify details in the provided log that support the diagnosis.
* **Recommended Actions:** Get practical suggestions for further investigation.
* **Uncertainty Awareness:** Distinguish potential causes from conclusions that the available evidence cannot confirm.
* **Backend API:** Process analysis requests through a Node.js and Express.js server.

## 🛠️ Technology Stack

| Technology        | Purpose                                  |
| ----------------- | ---------------------------------------- |
| HTML              | Application structure                    |
| CSS               | User interface styling                   |
| JavaScript        | Frontend interactions and API requests   |
| Node.js           | Backend runtime                          |
| Express.js        | HTTP server and API endpoints            |
| Google Gemini API | AI-powered error analysis                |
| dotenv            | Local environment variable configuration |

## 🔄 How It Works

1. The user submits an error log through the web interface.
2. The frontend sends the log to the backend API.
3. The backend prepares a prompt and requests an analysis from Google Gemini.
4. The AI returns a structured response.
5. The application displays the explanation, possible causes, evidence, recommended actions, and uncertainties.

## 💡 Example Use Case

**Input:**

```text
Payment test failed: Expected SUCCESS but received PENDING.
Error code: PAYMENT_STATE_MISMATCH.
Transaction ID: TXN-78321.
```

**Possible analysis:**

* **Category:** Payment state mismatch
* **Explanation:** The test expected the payment to reach `SUCCESS`, but the observed state was `PENDING`.
* **Possible causes:** Asynchronous processing, delayed status updates, callback handling, or test timing.
* **Evidence:** The expected and observed statuses differ.
* **Recommended investigation:** Inspect payment gateway logs, verify callback delivery, and review the test's polling or wait conditions.
* **Uncertainty:** The error log alone does not establish the actual root cause.

*This is an illustrative example. AI-generated findings are hypotheses that should be verified against application logs and system behavior.*

## 🚀 Getting Started

### Prerequisites

Install the following:

* Node.js and npm
* Git
* A Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/Shayon01/ai-test-failure-analyst.git
cd ai-test-failure-analyst
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Replace the placeholder with your own API key.

**Security:** Never commit your `.env` file or expose your API key in frontend code. The repository's `.gitignore` should exclude `.env` and `node_modules/`.

### 4. Start the application

```bash
node server.js
```

Open the application in your browser:

```text
http://localhost:3001
```

### 5. Check backend health

Visit:

```text
http://localhost:3001/api/health
```

The endpoint should return a successful status message when the server is running.

## 🔌 API Endpoint

### `POST /api/analyze`

Accepts an error log and returns an AI-generated analysis.

**Example request:**

```json
{
  "errorLog": "Payment test failed: Expected SUCCESS but received PENDING."
}
```

The response contains a status, message, the submitted error log, and a structured analysis.

The analysis includes:

* `category`
* `explanation`
* `causes`
* `evidence`
* `actions`
* `uncertainty`

AI analysis requires a valid API key, network access, and an available Gemini model.

## 🔮 Potential Future Improvements

* Support multiple log formats and testing frameworks.
* Add dedicated analysis templates for API, UI automation, database, and payment failures.
* Include confidence indicators and clearer evidence references.
* Add sample logs and automated backend tests.
* Support analysis history and downloadable reports.
* Introduce log redaction to reduce the risk of exposing sensitive information.
* Add authentication, request limits, and production-grade error handling.

## ⚠️ Current Limitations

This project is a prototype intended to support the initial investigation of software test failures.

* AI-generated explanations may be incorrect or incomplete.
* Suggested causes require verification.
* Analysis quality depends on the information in the supplied logs.
* The application requires a working Gemini API configuration for AI-powered analysis.
* It is not intended to automatically modify code or make production decisions.

## 👨‍💻 Author

**Shayon Shandilya**

Built as a practical project exploring AI-assisted debugging, API integration, and full-stack application development.

## 📂 Repository

[View the project on GitHub](https://github.com/Shayon01/ai-test-failure-analyst)
