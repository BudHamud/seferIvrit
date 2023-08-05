import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #e57c23;
  padding: 20px;
  text-align: center;
  max-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #333;
    text-decoration: underline;
    &:hover {
      color: #555;
    }
  }
  @media (max-width: 425px) {
    img {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        © 2023 Beit Sefer | Desarrollado por{" "}
        <a href="https://www.linkedin.com/in/adrielcamacho/">
          Adriel Camacho
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
