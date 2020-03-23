let hasFlipped = false;
let firsFlip, secondFlip;
let lockBoard = true;
const cards = document.querySelectorAll('.memory-card');

cards.forEach(card => {
    card.classList.add('flip');
    setTimeout(function () {
        card.classList.remove('flip');

    }, 1500);



});

function flipCard() {
    if (!lockBoard) {
        return;
    }
    this.classList.toggle('flip');
    if (!hasFlipped) {
        hasFlipped = true;
        firsFlip = this;
        firsFlip.removeEventListener('click', flipCard);


    } else {

        secondFlip = this;
        hasFlipped = false;
        secondFlip.removeEventListener('click', flipCard);
        lockBoard = false;



        if (firsFlip.dataset.cartype === secondFlip.dataset.cartype) {
            cardsMatched();

        } else
            cardsNotMatching();
    }
}
(function shuffle() {
    cards.forEach(card => {
        let randCard = Math.floor(Math.random() * 12);
        card.style.order = randCard;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));

function cardsMatched() {
    console.log("matchinng");
    firsFlip.removeEventListener('click', flipCard);
    secondFlip.removeEventListener('click', flipCard);
    lockBoard = true;

}

function cardsNotMatching() {
    {
        setTimeout(function () {
            firsFlip.classList.remove('flip');
            secondFlip.classList.remove('flip');
            firsFlip.addEventListener('click', flipCard);
            secondFlip.addEventListener('click', flipCard);
            lockBoard = true;

        }, 1000);
    }
}