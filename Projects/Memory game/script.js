document.addEventListener('DOMContentLoaded',()=>{
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

 
cardArray.sort(() => 0.5 - Math.random()); // for random images
 
const resultDisplay = document.querySelector("#result");
const gridDisplay = document.querySelector(".grid");
 

let cardsChosen = [];
let cardsChosenId = [];
const cardWon = [];
// create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);

    //console.log(card,i)
  }
}


function checkMatch() {
  const cards = document.querySelectorAll("img");
  
  const optionOneId=cardsChosenId[0]
  const optionTwoId=cardsChosenId[1]
  if (optionOneId==optionTwoId) {
    cards[cardsChosenId[0]].setAttribute("src", "images/blank.png");
    cards[cardsChosenId[1]].setAttribute("src", "images/blank.png");
    alert("you clicked the same image ");
  }
  else if (cardsChosen[0]===cardsChosen[1]) {
    alert("you find a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardWon.push(cardsChosen);
  }
   else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again");
  }
  
  cardsChosen = [];
  cardsChosenId = [];
    resultDisplay.textContent = cardWon.length;
  if (cardWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! you found them all! ";
  }
}

function flipCard() {

  //console.log(cardArray);
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId)
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

createBoard();
})