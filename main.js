import "./src/styles/settings/colors.css";
import "./src/styles/generic/generic.css";
import "./src/styles/elements/base.css";

import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");

// Não usar innerHTML por problemas de seguranca
// root.innerHTML = $htmlCardGame;

$root.insertAdjacentHTML(
  "beforeend",
  ` 
    ${ScoreBoard()}
    ${BoardGame(2)}
  `
);

// console.log($root.textContent);
