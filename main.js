import "./src/styles/settings/colors.css";
import "./src/styles/generic/generic.css";
import "./src/styles/elements/base.css";
import BordGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");

// Não usar innerHTML por problemas de seguranca
// root.innerHTML = $htmlCardGame;

$root.insertAdjacentHTML(
  "beforeend",
  ` 
    ${ScoreBoard()}
    ${BordGame(6)}
  `
);

// console.log($root.textContent);
