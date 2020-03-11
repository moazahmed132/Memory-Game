let hasFlipped = false;
let firsFlip , secondFlip ;
const cards = document.querySelectorAll('.memory-card');
function flipCard(){
    this.classList.toggle('flip');
    if(!hasFlipped){
        hasFlipped = true ; 
        firsFlip = this;
    
    }else{
         secondFlip = this ; 
         hasFlipped = false;
         if(firsFlip.dataset.cartype === secondFlip.dataset.cartype){
             console.log("matchinng");
             firsFlip.removeEventListener('click',flipCard);
             secondFlip.removeEventListener('click',flipCard);


         }else{
             setTimeout (function(){
                firsFlip.classList.remove('flip');
                secondFlip.classList.remove('flip');
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

