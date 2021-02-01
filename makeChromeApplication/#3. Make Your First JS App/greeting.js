const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greetings")

const USER_LOCAL_STORAGE = "currentUser"
const SHOWING_CLASS_NAME = "showing"

function saveName(text) {
    localStorage.setItem(USER_LOCAL_STORAGE, text)
}

function handleSubmit(event) {
    event.preventDefault() // Enter를 누르면 입력한 텍스트가 그대로 고정
    const currentValue = input.value // inputForm에 입력한 텍스트 (value)를 currentValue로 return
    // console.log(currentValue)

    paintGreeting(currentValue) // inputForm에 입력한 텍스트가 paintGreeting fun 인자로 들어가 Hello {currentValue}로 나오게
    saveName(currentValue)  // inputForm에 입력한 텍스트를 localStorage에 저장
} 

function askForName() {
    form.classList.add(SHOWING_CLASS_NAME)
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CLASS_NAME)
    greeting.classList.add(SHOWING_CLASS_NAME)
    greeting.innerText = `Hello ${text}` // Hello {currnetUser's Value}
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE) // currentUser라는 Key를 가진 value를 return

    if (currentUser === null) { // User가 localstorage에 없는 경우
        askForName()
    }
    else { // User가 localstorage에 있는 경우
        paintGreeting(currentUser)
    }

}
function init() {
    loadName()
}

init()