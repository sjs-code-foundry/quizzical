export default function Answers(props) {
  console.log(props.selectedAnswer);

  const answerElements = props.answers.map((answer, index) => {
    const answerId = `${props.questionId}-${index}`;
    let ansClassNames = "";

    if (props.selectedAnswer.answerId === answerId) {
      props.selectedAnswer.value
        ? (ansClassNames = "answer-radio is-correct")
        : (ansClassNames = "answer-radio is-wrong");
    } else {
      ansClassNames = "answer-radio";
    }

    return (
      <div key={index} className="answer">
        <input
          type="radio"
          id={answerId}
          className={ansClassNames}
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
