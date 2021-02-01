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


<details>
<summary>Lecture 3.2~3 Saving the User Name part 1. 2.</summary>
<br>

> css display 속성
>> display : block

```css
.showing {
    display: block;
}
```

css에 대한 공부 필요! (아직 잘 모르겠음..ㅠ) : [2021/02/01]

<br>

> js class name 
>> showing : 보여지는 것

<greeting.js>
```javascript
function paintGreeting(text) {
    form.classList.remove(SHOWING_CLASS_NAME)
    greeting.classList.add(SHOWING_CLASS_NAME)
    greeting.innerText = `Hello ${text}`
}
```

1. form id가 가지고 있던 class인 showing을 없애고 greeting id에 showing class를 추가

2. 결과적으로 paintGreeting fun이 call되면 inputForm이 사라지고 text가 보임

<br>

> locaStorage
>> .setItem("KEY", "value") <br>
>> .getItem("KEY) -> return값 : "value"

<greeting.js>

```javascript
function saveName(text) {
    localStorage.setItem(USER_LOCAL_STORAGE, text)
}
```

```javascript
function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE)

    if (currentUser === null) { 
        askForName()
    }
    else {
        paintGreeting(currentUser)
    }

}
```

1. localStorage.setItem <br>
: USER_LOCAL_STORAGE라는 key와 text라는 value를 localStorage에 저장
2. localStorage.getItem <br>
: USER_LOCAL_STORAGE라는 key를 가지는 value를 return

</details>