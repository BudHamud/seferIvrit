import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import learnAPI from "../api/learnAPI";
import styled from "styled-components";

const LearnStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      list-style: none;
    }
  }
`;

const Learn = () => {
  const { user } = useContext(AuthContext);
  const [levels, setLevels] = useState([]);
  const [ansArr, setAns] = useState([]) 

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const level = user.progress.level;
        const unit = user.progress.unit;
        const levelArr = await learnAPI.getLevels(level, unit);
        setLevels(levelArr[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (user.length !== 0) {
      fetchLevels();
    }
  }, [user]);

  const saveAnswer = (i) => {
    let arr = ansArr
    arr.push(levels.exercises[0].answers[i].isCorrect)
    setAns(arr)
  }

  return (
    <LearnStyle>
      {user.length !== 0 ? (
        <section>
          <h1>Unidad {user.progress.unit}:</h1>
          { levels.length !== 0 ? levels.exercises.map((e, i) =>(
            <div key={i}>
            <p>{e.question}</p>
            {
              e.answers.map((ans, i) => (
                <button key={i} onClick={() => saveAnswer(i)}>{ans.text}</button>
              ))
            }
            </div>
          )): '' }
        </section>
      ) : (
        <p>Debes iniciar sesión para acceder a esta página.</p>
      )}
    </LearnStyle>
  );
};

export default Learn;