import Mix from "./Mix";
import AudioController from "./AudioController";

export default class Game {
    constructor(){
        this.overlays = document.querySelectorAll('.overlay-text');
        this.cards = document.querySelectorAll('.card');
        this.flipCounter = document.querySelector('.game-info__flips');
        this.imgBtn = document.querySelector('.btn__img--audio');
        this.muteBtn = document.querySelector('.btn--audio');
        this.muteBtn.addEventListener('click', this.muteMusic.bind(this))
        this.mix = new Mix();
        this.audio = new AudioController();
    }

    muteMusic(){
        if (this.muteBtn.classList.contains("btn--audio-on")) {
            this.audio.stopMusic();
            this.muteBtn.classList.remove('btn--audio-on');
            this.imgBtn.setAttribute("src", `./images/sound.svg`);
        } else{
            this.audio.startMusic();
            this.muteBtn.classList.add('btn--audio-on')
            this.imgBtn.setAttribute("src", `./images/mute.svg`);
        }
    }

    flipCard(card){
        card.classList.add('card--active')
        this.audio.flip();
        this.totalClick++;
        this.flipCounter.textContent = this.totalClick;
    }

    startGame(){
        this.mix.shuffleCards();
        this.totalClick = 0;
        this.audio.startMusic();
    }

    render(){
        this.overlays.forEach(overlay => {
            overlay.addEventListener('click', ()=>{
                overlay.classList.remove('overlay-text--visible');
                this.startGame();
            })
        })
        this.cards.forEach(card=>{
            card.addEventListener('click', ()=>{
                this.flipCard(card);
            })
        })
}
}