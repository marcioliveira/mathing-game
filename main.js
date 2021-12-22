import "./src/styles/settings/colors.css";
import "./src/styles/generic/generic.css";
import "./src/styles/elements/base.css";
import BordGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBordGame = BordGame(10);

// Não usar innerHTML por problemas de seguranca
// root.innerHTML = $htmlCardGame;

$root.insertAdjacentHTML("beforeend", $htmlBordGame);

// console.log($root.textContent);
