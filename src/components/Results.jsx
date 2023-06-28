const Results = ({ results }) => {
  return (
    <div className="resultBlock">
      {results.map((e, i) => (
        <p key={i}>
          {i + 1}. {e ? "Correcto" : "Incorrecto"}
        </p>
      ))}
    </div>
  );
};

export default Results;
