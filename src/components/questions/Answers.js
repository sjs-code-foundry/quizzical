export default function Answers(props) {
  const answerElements = props.answers.map((answer, index) => {
    return (
      <label key={index}>
        {answer.text}
        <input type="radio" name={props.question} value={answer.isCorrect} />
      </label>
    );
  });

  return <div className="answers">{answerElements}</div>;
}
