export default class Game {
    constructor(){
        this.overlays = document.querySelectorAll('.overlay-text');
        this.cards = document.querySelectorAll('.cards');
    }

    render(){
        this.overlays.forEach(overlay => {
            overlay.addEventListener('click', ()=>{
                overlay.classList.remove('overlay-text--visible');
            })
        })
    }
}