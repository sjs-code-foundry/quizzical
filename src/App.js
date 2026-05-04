import logo from "./logo.svg";
import "./App.css";
import StartScreen from "./components/StartScreen";

function App() {
  document.title = "Quizzical";

  return (
    <div className="App">
      <main>
        <StartScreen />
      </main>
    </div>
  );
}

export default App;
