const canvas = document.querySelector('#canvas')
const mouseDown = false;

for (let i = 0; i < 64**2; i++) {
    const canvasItem = document.createElement('div')
    canvasItem.classList.add('canvas__item')
    canvasItem.addEventListener('mousedown', () => mouseDown = true)
    canvasItem.addEventListener('mouseup', () => mouseDown = false)
    canvasItem.addEventListener('mouseover', () => {})
    canvas.appendChild(canvasItem)
}