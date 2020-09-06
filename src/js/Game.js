import Mix from "./Mix";
import AudioController from "./AudioController";
import Results from "./Results";

export default class Game {
    constructor(totalTime){
        this.overlays = document.querySelectorAll('.overlay-text');
        this.cards = document.querySelectorAll('.card');
        this.flipCounter = document.querySelector('.game-info__flips');
        this.timeCounter = document.querySelector('.game-info__time');
        this.imgBtn = document.querySelector('.btn__img--audio');
        this.muteBtn = document.querySelector('.btn--audio');
        this.muteBtn.addEventListener('click', this.muteMusic.bind(this));
        this.totalTime = totalTime;
        this.mix = new Mix();
        this.audio = new AudioController();
        this.results = new Results();
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
        this.getCardType(card);
    }

    timer() {
        const timerCountdown = setInterval(() => {
            this.timeRemainig--;
            this.timeCounter.textContent = this.timeRemainig;
            if (this.timeRemainig === 0) {
                this.results.gameOverFunction(timerCountdown, this.audio.gameOver())
            }
        }, 1000);
    }

    getCardType(card){
        return card.getElementsByClassName('card__img--back')[0].src;
    }


    startGame(){
        this.totalClick = 0;
        this.timeRemainig = this.totalTime;
        setTimeout(() => {
            this.audio.startMusic();
            this.mix.shuffleCards();
            this.timer();
        }, 500);
        this.flipCounter.textContent = this.totalClick;
        this.timeCounter.textContent = this.timeRemainig;
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