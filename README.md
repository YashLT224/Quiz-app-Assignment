Sure! Here's a sample `README.md` for your project:

---

# Quiz Application

A simple React-based quiz application that uses `json-server` as a mock API for managing quiz questions, responses, and scores. Users can take a quiz, submit their answers, and view the final results with a graphical representation of their score.

## Features

- Dynamic quiz with multiple questions and options.
- Stores responses to each question and tracks correct/incorrect answers.
- Displays a graphical representation of the user's score at the end of the quiz.
- "Start Again" functionality to reset the quiz and responses.

## Technologies Used

- React (Frontend)
- `json-server` (Mock API)
- HTML/CSS for styling
- JavaScript for frontend logic

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js** (version >= 14)
- **npm** (version >= 6)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies**:

   Install the necessary Node.js packages for both the frontend (React) and the mock server:

   ```bash
   npm install
   ```

3. **Install `json-server`** globally if not already installed:

   ```bash
   npm install -g json-server
   ```

### Running the Application

#### Step 1: Start the React Frontend

To start the frontend in development mode:

```bash
npm start
```

This will run the React app on `http://localhost:3000`.

#### Step 2: Start the `json-server`

To serve the mock API, run the following command:

```bash
json-server --watch db.json --port 5001
```

This will serve the mock API on `http://localhost:5001`.

### Custom Routes with `json-server`

If you want to enable custom routes (such as resetting responses), you can run the custom `server.js`:

```bash
node server.js
```

This will provide an endpoint for resetting responses at:

```bash
http://localhost:5001/responses/reset
```

### Usage

1. **Take the Quiz**:
   - Visit `http://localhost:3000`.
   - Click on "Start Quiz" to begin the quiz.
   - Answer each question by selecting an option.
   - After answering all questions, you'll be directed to the result page where your score will be shown.

2. **Reset Responses**:
   - After viewing your results, you can click "Start Again" to reset the quiz and responses. This will reset the responses array in the mock API.

### Mock API

The application uses `json-server` to simulate a backend. The data is stored in `db.json`.

- **`/quiz`**: Endpoint that provides the quiz questions.
- **`/responses`**: Endpoint that stores the user's responses.
- **`/score`**: Endpoint that tracks total questions, correct answers, and incorrect answers.

#### Example `db.json` Structure:

```json
{
  "quiz": [
    {
      "id": 1,
      "questionId": 1,
      "question": "What is the largest planet in our solar system?",
      "options": ["Earth", "Mars", "Jupiter", "Venus"],
      "correctOption": "Jupiter"
    }
    // Additional questions...
  ],
  "responses": [],
  "score": {
    "totalQuestions": 5,
    "correctAnswers": 0,
    "incorrectAnswers": 0
  }
}
```

### Customizing the Quiz

To add new questions to the quiz or modify existing ones:

1. Open `db.json`.
2. Add or modify entries under the `quiz` array.

```json
{
  "id": 6,
  "questionId": 6,
  "question": "What is the capital city of France?",
  "options": ["Berlin", "Paris", "Rome", "Madrid"],
  "correctOption": "Paris"
}
```

### Styling

The project includes custom CSS for the quiz and results pages, including graphical representations of the score. You can modify the styles in the corresponding `.css` files.

### Future Improvements

- Add user authentication to save quiz attempts.
- Store and display past results for users.
- Implement a timer for each question.
- Improve the design with animations and transitions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify the content based on your specific needs! Let me know if you need further adjustments.