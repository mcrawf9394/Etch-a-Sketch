const container = document.getElementById('etchASketchGrid')
const gridRow = document.createElement('div')
const gridColoumn = document.createElement('div')
function makeGrid (){
    for (j = 0; j < 16; j++){
        let column = document.createElement('div')
        column.classList.add("gridColumns")
        column.style.backgroundColor = 'blue'
        column.textContent ="this is a test"
        container.appendChild(column)
        for (i = 0; i < 16; i++){
            let row = document.createElement('div')
            row.classList.add('gridRows')
            row.style.backgroundColor = 'blue'
            row.textContent = "this is a test"
            column.appendChild(row)
        }
    }
}
makeGrid ()