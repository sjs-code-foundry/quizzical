import Answers from "./Answers";

export default function Question(props) {
  return (
    <div className="question">
      <p>{props.question.question}</p>
      <Answers question={props.question.question} answers={props.answers} />
    </div>
  );
}
