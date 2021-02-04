const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const TODOS_LOCAL_STORAGE = "toDos"
let toDos = []


function deleteToDo(event) {
    const btn = event.target // click event의 대상 (btn)
    const li = btn.parentNode // btn의 부모 : li를 찾을 수 있음
    console.log(li)

    toDoList.removeChild(li) // toDoList에서 해당 li를 지움

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id) // li.id == "String" -> parseInt로 해결
    }) // filter는 Array의 모든 item을 검사
    // toDos Array에 있는 element중 id가 1인 경우에 만 return

    toDos = cleanToDos
    saveToDos()

}

function saveToDos() {
    localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos))
}

function paintToDo(text) {
    // console.log(text)
    const li = document.createElement("li")

    const delBtn = document.createElement("button")
    delBtn.innerHTML = "❌"
    delBtn.addEventListener("click", deleteToDo)
    
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

    saveToDos()
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