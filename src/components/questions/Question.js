import Answers from "./Answers";

export default function Question(props) {
  // console.log(props.question);

  return (
    <div className="question">
      <p>{props.question}</p>
      <Answers
        questionId={props.questionId}
        question={props.question}
        answers={props.answers}
        selectedAnswer={props.selectedAnswer}
      />
      <hr className="question-underline" />
    </div>
  );
}
