import './styles/index.scss'

import 'firebase/database'

import './js/AudioController'
import './js/Results'
import './js/Mix'
import './js/Match'
import './js/Results'
import './js/DataBase'
import Game from './js/Game'

const game = new Game(50);

game.render();


