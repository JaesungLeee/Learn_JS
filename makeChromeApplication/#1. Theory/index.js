// 경고메시지
alert('Im working. Im JS. Im worth it'); 

// 변수 사용법
// Create -> Initialize -> Use

// 변수
// let a = 221; // Create & Initialize
// let b = a - 7;

// console.log(b); // Print랑 같은 의미

// let a = 221;
// let b = a - 5;
// a = 4 // Update c , 변해도 되면 let 사용 (= var)
// console.log(b, a);


// const : 변하지 않는 변수 
// const a = 221; 
// a = 4; --> TypeError


// 기본적으로 const로 변수 선언 하기
const string = "ABCDE"; // 문자열 변수
const boolean = true; // Boolean 변수 (True -> 1 / False -> 0)
const num = 333; // Integer 변수
const float = 55.3; // Float 변수

// Array
const mon = "Monday"
const tue = "Tuesday"
const wed = "Wednsday"
const thu = "Thursday"
const fri = "Friday"

console.log(mon, tue, wed, thu, fri) 

var daysOfWeek = [] // Array 선언
daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
console.log(daysOfWeek)

console.log(daysOfWeek[2]) // index 2


// Object
var userInfo = {} // Object 선언
userInfo = {
    name : "JSLEE", // data의 이름이 nameW
    age : 25,
    gender : "Male",
    isHandsome : true
}

console.log(userInfo)

userInfo.gender = "Female"

console.log(userInfo.gender) // gender에만 접근 가능해짐

var userInfo2 = {}
userInfo2 = {
    name : "JSLEE",
    age : 25,
    gender : "Male",
    isHandsome : true,
    favFood : [
        {
            name : "Kimchi",
            fatty : false
        },
        {
            name : "Cheese Burger",
            fatty : true
        }
    ]
}

console.log(userInfo2)
console.log(userInfo2.favFood[1].name) // Cheese Burger