const Answers = ({ ansArr, myFunc }) => {
  return (
    <div className="answers">
      {ansArr.map((e, i) => (
        <button onClick={() => myFunc(e.isCorrect)} key={i}>
          {e.text}
        </button>
      ))}
    </div>
  );
};

export default Answers;
