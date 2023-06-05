import styled from "styled-components";

const WordStyled = styled.main`
h3 {
    display: flex;
    justify-content: center;
}
  .alefbeth {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    p {
      padding: 8px;
      background-color: #f99;
      color: #000;
      border-radius: 5px;
    }
  }
`;

const Words = () => {
  const alefbeth = [
    "א",
    "ב",
    "ג",
    "ד",
    "ה",
    "ו",
    "ז",
    "ח",
    "י",
    "כ",
    "ל",
    "מ",
    "נ",
    "ס",
    "ע",
    "פ",
    "צ",
    "ק",
    "ר",
    "ש",
    "ת",
  ];

  return (
    <WordStyled>
      <h3>Alfabeto Hebreo (alefato)</h3>
      <div className="alefbeth">
        {alefbeth.map((word, i) => (
          <p key={i}>{word}</p>
        ))}
      </div>
    </WordStyled>
  );
};

export default Words;
