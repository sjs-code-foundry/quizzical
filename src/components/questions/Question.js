import Answers from "./Answers";

export default function Question(props) {
  return (
    <div className="question">
      <p>{props.question}</p>
      <Answers
        questionId={props.questionId}
        question={props.question}
        answers={props.answers}
        selectedAnswer={props.selectedAnswer}
        quizComplete={props.quizComplete}
      />
      <hr className="question-underline" />
    </div>
  );
}
