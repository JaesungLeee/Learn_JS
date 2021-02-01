const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greetings")

const USER_LOCAL_STORAGE = "currentUser"
const SHOWING_CLASS_NAME = "showing"

function paintGreeting(text) {
    form.classList.remove(SHOWING_CLASS_NAME)
    greeting.classList.add(SHOWING_CLASS_NAME)
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE)

    if (currentUser === null) { // User가 localstorage에 없는 경우
        

    }
    else { // User가 localstorage에 있는 경우
        paintGreeting(currentUser)
    }

}
function init() {
    loadName()
}

init()