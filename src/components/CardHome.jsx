import { Link } from "react-router-dom";

const CardHome = ({ imgSrc, title, text, to }) => {
    return (
        <section>
        <img src={ imgSrc } />

        <div className="info">
          <h2>{ title }</h2>
          <p>
            { text }
          </p>
          <div className="link">
            <Link to={ to[0] }>{ to[1] }</Link>
          </div>
        </div>
      </section>
    );
}

export default CardHome;
