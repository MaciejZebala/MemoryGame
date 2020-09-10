export default class Results {
    constructor(){
        this.gameOverOverlay = document.getElementById('game-over-text')
    }

    gameOverFunction(timer, music){
        clearInterval(timer);
        music;
        this.gameOverOverlay.classList.add('overlay-text--visible');
    }

    victoryFunction(timer, music) {
        clearInterval(timer);
        music;
        document.getElementById('victory-game-text').classList.add('overlay-text--visible');
    }
}