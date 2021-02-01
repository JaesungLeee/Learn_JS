<details>
<summary>Lecture 3.0 JS Clock Part 1.</summary>
<br>

> 여기서 querySelector는  js-clock이라는 이름을 갖는 모든 클래스를 찾음

<br> 

<clock.js>
```javascript
const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector(".js-title")
```

<index.html>
```html
<body>
    <div class="js-clock">
        <h1 class="js-title"></h1>
    </div>
    <script src = "clock.js"></script>   
</body>
```

</details>

<details>
<summary>Lecture 3.1 JS Clock Part 2.</summary>
<br>

> setInterval 함수
>> setInterval (fn, milsec) [fn : 함수명]


```javascript
function sayHi() {
    console.log("HI")
}

setInterval(sayHi, 1000)
```

이렇게 하면 sayHi 함수가 1초에 한번씩 call 됨.

<br>

> 삼항연산자
>> 조건 ? True : False

<clock.js>

```javascript
clockTitle.innerText = `${
    hours < 10 ? `0${hours}` : hours
    } : ${
    minute < 10 ? `0${minute}` : minute
    } : ${
    seconds < 10 ? `0${second}` : second
    }`
```

</details>