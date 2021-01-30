// #2.0 JS Function ~ #2.1

var userInfo = {} 
userInfo = {
    name : "JSLEE",
    age : 25,
    gender : "Male",
    isHandsome : true
}

console.log(userInfo.isHandsome)

// 함수
function sayHello(name, age) {
    console.log("Hello", name, age)
}

sayHello("JSLEE", 15) // 여러 인자를 포함할 수 있음.


// #2.2 JS DOM Functions ~ #2.3

// JS도 h1이나 body를 CSS처럼 변경 가능
// [HTML] <h1 id = "title">로 설정하면
const title = document.getElementById("title")

console.log(title)
console.error("FUCK")


console.dir(title) // title id의 객체를 다 보여줌

title.innerHTML = "Hi from JS" // HTML의 title id를 찾아 text를 바꿔줌 (실제 index.html에서의 text를 바꾸지는 않음)

title.style.color = "white" // title id text의 색 변경

console.dir(document) // document의 모든 객체를 볼 수 있음

document.title = "WTF" // 웹창의 타이틀 변경


// querySelector : document에서 모든 자식들 중 찾으려고 함.
// const id = document.querySelector("#title")


// #2.4 Events and event handlers

function handleResize() {
    console.log("I have been resize")
}

window.addEventListener("resize", handleResize)  // 첫번째 인자에 Tag, 두번째 인자에 function
// handleResize()로 하면 함수를 즉시 호출하는 것 --> 아직 resize하지도 않았는데 호출??
// resize될때 함수를 호출하려면 handleResize 라고만 적어야 함.

function handleClick() {
    title.style.color = "blue"
}

title.addEventListener("click", handleClick)


// #2.5 JS condition grammar
// if문

// if(1 > 5) { // check true
//     console.log("HI")
// }
// else {
//     console.log("HO")
// }

// if("jslee" === "leejs") { // === 는 참인지 체크하는 것
//     console.log("HI")
// }
// else {
//     console.log("HO")
// }

// if(20 > 45 || "jslee" === "jslee") { // &&연산자 + ||연산자도 가능
//     console.log("YES")
// }
// else {
//     console.log("NOP")
// }

// const age = prompt("How old are you?") // Prompt : User에게 물어보는 것 alert dialog 같은 것 + customize 가능
// console.log(age)

// if (age >= 18 && age <= 21) {
//     console.log("You can drink but you should not")
// }
// else if (age > 21) {
//     console.log("You can")
// }
// else {
//     console.log("Too young")
// }

// #2.6 Function practice

const id = document.querySelector("#title")

const BASE_COLOR = "red"
const OTHER_COLOR = "blue"

function handleClick() {
    const currentColor = id.style.color
    
    if (currentColor === BASE_COLOR) {
        id.style.color = OTHER_COLOR
    }
    else {
        id.style.color = BASE_COLOR
    }
}

function init() {
    id.style.color = BASE_COLOR
    id.addEventListener("click", handleClick) // "mouseenter"
}

init()


function handleOffline() {
    console.log("NETWORK OFFLINE")
}

function handleOnline() {
    console.log("Welcome Back")
}

window.addEventListener("offline", handleOffline) // 인터넷 연결 끊겼을때 
window.addEventListener("online", handleOnline) // 인터넷 연결 될때