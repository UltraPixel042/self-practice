// 1. สร้าง object ชื่อ student ที่มี key: name, age, major และแสดงผลออกมาใน console

let student = {
    name: "Little John",
    age: 20,
    major: "Technology Information"
}

console.log(student)

// 2. ให้สร้าง object car ที่มี property: brand, model, year แล้วเปลี่ยนค่า year เป็นปีปัจจุบัน

let car = {
    brand: "Porsche",
    model: "911",
    year: 1993
}

console.log(car)
car.model = "911 GT3 RS"
car.year = 2021
console.log(car)


// 3. สร้าง object book ที่มี key: title, author, pages 
// จากนั้นเพิ่ม key ใหม่ชื่อ isRead (true/false)

let book = {
    title: "Joan The Thriller",
    author: "Harry Harryson John",
    pages: 28
}
console.log(book)
book.isRead = true
console.log(book)

// 4. สร้าง object person ที่มี method greet() 
// เมื่อเรียกแล้วให้พิมพ์ว่า "Hello, my name is <name>"

let person = {
    name: "Little John",
    greet: function(){
        console.log(`Hello, my name is ${this.name}.`)
    }
}
person.greet()

// 5. สร้าง object calculator ที่มี method: add, subtract, multiply, divide
// แล้วทดลองเรียกใช้

let calculator = {
    add: function(a, b) {
        console.log(a + b)
    },
    substract: function(a, b) {
        console.log(a - b)
    },
    multiply: function(a, b) {
        console.log(a * b)
    },
    divide: function(a, b) {
        console.log(a / b)
    }
}
calculator.add(5, 2)
calculator.substract(5, 2)
calculator.multiply(5, 2)
calculator.divide(5, 2)

// 6. เขียนฟังก์ชัน getUserInfo(user) ที่คืนค่าเฉพาะ name และ email ของ user

function getUserInfo(user) {
    return {
        name: user.name,
        email: user.email
    }
}
let student1 = {name: "Susan Joan", email: "SusanJoan@gmail.com", age: 30}
console.log(getUserInfo(student1))


// 7. สร้าง object classroom ที่เก็บ students (array ของ object ที่มี name และ score)
// แล้วเขียน method คำนวณคะแนนเฉลี่ย

let classroom = {
    students: [
        {name: "Hikari", score: 80},
        {name: "Yamasaki", score: 65},
        {name: "Oishi", score: 55}
    ],
    calculate: function() {
        let total = 0;
        this.students.forEach(s => total += s.score)
        return total / this.students.length
    }
}
console.log(classroom.calculate())

// 8. สร้าง object library ที่เก็บ books (array ของ object)
// แล้วเขียน method findBook(title) เพื่อหาหนังสือ

let library = {
    books: [
        {title: "JS for beginner", author: "John Seff"},
        {title: "pythob for beginner", author: "Phantom joans"}
    ],
    findBook: function(title) {
        return this.books.find(book => book.title == title) || "Not Found"
    }
}
console.log(library.findBook("JS for beginner"))        // output: { title: 'JS for beginner', author: 'John Seff' }
console.log(library.findBook(" JS for beginner"))       // output: Not Found
console.log(library.findBook("React for beginner"))     // output: Not Found