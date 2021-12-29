import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  //criamos o evento de click usando o namespace
  //e deixamos guardado no nosso componente
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest(".card-front-back");

    $cardFrontBack.classList.toggle("-active");

    console.log($origin);
    console.log($cardFrontBack);
  };
  return /*html*/ `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
            ${CardGame()}
            </div>
            <div class="card -back">
            ${CardGame("javascript", "Logo do JavaScript")}
            </div>
        </article>
    `;
}

export default CardFrontBack;
