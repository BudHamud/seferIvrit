import React, { useContext, useState } from "react";
// import Loading from "../components/Loading";
// import GetUnit from "../hooks/GetUnit";
import Answers from "../components/Answers";
import styled from "styled-components";
import Results from "../components/Results";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import userAPI from "../api/userAPI";

const Learn = () => {
  const { user, updateUser } = useContext(AuthContext);
  // const [loading, unit] = GetUnit();

  const unit = JSON.parse(localStorage.getItem("lesson"));

  const [actual, setActual] = useState(0);
  const [totalXP, setXP] = useState(0);
  const [resultArr, setResult] = useState([]);

  const nextQuestion = (isCorrect) => {
    if (isCorrect) {
      setXP((prevXP) => prevXP + 5);
    }

    if (actual === unit.content.length - 1) {
      const updateData = {
        xp: isCorrect ? totalXP + 5 : totalXP,
        unit: unit.unit,
        level: unit.level,
        id: user._id,
      };

      userAPI.updateStats(updateData);
      updateUser({
        ...user,
        xp: isCorrect ? user.xp + totalXP + 5 : user.xp + totalXP,
      });
    }

    let arr = resultArr;
    arr.push(isCorrect);
    setActual(actual + 1);
    setResult(arr);
  };

  return (
    <LearnStyle>
      <section>
        <Link to={"/unit"}>Volver</Link>
        <div className="progressBar" style={{ width: `${actual * 25}%` }} />
        {actual === unit.content.length ? (
          <div className="result">
            <p>Tu resultado:</p>
            <Results results={resultArr} />
            <p>Ganaste {totalXP} puntos de XP</p>
          </div>
        ) : (
          <React.Fragment>
            <p>{unit.content[actual].question}</p>
            <Answers
              ansArr={unit.content[actual].answers}
              myFunc={nextQuestion}
            />
          </React.Fragment>
        )}
      </section>
    </LearnStyle>
  );
};

export default Learn;

const LearnStyle = styled.main`
  section {
    width: 500px;
    a {
      padding: 5px;
      border-radius: 5px;
      color: #fff;
      transition: 0.2s ease-in-out;
      :hover {
        background-color: #fff;
        color: #000;
      }
    }
    .progressBar {
      height: 10px;
      background-color: #e0e0e0;
      width: 0;
      transition: width 0.3s ease-in-out;
      margin: 20px 0;
    }
    .result {
      .resultBlock {
        margin: 10px 0;
      }
    }
    .answers {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      button {
        background-color: transparent;
        border: solid 2px #fff;
        border-radius: 5px;
        padding: 8px;
        transition: ease-in-out 0.2s;
        :hover {
          background-color: #fff;
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
  @media (width < 768px) {
    section {
      width: 90%;
    }
  }
`;
