let totalGrids = 16;

function createPad() {
    const container = document.querySelector('#container');
    
    console.log(typeof(totalGrids));
        //clear any existing grids first
    while (container.hasChildNodes()) {
        console.log('poo');
        container.removeChild(container.firstChild);
     }

    for (x = 0; x < (totalGrids * totalGrids); x++) {
        const div = document.createElement('div');
        div.setAttribute('class', "grid-cells");
        container.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${totalGrids}, 1fr)`;            container.style.gridTemplateRows = `repeat(${totalGrids}, 1fr)`;
    }
}

function gridFunctionality() {

    const grids = document.querySelectorAll(".grid-cells");

    grids.forEach((grid) => {

        grid.addEventListener('mouseover', (e) => {

            e.target.style.background = 'yellow';
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
       
        if ((totalGrids !== null) && (typeof(totalGrids) === "number")) {
            createPad();
            gridFunctionality();
        } else {
            alert("Invalid input: Please type in a number value");
            
        }
});
