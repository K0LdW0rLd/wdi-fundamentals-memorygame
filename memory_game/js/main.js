const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("Up and running!");
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2){
  // Executes if length is equal to 2
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert('Sorry, try Again.');
  }
}
