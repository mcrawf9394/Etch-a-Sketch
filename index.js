const form = document.getElementById('form');
form.addEventListener('submit', function (userEntry){
    const gridCount = document.getElementById('gridCount').value
    if (gridCount > 100) {
        userEntry.preventDefault()
        alert("Can not enter a value higher than 100.")
    }
    else if (gridCount > 0){
        var count = parseInt(gridCount)
        changingGridCount (count)
    }
    else{
        userEntry.preventDefault
        alert("Value can not be 0")
    }
})
function changingGridCount (){
    const etchASketchGrid = document.querySelector('.etchASketchGrid')
    let i = 0
    for (i < gridCount; i++;) {
        const individualGrids = document.createElement("div");
        individualGrids.classList.add('individualGrids');
        individualGrids.id = "grid" + i;
        individualGrids.textContent = "this is a test"
        etchASketchGrid.appendChild(individualGrids)
    }
}
