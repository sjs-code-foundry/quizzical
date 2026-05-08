import Answers from "./Answers";

export default function Question(props) {
  return (
    <div className="question">
      <p>{props.question.question}</p>
      <Answers
        questionId={props.questionId}
        question={props.question.question}
        answers={props.answers}
      />
      <hr className="question-underline" />
    </div>
  );
}
