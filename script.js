var cards = document.getElementsByClassName('page');

console.log(cards);
for (i = 0; i < cards.length; i++) {
    console.log(i);

  console.log(cards[i]);
  cards[i].addEventListener('click', flipCard);
}

function flipCard() {
  this.classList.toggle('flipped');
}