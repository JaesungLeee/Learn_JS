const weather = document.querySelector(".js-weather")

const API_KEY = "1cdf1f631d32bf81a63275b6486282f4"

const COORDS = 'coords'

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            // console.log(response)
            return response.json()
        }).then(function(json) {
            // console.log(json)
            const temperature = json.main.temp
            const place = json.name
            weather.innerText = `${temperature} at ${place}`
        })
}

function saveCoords(coordsObject) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObject)) // object를 String type로 저장
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObject = {
        latitude : latitude,
        longitude : longitude
    } // 위도, 경도 object 생성
    saveCoords(coordsObject) // locatStorage에 저장
    getWeather(latitude, longitude) // 현재 위도와 경도로부터 날씨 fetch
}

function handleGeoError() {
    console.log("Can't access geo location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCodrds = localStorage.getItem(COORDS)
    if (loadedCodrds === null) {
        askForCoords()
    }
    else {
        // getWeather
        const parseCoords = JSON.parse(loadedCodrds)
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }

}

function init() {
    loadCoords()

}

init()