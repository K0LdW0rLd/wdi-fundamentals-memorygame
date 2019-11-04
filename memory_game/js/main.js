const cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'CSS/images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'CSS/images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'CSS/images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'CSS/images/king-of-diamonds.png'
  }
];
const cardsInPlay = [];
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert('Sorry, try Again.');
  }
}
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  console.log('User flipped ' + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  if (cardsInPlay.length === 2){
    // Executes if length is equal to 2
    checkForMatch();
  }

}

function createBoard() {
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'CSS/images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard)
    document.getElementById('game-board').appendChild(cardElement);
  }
}



createBoard();
