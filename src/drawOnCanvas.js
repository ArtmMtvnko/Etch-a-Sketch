const colorInput = document.querySelector('#colorPicker')
const canvas = document.querySelector('#canvas')
let mouseDown = false;

canvas.addEventListener('mousedown', () => mouseDown = true)
canvas.addEventListener('mouseup', () => mouseDown = false)

const eraserBtn = document.querySelector('#eraser')
eraser.onclick = () => colorInput.value = '#ffffff'

for (let i = 0; i < 64**2; i++) {
    const canvasItem = document.createElement('div')
    canvasItem.classList.add('canvas__item')
    canvasItem.addEventListener('mouseover', (event) => {
        if (event.type === 'mouseover' && !mouseDown) return
        event.target.style.backgroundColor = colorInput.value
    })
    canvas.appendChild(canvasItem)
}