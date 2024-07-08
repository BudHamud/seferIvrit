import { useState } from "react";
import styled from "styled-components";

const Keyboard = ( { sendBtn, getText } ) => {
  const [text, setText] = useState("");

  const values = [
    "'",
    "ק",
    "ר",
    "א",
    "ט",
    "ו",
    "ן",
    "ם",
    "פ",
    "ש",
    "ד",
    "ג",
    "כ",
    "ע",
    "י",
    "ח",
    "ל",
    "ך",
    "ף",
    "ז",
    "ס",
    "ב",
    "ה",
    "נ",
    "מ",
    "צ",
    "ת",
    "ץ",
    " "
  ];

  const changeText = (word) => {
    let str = text;
    str = text + word;
    setText(str);
  };

  const remove = () => {
    const updatedText = text.slice(0, -1);
    setText(updatedText);
  }

  return (
    <KeyboardStyle>
      <div>
        <input onChange={(e) => setText(e.target.value)} />
        <button onClick={remove}>←</button>
      </div>
      <div>
        {values.map((e) => (
          <button key={e} onClick={() => changeText(e)}>
            {e}
          </button>
        ))}
      </div>
      <button onClick={() => getText(text)}>{ sendBtn ? sendBtn : "Enviar" }</button>
    </KeyboardStyle>
  );
};

const KeyboardStyle = styled.article`
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  button {
    padding: 5px;
  }
`;

export default Keyboard;
