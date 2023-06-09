import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #e57c23;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    align-self: flex-start
  }
  @media (max-width: 425px) {
    img {
      display: none;
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #555;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
    <img src="./logo.svg" />
      <FooterText>
        © 2023 Sefer Ivrit. Todos los derechos reservados. | Desarrollado por{" "}
        <FooterLink href="https://www.linkedin.com/in/adrielcamacho/">Adriel Camacho</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

