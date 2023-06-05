import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    &:nth-child(2n + 1) {
      text-align: end;
      flex-direction: row-reverse;
    }
  }
`;

const WelcomeMessage = styled.h1`
  margin-bottom: 20px;
`;

const SectionContainer = styled.section`
  margin-top: 40px;
  display: flex;
  align-items: center;
  img {
    width: 150px;
    margin: 0 20px;
    /* filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg)
      brightness(100%) contrast(100%); */
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const SectionDescription = styled.p`
  margin-bottom: 20px;
`;

const LinkContainer = styled.div`
  margin-top: 10px;
  a {
    background-color: #F66;
    color: #FFF;
    padding: 7px;
    border-radius: 5px;
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <WelcomeMessage>Bienvenidos / ברוך הבא</WelcomeMessage>

      <SectionContainer>
        <img src="./aleph.svg" />
        <div className="info">
          <SectionTitle>Palabras</SectionTitle>
          <SectionDescription>
            Descubre nuevas palabras y amplía tu vocabulario.
          </SectionDescription>
          <LinkContainer>
            <Link to="/words">Explorar</Link>
          </LinkContainer>
        </div>
      </SectionContainer>

      <SectionContainer>
        <img src="./dictionary.svg" />
        <div className="info">
          <SectionTitle>Aprender</SectionTitle>
          <SectionDescription>
            Participa en juegos interactivos para mejorar tus habilidades.
          </SectionDescription>
          <LinkContainer>
            <Link to="/learn">Explorar</Link>
          </LinkContainer>
        </div>
      </SectionContainer>

      <SectionContainer>
        <img src="./jala.png" />
        <div className="info">
        <SectionTitle>Recursos</SectionTitle>
        <SectionDescription>
          Encuentra recursos útiles para aprender y practicar.
        </SectionDescription>
        <LinkContainer>
          <Link to="/resources">Explorar</Link>
        </LinkContainer>
        </div>
      </SectionContainer>

      <SectionContainer>
        <img src="./community.svg" />

        <div className="info">
          <SectionTitle>Comunidad</SectionTitle>
          <SectionDescription>
            Únete a nuestra comunidad para compartir experiencias y
            conocimientos.
          </SectionDescription>
          <LinkContainer>
            <Link to="/community">Explorar</Link>
          </LinkContainer>
        </div>
      </SectionContainer>

      <SectionContainer>
        <img src="./credentials.svg" />
        <div className="info">
          <SectionTitle>Iniciar sesión</SectionTitle>
          <SectionDescription>
            Accede a tu cuenta para guardar tus progresos y obtener más
            beneficios.
          </SectionDescription>
          <LinkContainer>
            <Link to="/login">Iniciar sesión</Link>
          </LinkContainer>
        </div>
      </SectionContainer>
    </HomeStyle>
  );
};

export default Home;
