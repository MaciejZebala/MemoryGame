export default class Mix {
    constructor(){
        this.cardsArray = ['videogames', 'chess', 'heart', 'mushroom', 'snake', 'sword', 'pacman', 'spaceship', 'videogames', 'chess', 'heart', 'mushroom', 'snake', 'sword', 'pacman', 'spaceship'];
        this.cardsBack = document.querySelectorAll('.card__side--back');
    }

    shuffleCards(){
        let shuffleCardsArray = [];

        this.cardsBack.forEach(card=>{
            let randIndex = Math.floor(Math.random() * this.cardsArray.length);
            const cardImg = document.createElement('img');
            card.appendChild(cardImg);
            cardImg.classList.add('card__img');
            cardImg.setAttribute("src", `./images/${this.cardsArray[randIndex]}.svg`);
            shuffleCardsArray.push(this.cardsArray[randIndex]);
            this.cardsArray.splice(randIndex, 1);
        })
    }
}