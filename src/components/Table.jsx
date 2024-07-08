import styled from "styled-components";
import React from "react";

// const columns = [
//   { field: "infinitive", headerName: "Infinitivo" },
//   { field: "pluralM", headerName: "Plural ♂" },
//   { field: "pluralF", headerName: "Plural ♀" },
//   { field: "singularM", headerName: "Singular ♂" },
//   { field: "singularF", headerName: "Singular ♀" },
// ];

// const rows = [
//   { infinitive: "לגור", pluralM: 'גר', pluralF: 'גרה', singularM: 'גרים', singularF:'גרות', meaning: 'vivir' },
//   { infinitive: "לבוא", pluralM: 'בא', pluralF: 'באה', singularM: 'באים', singularF:'באות', meaning: 'ir' },
//   { infinitive: "לרוץ", pluralM: 'רץ', pluralF: 'רצה', singularM: 'רצים', singularF:'רצות', meaning: 'correr' },
//   { infinitive: "לשאר", pluralM: 'שר', pluralF: 'שרה', singularM: 'שרים', singularF:'שרות', meaning: 'cantar' },
//   { infinitive: "לשאם", pluralM: 'שם', pluralF: 'שמה', singularM: 'שמים', singularF:'שמות', meaning: 'poner' },
//   { infinitive: "ללכת", pluralM: 'הולך', pluralF: 'הולכת', singularM: 'הולכים', singularF:'הןלכות', meaning: 'caminar' },
//   { infinitive: "לכתוב", pluralM: 'כותב', pluralF: 'כותבת', singularM: 'כותבים', singularF:'כותבות', meaning: 'escribir' },
//   { infinitive: "ללמוד", pluralM: 'לומד', pluralF: 'לומדת', singularM: 'לומדים', singularF:'לומדות', meaning: 'estudiar' },
//   { infinitive: "לעבוד", pluralM: 'עובד', pluralF: 'עובדת', singularM: 'עובדים', singularF:'עובדות', meaning: 'trabajar' },
//   { infinitive: "לומר", pluralM: 'אומר', pluralF: 'אומרת', singularM: 'אומרים', singularF:'אומרות', meaning: 'decir' },
//   { infinitive: "לאכול", pluralM: 'אוכל', pluralF: 'אוכלת', singularM: 'אוכלים', singularF:'אוכלות', meaning: 'comer/comida' },
//   { infinitive: "לקרוא", pluralM: 'קורא', pluralF: 'קוראת', singularM: 'קוראים', singularF:'קוראות', meaning: 'leer' },
//   { infinitive: "לאהוב", pluralM: 'אוהב', pluralF: 'אוהבת', singularM: 'אוהבים', singularF:'אוהבות', meaning: 'amar/querer' },
//   { infinitive: "לשמוע", pluralM: 'שומע', pluralF: 'שומעת', singularM: 'שומעים', singularF:'שומעות', meaning: 'oir/escuchar' },
//   { infinitive: "לעדת", pluralM: 'יודע', pluralF: 'יודעת', singularM: 'יודעים', singularF:'יודעות', meaning: 'saber' },
//   { infinitive: "לרצות", pluralM: 'רוצה', pluralF: 'רוצה', singularM: 'ירוצים', singularF: 'רוצות', meaning: 'querer' },
//   { infinitive: "לשתות", pluralM: 'שותה', pluralF: 'שותה', singularM: 'שותים', singularF: 'שותות', meaning: 'tomar' },
//   { infinitive: "לקנות", pluralM: 'קונה', pluralF: 'קונה', singularM: 'קונים', singularF: 'קונות', meaning: 'comprar' },
//   { infinitive: "לראות", pluralM: 'רואה', pluralF: 'רואה', singularM: 'רואים', singularF: 'רואות', meaning: 'mirar' },
//   { infinitive: "לבנות", pluralM: 'בונה', pluralF: 'בונה', singularM: 'בונים', singularF: 'בונות', meaning: 'construir' },
//   { infinitive: "לעשות", pluralM: 'עושה', pluralF: 'עושה', singularM: 'עושים', singularF: 'עושות', meaning: 'hacer' },
//   { infinitive: "לעלות", pluralM: 'עולה', pluralF: 'עולה', singularM: 'עולים', singularF: 'עולום', meaning: 'subir'  },
//   { infinitive: "לענות", pluralM: 'עונה', pluralF: 'עונה', singularM: 'עונים', singularF: 'עונות', meaning: 'responder' },
// ];

