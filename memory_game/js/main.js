const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert('Sorry, try Again.');
  }
}
function flipCard(cardId) {
  console.log('User flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2){
    // Executes if length is equal to 2
    checkForMatch();
  }
}
flipCard(0);
flipCard(2);
