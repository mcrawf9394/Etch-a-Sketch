const form = document.getElementById('form');
const columnCount = document.getElementById('individualGrids')
const rowCount = document.getElementById('individualRows');
let count
const etchASketchGrid = document.querySelector('.etchASketchGrid')
form.addEventListener('submit', function (userEntry){
    const gridCount = document.getElementById('gridCount').value
    count = parseInt(gridCount)
    if (count > 100 || count <= 0) {
        userEntry.preventDefault()
        alert("Can not enter a value higher than 100 or less than or equal to 0.")
    }
    else if (count > 0){
        changingGridCount(count)
    }
})
function changingGridCount (){
    for (let i = 0; i < count; i++) {
        const individualGrids = document.createElement("div");
        individualGrids.classList.add('individualGrids');
        individualGrids.textContent = "this is a test"
        etchASketchGrid.appendChild(individualGrids)
    } 
    for (let j = 0; j < count; j++) {
        const individualRows = document.createElement("div")
        individualRows.classList.add('individualRows')
        individualRows.textContent = "this is a test"
        etchASketchGrid.appendChild(individualRows)
    }
}