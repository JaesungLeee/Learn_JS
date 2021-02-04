const body = document.querySelector("body")

const IMG_NUMBER = 3

function paintImage(imgNumber) {
    const img = new Image()
    img.src = `images/${imgNumber + 1}.jpg` // randomNumber가 0~4까지 return 하기 때문에 + 1
    img.classList.add("bgImage")
    body.prepend(img)
}

function generateRandom() {
    const number = Math.floor(Math.random() * 5)
    return number
}

function init() {
    const randomNumber = generateRandom()
    paintImage(randomNumber)
}

init()