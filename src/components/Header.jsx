import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #e57c23;
  display: flex;
  align-items: center;
  justify-content: space-around;
  nav {
    display: flex;
    ul {
      display: flex;
      align-items: center;
      gap: 15px;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
    .user {
      li {
        img {
          width: 40px;
          filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg)
            brightness(100%) contrast(100%);
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      margin: 0 10px;
      background-color: #fff;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <img src="./logo.svg" />
        Sefer Ivrit
      </div>
      <nav>
        <ul className="common">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/words"}>Alfabeto</Link>
          </li>
        </ul>
        <ul className="user">
          <li>
            <img src="./userIcon.svg" />
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
