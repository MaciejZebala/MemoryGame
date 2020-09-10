import './styles/index.scss'

import './js/AudioController'
import './js/Results'
import './js/Mix'
import './js/Match'
import './js/Results'
import  DataBase from'./js/DataBase'
import Game from './js/Game'

const game = new Game(10);

const dateBase = new DataBase();

dateBase.runFirebase(); 

game.render();


