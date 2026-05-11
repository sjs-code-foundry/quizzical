import { decode } from "html-entities";

export default function Answers(props) {
  // console.log(props.selectedAnswer);

  const answerElements = props.answers.map((answer, index) => {
    const answerId = `${props.questionId}-${index}`;
    let ansLabelClassNames = "";

    if (props.quizComplete) {
      if (props.selectedAnswer.answerId === answerId) {
        props.selectedAnswer.value
          ? (ansLabelClassNames = "answer-label is-correct")
          : (ansLabelClassNames = "answer-label is-wrong");
      } else {
        ansLabelClassNames = "answer-label not-selected";
      }
    } else {
      ansLabelClassNames = "answer-label";
    }

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
        <label key={index} className={ansLabelClassNames} htmlFor={answerId}>
          {decode(answer.text)}
        </label>
      </div>
    );
  });

  return <div className="answers">{answerElements}</div>;
}
