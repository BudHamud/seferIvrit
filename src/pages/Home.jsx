import styled from "styled-components";
import CardHome from '../components/CardHome'

const Home = () => {
  return (
    <HomeStyle>
      <h1>Bienvenidos / ברוך הבא</h1>

      <CardHome
        imgSrc={"./aleph.svg"}
        title={'Palabras'}
        text={"Descubre nuevas palabras y amplía tu vocabulario."}
        to={["/words", "Ver"]}
      />

      <CardHome
        imgSrc={"./dictionary.svg"}
        title={'Aprender'}
        text={"Participa en juegos interactivos para mejorar tus habilidades."}
        to={["/unit", "Explorar"]}
      />

      <CardHome
        imgSrc={"./jala.png"}
        title={'Recursos'}
        text={"Encuentra recursos útiles para aprender y practicar."}
      />

      <CardHome
        imgSrc={"./community.svg"}
        title={'Comunidad'}
        text={"Únete a nuestra comunidad para compartir experiencias y conocimientos."}

      />

      <CardHome
        imgSrc={"./credentials.svg"}
        title={'Iniciar sesión'}
        text={"Accede a tu cuenta para guardar tus progresos y obtener más beneficios."}
      />
    </HomeStyle>
  );
};

export default Home;


const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  h1 {
    margin-bottom: 20px;
  }
  section {
    margin-top: 40px;
    display: flex;
    img {
      width: 150px;
      margin: 0 20px;
      /* filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg)
      brightness(100%) contrast(100%); */
    }
    &:nth-child(2n + 1) {
      text-align: end;
      flex-direction: row-reverse;
    }
    .info {
      align-self: center;
      h2 {
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 20px;
      }
      .link {
        a {
          background-color: #f66;
          color: #fff;
          padding: 7px;
          border-radius: 5px;
          text-decoration: none;
        }
      }
    }
  }
`;