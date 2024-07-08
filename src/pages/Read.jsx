import { Link } from "react-router-dom";
import styled from "styled-components";
import Table from "../components/Table";
import Board from "../components/Board";


const ReadStyled = styled.main`
  text-align: start;
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
  h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .info {
    width: 480px;
    min-height: 200px;
    padding: 10px;
    background-color: #f99;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #000;
    p:nth-child(3) {
      margin: 20px 0;
    }
  }
  .alefbeth {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 500px;
    justify-content: center;
    p {
      width: 80px;
      justify-self: center;
      padding: 8px;
      background-color: #f99;
      color: #000;
      border-radius: 5px;
      transition: ease-in-out 0.2s;
      &:hover {
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
`;

const Read = () => {

  const lesson = JSON.parse(localStorage.getItem('lesson'))

  return ( 
    <ReadStyled>
      <Link to={"/unit"}>Volver</Link>
      <h3>{lesson.title}</h3>

      { lesson.type == 'table' && <Table data={ lesson.content } /> }
      { lesson.type == 'board' && <Board data={ lesson.content } /> }
      
    </ReadStyled>
  );
};
export default Read;
