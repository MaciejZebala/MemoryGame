import Mix from "./Mix";

export default class Game {
    constructor(){
        this.overlays = document.querySelectorAll('.overlay-text');
        this.cards = document.querySelectorAll('.cards');
        this.mix = new Mix();
    }

    startGame(){
        this.mix.shuffleCards();
    }

    render(){
        this.overlays.forEach(overlay => {
            overlay.addEventListener('click', ()=>{
                overlay.classList.remove('overlay-text--visible');
                this.startGame();
            })
        })
    }
}