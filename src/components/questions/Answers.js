export default function Answers(props) {
  const answerElements = props.answers.map((answer, index) => {
    const answerId = `${props.questionId}-${index}`;

    return (
      <div key={index} className="answer">
        <input
          type="radio"
          id={answerId}
          className="answer-radio"
          name={props.questionId}
          value={JSON.stringify({
            answerId: answerId,
            value: answer.isCorrect,
          })}
        />
        <label key={index} className="answer-label" htmlFor={answerId}>
          {answer.text}
        </label>
      </div>
    );
  });

  return <div className="answers">{answerElements}</div>;
}
