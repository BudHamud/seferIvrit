

function Options({ options, checkAnswer }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          className="option"
          onClick={() => checkAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
