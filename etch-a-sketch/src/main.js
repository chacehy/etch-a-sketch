let container = document.getElementById('container');
let gridSide = 592;
container.style.width = `${gridSide}px`;
container.style.height = `${gridSide}px`;
let grid = document.getElementsByClassName('grid')

// creating the grid
for (let i = 0; i < 16*16; i++) {
    let grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.width = `37px`;
    grid.style.height = `37px`;
    container.appendChild(grid);
    grid.addEventListener('mouseenter', () =>{
        grid.style.backgroundColor = 'black';
    })
    container.addEventListener('mouseleave', () =>{
        grid.style.backgroundColor = 'white';
    })
}
// making the sketch
