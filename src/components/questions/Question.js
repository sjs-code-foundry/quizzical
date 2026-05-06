export default function Question(props) {
  return (
    <div key={props.index}>
      <p>This is question {props.index + 1}</p>
    </div>
  );
}
