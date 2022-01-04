import "./style.css";

function ArrowDown(currentPlayer = 1) {
  return /*html*/ `
        <img 
          data-currentPlayer="${currentPlayer}"
          class="arrow-down"
          src="./images/IconArrowDown.png" 
          alt="Ícone de uma seta para baixo">
    `;
}

export default ArrowDown;
