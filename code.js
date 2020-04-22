let totalGrids = 16;

function clearPad() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
     }
}

function createPad() {
    const container = document.querySelector('#container');
    
    for (x = 0; x < (totalGrids * totalGrids); x++) {
        const div = document.createElement('div');
        div.setAttribute('class', "grid-cells");
        container.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${totalGrids}, 1fr)`;           
        container.style.gridTemplateRows = `repeat(${totalGrids}, 1fr)`;
    }
}

function gridFunctionality() {
    const grids = document.querySelectorAll(".grid-cells");

    grids.forEach((grid) => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        grid.addEventListener('mouseover', (e) => {
            e.target.style.background = '#' + randomColor;
        });
    });
}

//select all the grids and add EventListener whenever
//mouse hoovers over.
createPad();
gridFunctionality();


//create functionality for clear button

const grids = document.querySelectorAll(".grid-cells");
const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener('click', () => {
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'white';
    });
    totalGrids = prompt(
        "Please specify how many grids per side? (i.e. a choice of '5' will produce a 5x5 pad)");
    
    if (isNaN(parseInt(totalGrids)) === false) {
        totalGrids = parseInt(totalGrids);
        if (totalGrids > 0) {
            clearPad();
            createPad();
            gridFunctionality();
        } else if (totalGrids < 0) {
            alert("Invalid input: Please type in a number value over 0");  
        }
    } else {
        //handle whether string is inputted or if user clicks cancel
        if (!totalGrids) {
           
        } else {
            alert("Invalid text input: Please type in a number value");
        }
    }
       
});
