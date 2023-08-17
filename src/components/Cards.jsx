import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardHome = ({ item }) => {
  return (
    <CardHomeStyle>
      <img src={item.img} />

      <div className="info">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        {item.to && (
          <div className="link">
            <Link to={item.to[0]}>{item.to[1]}</Link>
          </div>
        )}
      </div>
    </CardHomeStyle>
  );
};

const CardHomeStyle = styled.div`
  display: flex;
  width: 450px;
  img {
    width: 150px;
    margin-right: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      color: #FFF;
      padding: 5px 15px;
      border: solid 2px #FFF;
      border-radius: 5px;
      transition: ease-in-out .2s;
      &:hover {
        background-color: #FFF;
        color: #000;
      }
    }
  }
`;
