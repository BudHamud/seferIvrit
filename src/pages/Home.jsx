import styled from "styled-components";
import { CardHome } from '../components/Cards'

const Home = () => {
  const resources = [
    {
      img: '/learn.svg',
      title: 'Aprende',
      text: 'Ofrecemos una parte en donde poder hacer ejercicios según la unidad en la que te encuentres',
      to: ['/unit', 'Ir']
    },
    {
      img: '/chat.svg',
      title: 'Comparte',
      text: 'En la pestaña de chat podrás hablar con otros alumnos que se encuentren utilizando la plataforma.',
      to: ['/unit', 'Ir']
    }
  ]

  return (
    <HomeStyle>
      <section>
        <article>
          <h1>Bienvenidos / ברוך הבא</h1>
          <p>
            Bienaventuradas aquellas personas que se hayan topado con esta
            maravillosa plataforma
          </p>
        </article>
        <img src="/logo.svg" alt="logo" />
      </section>

      <section>
      <h2>Recursos que la página ofrece:</h2>
      <article>
      {
        resources.map((e, i) => (
          <CardHome key={i} item={e} />
        ))
      }
      </article>
      </section>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  section:nth-child(1) {
    display: flex;
    img {
      width: 250px;
    }
  }
  section:nth-child(2) {
    h2 {
      margin-bottom: 20px;
      text-align: center;
    }
    article {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
  @media (width < 990px) {
    section:nth-child(1) {
      text-align: center;
      width: 70%;
      margin-bottom: 50px;
      img {
        display: none;
      }
    }
  }
  @media (width < 480px) {
    section:nth-child(1) {
      width: 90%;
    }
    section:nth-child(2) {
      img {
        width: 50px;
      }
    }
  }
`;

export const OldStyles = styled.main`
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
