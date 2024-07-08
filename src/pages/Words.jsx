import styled from "styled-components";
import Table from "../components/Table";

const WordStyled = styled.main`
  h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .info {
    width: 480px;
    min-height: 200px;
    padding: 10px;
    background-color: #f99;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #000;
    p:nth-child(3) {
      margin: 20px 0;
    }
  }
  .alefbeth {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 500px;
    justify-content: center;
    p {
      width: 80px;
      justify-self: center;
      padding: 8px;
      background-color: #f99;
      color: #000;
      border-radius: 5px;
      transition: ease-in-out 0.2s;
      &:hover {
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
`;

const Words = () => {

  const verbs = [
    { verb: 'גר', group: 'פעל', infinitive: "לגור", present: ['גר', 'גרה', 'גרים','גרות'], meaning: 'vivir' },
    { verb: 'בא', group: 'פעל', infinitive: "לבוא", present: ['בא', 'באה', 'באים','באות'], meaning: 'ir' },
    { verb: 'רץ', group: 'פעל', infinitive: "לרוץ", present: ['רץ', 'רצה', 'רצים','רצות'], meaning: 'correr' },
    { verb: 'שר', group: 'פעל', infinitive: "לשאר", present: ['שר', 'שרה', 'שרים','שרות'], meaning: 'cantar' },
    { verb: 'שם', group: 'פעל', infinitive: "לשאם", present: ['שם', 'שמה', 'שמים','שמות'], meaning: 'poner' },
    { verb: 'הולך', group: 'פעל', infinitive: "ללכת", present: ['הולך', 'הולכת', 'הולכים','הןלכות'], meaning: 'caminar' },
    { verb: 'כותב', group: 'פעל', infinitive: "לכתוב", present: ['כותב', 'כותבת', 'כותבים','כותבות'], meaning: 'escribir' },
    { verb: 'לומד', group: 'פעל', infinitive: "ללמוד", present: ['לומד', 'לומדת', 'לומדים','לומדות'], meaning: 'estudiar' },
    { verb: 'עובד', group: 'פעל', infinitive: "לעבוד", present: ['עובד', 'עובדת', 'עובדים','עובדות'], meaning: 'trabajar' },
    { verb: 'אומר', group: 'פעל', infinitive: "לומר", present: ['אומר', 'אומרת', 'אומרים','אומרות'], meaning: 'decir' },
    { verb: 'אוכל', group: 'פעל', infinitive: "לאכול", present: ['אוכל', 'אוכלת', 'אוכלים','אוכלות'], meaning: 'comer/comida' },
    { verb: 'קורא', group: 'פעל', infinitive: "לקרוא", present: ['קורא', 'קוראת', 'קוראים','קוראות'], meaning: 'leer' },
    { verb: 'אוהב', group: 'פעל', infinitive: "לאהוב", present: ['אוהב', 'אוהבת', 'אוהבים','אוהבות'], meaning: 'amar/querer' },
    { verb: 'שומע', group: 'פעל', infinitive: "לשמוע", present: ['שומע', 'שומעת', 'שומעים','שומעות'], meaning: 'oir/escuchar' },
    { verb: 'יודע', group: 'פעל', infinitive: "לעדת", present: ['יודע', 'יודעת', 'יודעים','יודעות'], meaning: 'saber' },
    { verb: 'רוצה', group: 'פעל', infinitive: "לרצות", present: ['רוצה', 'רוצה', 'ירוצים', 'רוצות'], meaning: 'querer' },
    { verb: 'שותה', group: 'פעל', infinitive: "לשתות", present: ['שותה', 'שותה', 'שותים', 'שותות'], meaning: 'tomar' },
    { verb: 'קונה', group: 'פעל', infinitive: "לקנות", present: ['קונה', 'קונה', 'קונים', 'קונות'], meaning: 'comprar' },
    { verb: 'רואה', group: 'פעל', infinitive: "לראות", present: ['רואה', 'רואה', 'רואים', 'רואות'], meaning: 'mirar' },
    { verb: 'בונה', group: 'פעל', infinitive: "לבנות", present: ['בונה', 'בונה','בונים', 'בונות'], meaning: 'construir' },
    { verb: 'עושה', group: 'פעל', infinitive: "לעשות", present: ['עושה', 'עושה', 'עושים', 'עושות'], meaning: 'hacer' },
    { verb: 'עולה', group: 'פעל', infinitive: "לעלות", present: ['עולה', 'עולה', 'עולים', 'עולום'], meaning: 'subir' },
    { verb: 'עונה', group: 'פעל', infinitive: "לענות", present: ['עונה', 'עונה', 'עונים', 'עונות'], meaning: 'responder' },
    { verb: 'שואל', group: 'פעל', infinitive: "לשאול", present: ['שואל', 'שואלת', 'שואלים', 'שואלות'], meaning: 'preguntar' },
    { verb: 'יושב', group: 'פעל', infinitive: "לשבת", present: ['יושב', 'יושבת', 'יושבים', 'יושבות'], meaning: 'sentarse' },
    { verb: 'מדבר', group: 'פיעל', infinitive: "לדבר", present: ['מדבר', 'מדברת', 'מדברים', 'מדברות'], meaning: 'hablar' },
    { verb: 'מטייל', group: 'פיעל', infinitive: "לטייל", present: ['מטייל', 'מטיילת', 'מטיילים', 'מטיילות'], meaning: 'pasear' },
    { verb: 'מחפש', group: 'פיעל', infinitive: "לחפש", present: ['מחפש', 'מחפשת', 'מחפשים', 'מחפשות'], meaning: 'buscar' },
    { verb: 'מקבל', group: 'פיעל', infinitive: "לקבל", present: ['מקבל', 'מקבלת', 'מקבלים', 'מקבלות'], meaning: 'recibir' },
    { verb: 'משלם', group: 'פיעל', infinitive: "לשלם", present: ['משלם', 'משלת', 'משלמים', 'משלמות'], meaning: 'pagar' },
    { verb: 'מספר', group: 'פיעל', infinitive: "לספר", present: ['מספר', 'מספרת', 'מספרים', 'מספרות'], meaning: 'relatar' },
    { verb: 'מקבר', group: 'פיעל', infinitive: "לקבר", present: ['מקבר', 'מקברת', 'מקברים', 'מקברות'], meaning: 'visitar' },
    { verb: 'מקבש', group: 'פיעל', infinitive: "לבקש", present: ['מקבש', 'מקבשת', 'מקבשים', 'מקבשות'], meaning: 'pedir' },
    { verb: 'מקבש', group: 'פיעל', infinitive: "לבקש", present: ['מקבש', 'מקבשת', 'מקבשים', 'מקבשות'], meaning: 'pedir' },
    { verb: 'מזמין', group: 'הפעיל', infinitive: "להזמין", present: ['מזמין', 'מזמינה', 'מזמינים', 'מזמינות'], meaning: 'invitar/pedir' },
    { verb: 'מרגיש', group: 'הפעיל', infinitive: "להרגיש", present: ['מרגיש', 'מרגישה', 'מרגישים', 'מרגישות'], meaning: 'sentir' },
    { verb: 'מתחיל', group: 'הפעיל', infinitive: "להתחיל", present: ['מתחיל', 'מתחילה', 'מתחילים', 'מתחילות'], meaning: 'comenzar' },
    { verb: 'ממשיך', group: 'הפעיל', infinitive: "להמשיך", present: ['ממשיך', 'ממשיכה', 'ממשיכים', 'ממשיכות'], meaning: 'continuar' },
    { verb: 'מפסיק', group: 'הפעיל', infinitive: "להפסיק", present: ['מפסיק', 'מפסיקה', 'מפסיקים', 'מפסיקות'], meaning: 'interrumpir' },
    { verb: 'מסביר', group: 'הפעיל', infinitive: "להסביר", present: ['מסביר', 'מסבירה', 'מסבירים', 'מסבירות'], meaning: 'explicar' },
    { verb: 'מצליח', group: 'הפעיל', infinitive: "להצליח", present: ['מצליח', 'מצליחה', 'מצליחים', 'מצליחות'], meaning: 'lograr' },
    { verb: 'מחליט', group: 'הפעיל', infinitive: "להחליט", present: ['מחליט', 'מחליטה', 'מחליטים', 'מחליטות'], meaning: 'decidir' },
    { verb: 'מכיר', group: 'הפעיל', infinitive: "להכיר", present: ['מכיר', 'מכירה', 'מכירים', 'מכירות'], meaning: 'conocer' },
    { verb: 'מגיע', group: 'הפעיל', infinitive: "להגיע", present: ['מגיע', 'מגיעה', 'מגיעים', 'מגיעות'], meaning: 'llegar' },
    { verb: 'מבין', group: 'הפעיל', infinitive: "להבין", present: ['מבין', 'מבינה', 'מבינים', 'מבינות'], meaning: 'entender' },
    { verb: 'מכין', group: 'הפעיל', infinitive: "להכין", present: ['מכין', 'מכינה', 'מכינים', 'מכינות'], meaning: 'preparar' },
    { verb: 'מודיע', group: 'הפעיל', infinitive: "להודיע", present: ['מודיע', 'מודיעה', 'מודיעים', 'מודיעות'], meaning: 'avisar/anunciar' },
    { verb: 'מוציא', group: 'הפעיל', infinitive: "להוציא", present: ['מוציא', 'מוציאה', 'מוציאים', 'מוציאות'], meaning: 'sacar/extraer' },
  ];

  return (
    <WordStyled>
      <Table data={ verbs } />
    </WordStyled>
  );
};

export default Words;
