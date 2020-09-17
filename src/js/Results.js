import DataBase from "./DataBase";

export default class Results {
    constructor(){
        this.gameOverOverlay = document.getElementById('game-over-text')
        this.scoreList = document.querySelector('.score-list')
        this.victoryOverlay = document.getElementById('victory-game-text')
    }

    gameOverFunction(timer, music){
        clearInterval(timer);
        music;
        this.gameOverOverlay.classList.add('overlay-text--visible');
    }

    victoryFunction(timer, music) {
        clearInterval(timer);
        music;
        this.victoryOverlay.appendChild(this.scoreList);
        this.victoryOverlay.classList.add('overlay-text--visible');
        // document.getElementById('victory-game-text').appendChild(this.scoreList).classList.add('overlay-text--visible');
    }
}