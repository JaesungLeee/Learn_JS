const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const TODOS_LOCAL_STORAGE = "toDos"
const toDos = []

function saveToDos(toDos) {
    localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos))
}

function paintToDo(text) {
    // console.log(text)
    const li = document.createElement("li")

    const delBtn = document.createElement("button")
    delBtn.innerHTML = "❌"
    
    const span = document.createElement("span")
    span.innerText = text

    const newId = toDos.length + 1
    
    li.appendChild(span)
    li.appendChild(delBtn)
    li.id = newId

    toDoList.appendChild(li)

    const toDoObject = {
        text: text,
        id : newId
    }
    toDos.push(toDoObject)

    saveToDos(toDos)
}


function handleSubmit(event) {
    event.preventDefault() 
    const currentValue = toDoInput.value
    paintToDo(currentValue)
    toDoInput.value = "" // Enter 치고나면 빈 text로 바꿔주기
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGE)

    if (loadedToDos !== null) {
        // console.log(loadedToDos)
        const parsedToDos = JSON.parse(loadedToDos)
        // console.log(parsedToDos)
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text)
        })
    }
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()