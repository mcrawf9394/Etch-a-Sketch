const container = document.getElementById('etchASketchGrid')
const form = document.getElementById('form')
let count
form.addEventListener('submit', function (userEntry){
    const gridCount = document.getElementById('gridCount').value
    count = parseInt(gridCount)
    getUserNumber (count)
    userEntry.preventDefault()
})
form.addEventListener('reset', function (reset){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    reset.preventDefault  
})
function getUserNumber (){
    if (count > 100 || count <= 0) {
        alert("Can not enter a value higher than 100 or less than or equal to 0.")
    }
    else {
        makeGrid(count)
    }
}
function makeGrid (){
    for (j = 0; j < count; j++){
        let column = document.createElement('div')
        column.classList.add("gridColumns")
        column.style.backgroundColor = 'blue'
        column.textContent =" "
        container.appendChild(column)
        for (i = 0; i < count; i++){
            let row = document.createElement('div')
            row.classList.add('gridRows')
            row.style.backgroundColor = 'blue'
            row.textContent = " "
            column.appendChild(row)
            row.addEventListener('mouseenter', function (){
                row.style.backgroundColor = 'red'
            })
        }
    }
}