

function Result({ score, restartGame }) {
  return (
    <div className="result">
      <h2>Your final score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default Result;
