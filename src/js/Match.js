export default class Match {
    constructor(){
        this.matchedCards = [];
        this.cardToCheck = null;

    }
    checkCardForMatch(card){
        if(this.getCardType(card)===this.getCardType(this.cardToCheck)){
            this.cardMatch(card, this.cardToCheck)
        } else {
            this.cardMissMatch(card, this.cardToCheck);
        }
        this.cardToCheck = null;
    }

    getCardType(card){
        return card.getElementsByClassName('card__img--back')[0].src;
    }

    cardMatch(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        console.log(this.matchedCards)
    }

    cardMissMatch(card1, card2){
        setTimeout(()=>{
            card1.classList.remove('card--active');
            card2.classList.remove('card--active');
        },700)
        
    }

}