import styled from "styled-components";

const AddStyle = styled.main``;

const Add = () => {
  return (
    <AddStyle>
      <form action="">
        <label htmlFor="type">Que tipo de palabra es:</label>

        <select name="typpe" id="type">
          <option value="simpleWords">Palabra Simple</option>
          <option value="specialWords">Palabra Especial</option>
          <option value="compplexWords">Palabra Compleja</option>
          <option value="wordsWithGenre">Palabra con Género</option>
          <option value="verbs">Verbo</option>
        </select>
      </form>
    </AddStyle>
  );
};

export default Add;
