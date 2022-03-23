const container = document.getElementById('container')
const colors = ['#6495ED', '#DFFF00', '#FFBF00', '#40E0D0', '#CCCCFF', '#0000FF', '#00FFFF', '#FF00FF', '#00FF00', '#00A4FF']
const SQUARES = 1600

for(let i = 0; i< SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
} 

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 25px  ${color}, 0 0 25px ${color}`
}

function removeColor(element){
    element.style.background = '#181818';
    element.style.boxShadow = '0 0 3px #222121'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}


