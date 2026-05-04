export default function StartScreen() {
  function handleClick() {
    console.log("Quiz started!");
  }

  return (
    <section className="start-screen">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={handleClick}>Start Quiz</button>
    </section>
  );
}
