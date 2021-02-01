const clockContainer = document.querySelector(".js-clock") // js-clock라는 이름을 갖는 클래스를 찾음
const clockTitle = clockContainer.querySelector(".js-title") // "h1"  <h1>00:00</h1>

function getTime() {
    const date = new Date()
    const minute = date.getMinutes()
    const hours = date.getHours()
    const seconds = date.getSeconds()
    
    clockTitle.innerText = `${hours} : ${minute} : ${seconds}`
}

function init() {
    getTime()
}

init()