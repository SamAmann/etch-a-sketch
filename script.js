// create initial 16x16 grid using JavaScript
createGrid(16);

// function to create a grid of a given size
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            let brightness = 100; // initial brightness
            let painting = false; // flag to track whether painting is in progress
            div.addEventListener('mousedown', () => {
                painting = true;
                // calculate a random RGB color value
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                const color = `rgb(${r}, ${g}, ${b})`;
                // set the div's background color to the random color
                div.style.backgroundColor = color;
                // decrease the brightness by 10%
                brightness -= 10;
                // if the brightness has reached 0 or less, set the color to black
                if (brightness <= 0) {
                    div.style.backgroundColor = '#000';
                } else {
                    // otherwise, set the color to a darker version of the current color
                    div.style.backgroundColor = `hsl(${r}, ${g}%, ${brightness}%)`;
                }
            });
            document.addEventListener('mousemove', (event) => {
                if (painting) {
                    // set the background color of the current div to the same color as the last one
                    div.style.backgroundColor = div.style.backgroundColor;
                }
            });
            document.addEventListener('mouseup', () => {
                painting = false;
            });
            document.querySelector('.container').appendChild(div);
        }
    }
}

// function to reset the grid based on user input
function resetGrid() {
    // prompt user for new grid size
    const newSize = prompt('Enter new grid size (max 100):');
    if (newSize != null && newSize <= 100) {
        // remove existing grid
        const gridContainer = document.querySelector('.container');
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        // create new grid of given size
        createGrid(newSize);
    }
}
