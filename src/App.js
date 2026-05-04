import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";

function App() {
  document.title = "Quizzical";

  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="App">
      <main>
        {!quizStarted && <StartScreen setQuizStarted={setQuizStarted} />}
        {quizStarted && <QuizScreen />}
      </main>
    </div>
  );
}

export default App;
