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
>> .getItem("KEY) -> return값 : "value" <br>
>> javaScript의 localStorage는 value를 모두 String으로 저장한다!
>>> JSON.stringify(parameter) : JS object를 String으로 바꿔준다! [3.5 보기]

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

<details>
<summary>Lecture 3.4 Making To Do List Part 1.</summary>
<br>

> Emoji 사용
>> meta 적용

<index.html>
```html
<head>
    <title>Something</title>
    <meta charset="utf-8" />

    <link rel="stylesheet" href="index.css" /> <!--CSS 사용법-->
</head>
```
<br>


</details>

<details>
<summary>Lecture 3.5 Making To Do List Part 2.</summary>
<br>

> JS Object
>> JSON.stringify(param) : JS object를 String으로 바꿔준다. <br>
>> JSON.parse(param) : String을 Array 형태로 바꿔준다.

<todo.js>

```javascript
function saveToDos(toDos) {
    localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos))
}
```

```javascript
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGE)

    if (loadedToDos !== null) {
        console.log(loadedToDos)

        const parsedToDos = JSON.parse(loadedToDos)
        console.log(parsedToDos)
    }
}
```

<br>

> forEach loop
>> Array의 첫번쨰부터 마지막까지 반복하면서 item을 꺼낼수 있다. <br>
>> 즉, forEach loop은 Array를 위한 function이다!

<todo.js>

```javascript
parsedToDos.forEach(function(toDo) {
            console.log(toDo.text)
        })
```
아래 처럼 할 수도 있다.

```javascript
function something(toDo) {
    console.log(toDo.text)
}

parsedToDos.forEach(something)
```

</details>

<details>
<summary>Lecture 3.6 Making To Do List Part 3.</summary>
<br>

> console.dir(object)
>> object의 속성들을 볼 수 있음.
>>> ex) console.dir(button) : button의 속성을 확인할 수 있음.

<todo.js>

```javascript
function deleteToDo(event) {
    console.dir(event.target)
}
```

> array.filter(function)
>> array에 있는 모든 item들을 function을 통해 검사함.
>> Array의 모든 item을 검사한다는 점에서 forEach와 유사

```javascript
const cleanToDos = toDos.filter(filterFn)

function filterFn(toDo) {
    return toDo.id === 1
}
```

1. toDos라는 Array의 모든 item들을 filterFn 함수를 통해 검사
2. item의 id가 1인것 만 return해 새로운 cleanToDos Array에 넣음

</details>

<details>
<summary>Lecture 3.7 Image Background</summary>
<br>

> RandomNumber
>> Math라는 module을 사용 <br>
>> Math.random() * 5 : 1 ~ 5 까지의 난수  <br>
>> Math.floor() : 내림 <br>
>> Math.ceil() : 올림 <br>
>> Math.ceil(Math.random() * 5) : 1 ~ 5 


<background.js>

```javascript
function generateRandom() {
    const number = Math.floor(Math.random() * 5)
    return number
}
```


</details>