# Testify 🎓

**Testify** is a web-based examination and mock testing platform built to help students prepare for competitive entrance and recruitment exams including **JEE / BITSAT**, **NEET**, **EAMCET**, **GATE**, and **UPSC**.

---

## 🚀 Features

- **Multi-Exam Coverage**: Tailored exam interfaces for competitive exams like GATE, NEET, EAMCET, UPSC, and subject-specific modules (Physics, Chemistry, Mathematics).
- **Interactive Testing Interface**: Real-time quiz system with question navigation, timer, and score calculation.
- **Dynamic Question Bank**: Backend powered by SQLite storing questions, multiple-choice options, and answer keys.
- **Student Dashboard**: Overview interface for test history, performance insights, and quick navigation.
- **RESTful Endpoints**: APIs to fetch questions, retrieve answer keys, and dynamically submit/add questions.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+)
- **Body Parsing**: `body-parser`

---

## 📁 Project Structure

```text
tuteweb/
├── database/
│   ├── db.js              # SQLite connection and schema initialization
│   ├── test.db            # Primary SQLite database file
│   └── mydatabase.db      # Auxiliary database
├── public/                # Static assets and frontend pages
│   ├── testify.html       # Landing page (homepage)
│   ├── dashboard.html     # User dashboard
│   ├── logind.html        # Authentication / login interface
│   ├── gate.html          # GATE exam interface
│   ├── neet.html          # NEET exam interface
│   ├── emcet-exam.html    # EAMCET exam interface
│   ├── upsc.html          # UPSC exam interface
│   ├── math.html          # Mathematics subject test
│   ├── physics.html       # Physics subject test
│   ├── chemistry.html     # Chemistry subject test
│   ├── style.css          # Global styling
│   └── ...
├── server.js              # Express application server and API routes
├── package.json           # Dependencies and scripts
└── .gitignore             # Git ignore file
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- `npm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hariomagrahari789/testify.git
   cd testify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. *(Optional)* If switching platforms or facing binary bindings issues:
   ```bash
   npm rebuild sqlite3
   ```

---

## 🏃 Running the Application

Start the local server:

```bash
npm start
```

Or run directly with Node:

```bash
node server.js
```

The application will be accessible at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔌 API Endpoints

| Method | Endpoint               | Description                                           |
|:-------|:-----------------------|:------------------------------------------------------|
| `GET`  | `/`                    | Serves the main landing page (`testify.html`)         |
| `GET`  | `/get-questions`       | Returns all questions with options A, B, C, and D     |
| `GET`  | `/get-correct-answers` | Returns question options and the correct answer keys  |
| `POST` | `/add-question`        | Adds a new question with multiple-choice options      |

### Example: Adding a Question

```bash
curl -X POST http://localhost:3000/add-question \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What is the unit of force in SI units?",
    "option_a": "Joule",
    "option_b": "Newton",
    "option_c": "Pascal",
    "option_d": "Watt",
    "correct_option": "option_b"
  }'
```

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
