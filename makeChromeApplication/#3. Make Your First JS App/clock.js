const clockContainer = document.querySelector(".js-clock") // js-clock라는 이름을 갖는 클래스를 찾음
const clockTitle = clockContainer.querySelector(".js-title") // "h1"  <h1>00:00</h1>

function getTime() {
    const date = new Date()
    const minute = date.getMinutes()
    const hours = date.getHours()
    const seconds = date.getSeconds()
    
    // clockTitle.innerText = `${hours} : ${minute} : ${seconds}`
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
        } : ${
        minute < 10 ? `0${minute}` : minute
        } : ${
        seconds < 10 ? `0${seconds}` : seconds // 삼항연산자 : true면 앞에꺼 false면 뒤에꺼
    }`

}

function init() {
    setInterval(getTime, 1000) // getTime함수를 1초에 한번씩 call해서 시계처럼 보이게
}

init()