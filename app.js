const container = document.querySelector('#container')
const changeColor = (x) => {
    x.target.style.backgroundColor = 'grey';
};
for (var i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div')
    gridSquare.classList = "grid";
    gridSquare.addEventListener("mouseover", changeColor);
    container.appendChild(gridSquare);
   
 }

const clear = () => {
    let squares = container.querySelectorAll('div');
    squares.forEach(item => item.style.backgroundColor = '#ffffff')
}
const howMany = () => {
    let gridSize = Number(prompt('How Many?'));
    container.innerHTML = ''
    for (var i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.classList = "grid";
        gridSquare.addEventListener("mouseover", changeColor);
        container.appendChild(gridSquare);
       
     }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

const button = document.querySelector('.reset')
button.addEventListener('click', clear)
button.addEventListener('click', howMany)

