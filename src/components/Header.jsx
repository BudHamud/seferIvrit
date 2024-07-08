import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import AuthModal from "./AuthModal";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <HeaderStyled isNavOpen={isNavOpen}>
      <Link to={'/'} className="logo">
        <img src="/logo.svg" alt="Logo" />
        Beit Sefer
      </Link>
      <nav>
        <ul className="common">
          <li>
            <Link to="/unit">
              <img src="/learn.svg" alt="learn" />
            </Link>
          </li>
        </ul>
        <ul className="user">
          <li className="unread">
            <Link to={'/chat'}><img src="/chat.svg" alt="chat" /></Link>
            <div />
          </li>
          <AuthModal />
        </ul>
      </nav>
      <img className="book" src="/book.svg" onClick={handleNavToggle} />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  background-color: #e57c23;
  display: flex;
  align-items: center;
  justify-content: space-around;
  nav {
    display: flex;
    ul:nth-child(1) {
      gap: 15px;
    }
    ul {
      display: flex;
      align-items: center;
      .unread {
        position: relative;
        div {
          display: none;
          right: 6px;
          top: 8px;
          position: absolute;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background-color: #FCC;
        }
      }
      li {
        display: flex;
        border-radius: 5px;
        transition: ease-in-out 0.2s;
        padding: 5px;
        margin: 0 5px;
        align-items: center;
        &:hover {
          cursor: pointer;
          background-color: #fff;
          color: #000;
        }
        img {
            width: 30px;
          }
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
  .logo {
    color: #FFF;
    display: flex;
    align-items: center;
    transition: ease-in-out .2s;
    border-radius: 5px;
    padding-right: 10px;
    &:hover {
      background-color: #FFF;
      color: #000;
    }
    img {
      width: 50px;
      margin-right: 10px;
      background-color: #fff;
      border-radius: 5px;
      padding: 5px;
    }
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .book {
    display: none;
  }

  @keyframes flip {
    0% {
      width: 0;
      opacity: 0;
    }
    100% {
      width: 100%;
      opacity: 1;
    }
  }
  @media (max-width: 425px) {
    nav {
      display: none;
      background-color: #995c29;
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      justify-content: center;
      flex-direction: column-reverse;
      animation: flip 0.25s;
      ul {
        flex-direction: column;
      }
      ${(props) =>
        props.isNavOpen &&
        css`
          display: flex;
        `}
    }
    .book {
      display: block;
      width: 50px;
      z-index: 2;
    }
  }
`;
