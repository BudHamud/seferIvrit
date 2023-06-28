import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import learnAPI from "../api/learnAPI";
import styled from "styled-components";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Learn = () => {
  const { user } = useContext(AuthContext);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const unit = user.progress.unit;
        const levelArr = await learnAPI.getLevels(unit);
        setLevels(levelArr);
      } catch (error) {
        console.error(error);
      }
    };

    if (user.length !== 0) {
      fetchLevels();
    }
  }, [user]);

  return (
    <UnitStyle>
      {levels.length !== 0 && <h1>Unidad {user.progress.unit}:</h1>}
      {user.length !== 0 ? (
        <section>
          {levels.length !== 0 ? (
            levels.map((e) => (
              <Link key={e._id} to={"/learn"}>
                {e.level}
              </Link>
            ))
          ) : (
            <Loading />
          )}
        </section>
      ) : (
        <p>Debes iniciar sesión para acceder a esta página.</p>
      )}
    </UnitStyle>
  );
};

export default Learn;

const UnitStyle = styled.main`
  h1 {
    margin-bottom: 20px;
  }
  section {
    display: flex;
    gap: 10px;
    a {
      color: #fff;
      padding: 10px;
      border-radius: 10px;
      text-decoration: none;
      background-color: transparent;
      border: solid 2px #e57c23;
      :hover {
        background-color: #e57c23;
        cursor: pointer;
      }
    }
  }
`;
