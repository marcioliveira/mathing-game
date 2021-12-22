import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBordGame = $htmlCardGame.repeat(amountCards);
  return $htmlBordGame;
}

export default BoardGame;
