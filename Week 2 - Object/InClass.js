// ** 1. object literal
const obj = { No1: "apples", No2: "oranges", No2: "bananas" }
console.log(obj)

const backpack = { 1: "phone", 2: "Ipad", 3: { 3.1: "bank20", true: true } }
console.log(backpack)

const pets = {
    cat: {
        name: "mongkol",
        // hello(): function() {return "Hello"}     // แบบ 1
        hello() { return "Hello" }                  // แบบ 2
    },
    dog: {
        name: "Aek",
        hello() { return "bogbog"}
    }
}



console.log(pets)
console.log(pets.dog)
delete pets.dog
console.log(pets)



// ** 2. constructor function
function Student(stdID, name, lastName){
    this.stdID = stdID,
    this.name = name,
    this.lastName = lastName
}
const me = new Student("1", "Wannawat", "Siriarkanay");
const you = new Student("2", "Navy", "Nahee");
console.log(me)
console.log(you)


// ** 3. ES6 Classes

class vip{
    constructor(id, name, surname){
        this.id = id,
        this.name = name,
        this.surname = surname                                          
    }                         // ตัวซ้ายคือ properties                    // ตัวขวาคือ parameters
}

const Wannawat = new vip("036", "Wannawat", "Siriarkanay")
console.log(Wannawat)


// ** 4. Object.create(existing object)

const WannawatBrother = Object.create(Wannawat)
console.log(WannawatBrother.id)
console.log(WannawatBrother.name)
console.log(WannawatBrother.surname)

const mes = new Student("1", "Wannawat", "Siriarkanay");
for(const key in mes){
    console.log(key)              // **
    console.log(mes[key])         // ** ใช้แบบ ก้ามปู
}

std1 = {id: 1, name: "Som"}
std2 = {id: 1, name: "Som"}

console.log(std1 == std2)           // false
console.log(std1 === std2)          // false


std1 = std2                         // กำหนดให้เท่ากัน แชร์ๆ
// console.log(std1 = std2)
console.log(std1 == std2)           // true
console.log(std1 === std2)          // true


function doSomething(obj){
    obj = {id: 2, name: 'yeye'}
    obj.name = 'xxx'
    console.log(obj)
}

const petss = {id:1, name:"yoyo"}
console.log(petss)
doSomething(petss)
console.log(petss)


const std11 = {id: 1, name: "Somchai", address: {no: 111, city: "Bangkok"}}
let {name: fullName, id, address : {city : myAddress}} = std11
console.log(fullName)
console.log(id)
console.log(myAddress)

// let {city: myAddress} = std1
// console.log(myAddress)


// JSON เก็บทุกอย่างได้ แต่เก็บ function ไม่ได้
// JSON != JavaScript Object
// JSON เป็น Subset ของ JavaScript Object

 