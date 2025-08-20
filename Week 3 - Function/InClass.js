function getFreqOfWords(sentence){
    if(!sentence) return undefined 

    let obj = {};
    let word = sentence.toLowerCase().split(" ")
    for(let i = 0; i < word.length; i++){
        if(obj[word[i]]){
            obj[word[i]] += 1
        } else{
            obj[word[i]] = 1
        }
    }
    return obj
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
console.log(getFreqOfWords(''))



// function getFreqOfWordss(sentence) {
//     if (!sentence) return undefined
//     const words = sentence.toLowerCase().split(" ")
//     return words.reduce((acc, cur) => {
//         acc[cur] = (acc[cur] || 0) + 1
//         return acc
//     }, [])
// }

// console.log(getFreqOfWordss('Today is present and present is your gif'))
// console.log(getFreqOfWordss('Do you best just do it'))
// console.log(getFreqOfWordss(null))
// console.log(getFreqOfWordss(undefined))


function soodKoon(num){
    for(let i = 0; i <= 12; i++){
        console.log(`${num} x ${i} = ${num * i}`)
    }
}
console.log(soodKoon(5))

console.log(typeof("Wannawat"))

//1. function declaration
function sum(a, b) {
    return a + b
}
sum(1, 2)

const x = sum
console.log(x(1, 2))

//2. function expression (arrow syntax)
const sum2 = () => {a + b}

//3. function expression (anonymous function declaration)
const sum3 = function(){
    return a + b
}

/* importance!

arrow function ถ้า มี {} ต้องใส่ return ด้วย ไม่งั้น ผลจะไม่ออก

const sum2 = () => a + b        // ออก

const sum2 = () => {a + b}      // ไม่ออก ต้องใส่ return

*/

function rub(num){
    return num + 5
}

function pol(rub, lek){
    return rub * lek
}

console.log(pol(rub(8), 6))



function greet(name, call){
    return call(name)
}

function greethello(n){
    return "Hello, " + n
}
console.log(greet("Wannawat", greethello))
// console.log(greet("Wannawat", greethello("boy")))

console.log(greethello("boy"))

function Test(x){
    return x
}

function Test2(x){
    return x + 50
}

console.log(Test(Test2)(120))   // console.log(Test(Test2(120)))
// ทำ Test(Test2) ก่อน จากนั้นค่อยไปทำ 120


/*
1.
function sum(a, b){
    return a + b
}

const sum = (a, b) => return a + b      // ** ถ้าภายใน {} มีบรรทัดเดียว ก็ไม่ต้องใส่ {}

------------------------------------------------------------------------------------------------------------------

fucntion echo(str) {
    return str
}

const echo = str => str                 // ** ถ้ารับ parameter มา 1 ตัว ก็ไม่จำเป็นต้องใส่ ()

-------------------------------------------------------------------------------------------------------------------

fucntion setLoverCase(str) {
    const tmp = str.toLowerCase()
    return tmp
}

const setLoverCase = str => {
    const tmp = str.toLowerCase()
    return tmp        
}

*/

/* importance!

    Arrow function ไม่สามารถเขียนใน Destruction function ได้ เพราะ ไม่สามารถเข้าถึงพวก this
    Hoisting ใช้ กับ Arrow function ไม่ได้

*/

function doSomeThing(greet = "Hi", someone = "Guest", firstSent) {
    return `${greet}, ${someone}, ${firstSent}`
}

console.log(doSomeThing())
console.log(doSomeThing("abc"))
console.log(doSomeThing("xyz", "aaa"))
console.log(doSomeThing("xyz", "aaa", "bbb"))
console.log(doSomeThing("a", "b", "c", "d"))                 // ตัด d ออก
console.log(doSomeThing(undefined, undefined, undefined))
console.log(doSomeThing(null, null, null, null))