// const read = {
//   unit: 1,
//   level: 1,
//   type: 'board',
//   content: [
//     {
//       word: "א",
//       name: "Alef",
//       info: "Alef es la primer letra del abecedario hebreo y su sonido puede ser cualquier vocal o un silencio.",
//       example: [
//         "אוכל (Ojel) - Comer",
//         "En esta caso la Alef es muda porque el que produce el sonido de la O es la letra Vav (ו)",
//       ],
//     },
//     {
//       word: "ב",
//       name: "Bet",
//       info: "Bet es la segunda letra del abecedario hebreo y su sonido es 'b'.",
//       example: [
//         "בית (Beit) - Casa",
//         'En esta palabra, la letra Bet tiene un sonido claro de "b".',
//       ],
//     },
//     {
//       word: "ג",
//       name: "Gimel",
//       info: "Gimel es la tercera letra del abecedario hebreo y su sonido es 'g'.",
//       example: [
//         "גן (Gan) - Jardín",
//         'En este caso, la letra Gimel se pronuncia como "g".',
//       ],
//     },
//     {
//       word: "ד",
//       name: "Dalet",
//       info: "Dalet es la cuarta letra del abecedario hebreo y su sonido es 'd'.",
//       example: [
//         "דלת (Delet) - Puerta",
//         'La letra Dalet se pronuncia como "d" en esta palabra.',
//       ],
//     },
//     {
//       word: "ה",
//       name: "He",
//       info: "He es la quinta letra del abecedario hebreo y su sonido es 'h'.",
//       example: [
//         "הים (Hayam) - Mar",
//         'En esta palabra, la letra He tiene un sonido suave de "h".',
//       ],
//     },
//     {
//       word: "ו",
//       name: "Vav",
//       info: "Vav es la sexta letra del abecedario hebreo y su sonido es 'v' u 'o' u 'u'.",
//       example: [
//         "ויניגרט (Vinegret) - Aderezo",
//         'En esta palabra, la letra Vav puede sonar como "v", "o" u "u" dependiendo del dialecto.',
//       ],
//     },
//     {
//       word: "ז",
//       name: "Zain",
//       info: "Zain es la séptima letra del abecedario hebreo y su sonido es 'z'.",
//       example: [
//         "זהב (Zahav) - Oro",
//         'En esta palabra, la letra Zain se pronuncia como "z".',
//       ],
//     },
//     {
//       word: "ח",
//       name: "Jet",
//       info: "Jet es la octava letra del abecedario hebreo y su sonido es una 'j' gutural.",
//       example: [
//         "חלום (Jalom) - Sueño",
//         'La letra Jet se pronuncia de manera gutural, como una "j" francesa.',
//       ],
//     },
//     {
//       word: "ט",
//       name: "Tet",
//       info: "Tet es la novena letra del abecedario hebreo y su sonido es similar a una 't' suave.",
//       example: [
//         "טעם (Ta'am) - Sabor",
//         'La letra Tet tiene un sonido suave similar a una "t".',
//       ],
//     },
//     {
//       word: "י",
//       name: "Yod",
//       info: "Yod es la décima letra del abecedario hebreo y su sonido es una 'y' consonántica o puede ser una vocal.",
//       example: [
//         "יד (Yad) - Mano",
//         'La letra Yod puede sonar como "y" o funcionar como vocal en algunas palabras.',
//       ],
//     },
//     {
//       word: "כ",
//       name: "Kaf",
//       info: "Kaf es la undécima letra del abecedario hebreo y su sonido es 'k'.",
//       example: [
//         "כלב (Kelev) - Perro",
//         'La letra Kaf tiene un sonido claro de "k" en esta palabra.',
//       ],
//     },
//     {
//       word: "ל",
//       name: "Lamed",
//       info: "Lamed es la duodécima letra del abecedario hebreo y su sonido es 'l'.",
//       example: [
//         "לימון (Limon) - Limón",
//         'La letra Lamed se pronuncia como "l" en esta palabra.',
//       ],
//     },
//     {
//       word: "מ",
//       name: "Mem",
//       info: "Mem es la decimotercera letra del abecedario hebreo y su sonido es 'm'.",
//       example: [
//         "מים (Mayim) - Agua",
//         'En esta palabra, la letra Mem se pronuncia como "m".',
//       ],
//     },
//     {
//       word: "נ",
//       name: "Nun",
//       info: "Nun es la decimocuarta letra del abecedario hebreo y su sonido es 'n'.",
//       example: [
//         "נחש (Najash) - Serpiente",
//         'La letra Nun se pronuncia como "n" en esta palabra.',
//       ],
//     },
//     {
//       word: "ס",
//       name: "Samej",
//       info: "Samej es la decimoquinta letra del abecedario hebreo y su sonido es 's'.",
//       example: [
//         "סוף (Sof) - Final",
//         'En esta palabra, la letra Samej tiene un sonido claro de "s".',
//       ],
//     },
//     {
//       word: "ע",
//       name: "Ain",
//       info: "Ain es la decimosexta letra del abecedario hebreo y su sonido es una vocal gutural.",
//       example: [
//         "עין (Ayin) - Ojo",
//         "La letra Ain tiene un sonido gutural similar a una vocal.",
//       ],
//     },
//     {
//       word: "פ",
//       name: "Pe",
//       info: "Pe es la decimoséptima letra del abecedario hebreo y su sonido es 'p'.",
//       example: [
//         "פרח (Perach) - Flor",
//         'En esta palabra, la letra Pe tiene un sonido claro de "p".',
//       ],
//     },
//     {
//       word: "צ",
//       name: "Tsadi",
//       info: "Tsadi es la decimoctava letra del abecedario hebreo y su sonido es 'ts'.",
//       example: [
//         "צמח (Tzemach) - Planta",
//         'La letra Tsadi se pronuncia como "ts" en esta palabra.',
//       ],
//     },
//     {
//       word: "ק",
//       name: "Kof",
//       info: "Kof es la decimonovena letra del abecedario hebreo y su sonido es 'k'.",
//       example: [
//         "קרח (Karach) - Hielo",
//         'En esta palabra, la letra Kof tiene un sonido claro de "k".',
//       ],
//     },
//     {
//       word: "ר",
//       name: "Resh",
//       info: "Resh es la vigésima letra del abecedario hebreo y su sonido es una 'r' gutural.",
//       example: [
//         "ראש (Rosh) - Cabeza",
//         'La letra Resh se pronuncia de manera gutural, similar a una "r" francesa.',
//       ],
//     },
//     {
//       word: "ש",
//       name: "Shin",
//       info: "Shin es la vigésimo primera letra del abecedario hebreo y su sonido es 'sh'.",
//       example: [
//         "שמש (Shemesh) - Sol",
//         'En esta palabra, la letra Shin se pronuncia como "sh".',
//       ],
//     },
//     {
//       word: "ת",
//       name: "Tav",
//       info: "Tav es la vigésimo segunda y última letra del abecedario hebreo y su sonido es 't'.",
//       example: [
//         "תורה (Torah) - Torá",
//         'La letra Tav tiene un sonido claro de "t" en esta palabra.',
//       ],
//     },
//   ]
// }

const Table = ({ data }) => {
  return (
    <TableStyle num={Object.keys(data[0]).length}>
      <article>
        {Object.keys(data[0]).map((col, i) => (
          <div key={i}>
            <p>{col}</p>
          </div>
        ))}
      </article>
      <article>
        {data.map((row, i) => (
          <React.Fragment key={i}>
            {Object.keys(row).map((e, i) => {
              if (Array.isArray(row[e])) {
                return <p key={i}>{row[e][0]}</p>;
              } else {
                return <p key={i}>{row[e]}</p>;
              }
            })}
          </React.Fragment>
        ))}
      </article>
    </TableStyle>
  );
};

const TableStyle = styled.section`
  margin: 20px 0;
  article {
    display: grid;
    grid-template-columns: repeat(${(props) => props.num}, 1fr);
    border-right: 2px solid #fff;
    &:nth-child(1) {
      border-bottom: 2px solid #fff;
    }
    p {
      padding: 5px;
      border-left: 2px solid #fff;
    }
  }
`;

export default Table;
