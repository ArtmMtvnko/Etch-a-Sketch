const canvas = document.querySelector('#canvas')
let mouseDown = false;

canvas.addEventListener('mousedown', () => mouseDown = true)
canvas.addEventListener('mouseup', () => mouseDown = false)

for (let i = 0; i < 64**2; i++) {
    const canvasItem = document.createElement('div')
    canvasItem.classList.add('canvas__item')
    canvasItem.addEventListener('mouseover', (event) => {
        if (event.type === 'mouseover' && !mouseDown) return
        event.target.style.backgroundColor = '#000000'
    })
    canvas.appendChild(canvasItem)
}