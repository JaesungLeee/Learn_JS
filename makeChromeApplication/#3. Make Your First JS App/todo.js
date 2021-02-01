const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const TODOS_LOCAL_STORAGE = "toDos"

function paintToDo(text) {
    // console.log(text)
    const li = document.createElement("li")

    const delBtn = document.createElement("button")
    delBtn.innerHTML = "❌"
    
    const span = document.createElement("span")
    span.innerText = text
    
    li.appendChild(span)
    li.appendChild(delBtn)

    toDoList.appendChild(li)
}


function handleSubmit(event) {
    event.preventDefault() 
    const currentValue = toDoInput.value
    paintToDo(currentValue)
    toDoInput.value = "" // Enter 치고나면 빈 text로 바꿔주기
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LOCAL_STORAGE)

    if (toDos !== null) {
        
    }
   
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()