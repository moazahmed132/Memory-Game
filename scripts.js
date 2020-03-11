let hasFlipped = false;
let firsFlip , secondFlip ;
let lockBoard = false;
const cards = document.querySelectorAll('.memory-card');
function flipCard(){
    this.classList.toggle('flip');
    if(!hasFlipped){
        hasFlipped = true ; 
        firsFlip = this;
        firsFlip.removeEventListener('click',flipCard);
    
    }else{
         secondFlip = this ; 
         hasFlipped = false;
         secondFlip.removeEventListener('click',flipCard);

         if(firsFlip.dataset.cartype === secondFlip.dataset.cartype){
             console.log("matchinng");
             firsFlip.removeEventListener('click',flipCard);
             secondFlip.removeEventListener('click',flipCard);


         }else{
             setTimeout (function(){
                firsFlip.classList.remove('flip');
                secondFlip.classList.remove('flip');
                firsFlip.addEventListener('click',flipCard);
                secondFlip.addEventListener('click',flipCard);


            },1000);
             }
            
         }

    
}
(function shuffle(){
    cards.forEach(card => {
        let randCard = Math.floor(Math.random() * 12);
        card.style.order = randCard;
    });
})();
cards.forEach(card => card.addEventListener('click',flipCard));

