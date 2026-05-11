import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";

function App() {
  document.title = "Quizzical";

  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [quizCount, setQuizCount] = useState([0]);
  console.log(quizCount);

  useEffect(() => {
    console.log("I will run once!");

    const controller = new AbortController();

    fetch("https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple")
      .then((res) => {
        if (!res.ok) {
          throw Error("Quiz questions failed to load");
          // Error will throw during testing, but won't in production
        }
        return res.json();
      })
      .then((data) => setQuestions(data));
    return () => controller.abort();
  }, [quizCount]);

  return (
    <div className="App">
      <main>
        {!quizStarted && <StartScreen setQuizStarted={setQuizStarted} />}
        {quizStarted && (
          <QuizScreen questions={questions} setQuizCount={setQuizCount} />
        )}
      </main>
    </div>
  );
}

export default App;
