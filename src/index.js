import './fillCanvas.js'
import {clearCanvas} from './clear.js'
import './styles/index.scss'

const canvasItems = document.querySelectorAll('.canvas__item')
const clearBtn = document.querySelector('#clear')

clearBtn.onclick = () => clearCanvas(canvasItems)