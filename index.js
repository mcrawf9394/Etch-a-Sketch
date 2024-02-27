const gridCount = document.querySelector("input");

console.log(gridCount)
const etchASketchGrid = document.querySelector('.etchASketchGrid')
function changingGridCount (){
    let i = 0
    if (gridCount = Number){
        for (i < gridCount; i++;) {
        const individualGrids = document.createElement("div");
        individualGrids.classList.add('individualGrids');
        individualGrids.id = "grid" + i;
        etchASketchGrid.appendChild(individualGrids)
    }}
    console.log(gridCount)
}
