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

let clear = () => {
    let squares = container.querySelectorAll('div');
    squares.forEach(item => item.style.backgroundColor = '#ffffff')
}
const button = document.querySelector('.reset')
button.addEventListener('click', clear)


