// --------------------
// 🔹 Mutating Methods
// --------------------

// 1. push()
// เพิ่ม "grape" ลงท้าย array fruits
const fruits = ["apple", "banana"];
fruits.push("grape")
console.log(fruits)
// 👉 ["apple", "banana", "grape"]

// 2. pop()
// ลบ element สุดท้ายของ array fruits และเก็บค่าไว้
fruits.pop()
console.log(fruits)
// 👉 ["apple", "banana"]

// 3. shift()
// ลบ element แรกของ array fruits
fruits.shift()
console.log(fruits)
// 👉 ["banana"]

// 4. unshift()
// เพิ่ม "mango" เป็น element แรกของ fruits
fruits.unshift("mango", "apple")
console.log(fruits)
// 👉 ["mango", "apple", "banana"]


// 5. splice()
// แทนที่ "banana" ด้วย "pear"
const fruits2 = ["apple", "banana", "grape"];
fruits2.splice(1, 1, "pear")
console.log(fruits2)
// 👉 ["apple", "pear", "grape"]

// 6. sort()
// เรียง array numbers จากน้อยไปมาก
const numbers = [30, 5, 12, 8];
numbers.sort((a, b) => a - b)
console.log(numbers)
// 👉 [5, 8, 12, 30]

// 7. reverse()
// กลับลำดับ array numbers
numbers.reverse()
console.log(numbers)
// 👉 [30, 12, 8, 5]

// --------------------
// 🔹 Non-Mutating Methods
// --------------------

// 8. concat()
// รวม array [1,2] กับ [3,4]
const arr1 = [1, 2]
const arr2 = [3, 4]
console.log(arr1.concat(arr2))
// 👉 [1,2,3,4]

// 9. slice()
// เอา element index 1-3 จาก array numbers
const number1 = [30, 5, 12, 8];
const arrs = number1.sort((a, b) => a - b)
console.log(arrs.slice(1, 4))
// 👉 [8,12,30]

// 10. map()
// แปลง array numbers เป็น string "No.<number>"
const number2 = [30, 5, 12, 8];
const no = number2.map( i => `No.${i}`)
console.log(no)
// 👉 ["No.30","No.5","No.12","No.8"]

// 11. filter()
// คัดเลขที่มากกว่า 10
const moreTen = number2.filter(n => n > 10)
console.log(moreTen)
// 👉 [30,12]

// 12. reduce()
// หาผลรวม numbers
const total = number2.reduce((sum, n) => sum + n)
console.log(total)
// 👉 55

// 13. flat()
// คลี่ array ซ้อน [[1,2],[3,4]]
const arr3 = [[1, 2], [3, 4]]
const cool = arr3.flat(1)
console.log(cool)
// 👉 [1,2,3,4]

// 14. flatMap()
// ["I love JS", "JS is fun"] → แยกเป็นคำ
const flat = ["I love JS", "JS is fun"]
console.log(flat.flatMap(f => f.split(" ")))
// 👉 ["I","love","JS","JS","is","fun"]

// --------------------
// 🔹 Searching & Checking
// --------------------

// 15. find()
// หาเลขตัวแรกที่ >10
const findNum = number2.find(n => n > 10)
console.log(findNum)
// 👉 30

// 16. findIndex()
// หา index ของเลขตัวแรกที่ >10
const findIndex = number2.findIndex(i => i > 10)
console.log(findIndex)
// 👉 0

// 17. some()
// ตรวจสอบว่ามีเลข <10 ไหม
const some1 = number1.some(n => n < 10)
console.log(some1)
// 👉 true

// 18. every()
// ตรวจสอบทุกตัว >0 ไหม
const every1 = number1.every(n => n > 0)
console.log(every1)
// 👉 true

// 19. includes()
// ตรวจสอบว่ามีเลข 12 ไหม
const findTwelve = number1.includes(12)
console.log(findTwelve)
// 👉 true

// --------------------
// 🔹 String Methods
// --------------------

// 20. toUpperCase()
console.log("hello".toUpperCase())
// แปลง "hello" → "HELLO"

// 21. toLowerCase()
console.log("WORLD".toLowerCase())
// แปลง "WORLD" → "world"

// 22. split()
// แยก "I-love-JS" ตาม "-"
console.log("I love JS".split(" "))
/* 👉 ["I","love","JS"] */

// 23. startsWith()
// ตรวจสอบว่า "JavaScript" เริ่มด้วย "Java"
console.log("JavaScript".startsWith("Java"))
// 👉 true

// --------------------
// 🔹 Array Utilities
// --------------------

// 24. Array.isArray()
// ตรวจสอบ [1,2,3] เป็น array ไหม
console.log(Array.isArray([1, 2, 3]))
// 👉 true

// 25. Array.from()
// แปลง string "hello" เป็น array
console.log(Array.from("hello"))
// 👉 ["h","e","l","l","o"]

// 26. Array.of()
console.log(Array.of(5, 6, 7))
// สร้าง array จาก argument 5,6,7
// 👉 [5,6,7]

// 27. at()
// เอา element สุดท้ายของ array numbers
console.log(number2.at(-1))
// 👉 8

// 28. with()
// แทนค่า index 1 ของ numbers ด้วย 99 โดยไม่แก้ array เดิม
const newNumbers = number2.with(1, 99); // แทน index 1 ด้วย 99 โดยไม่แก้ numbers
console.log(newNumbers); // [30,99,8,5]
console.log(number2);
// 👉 [30,99,12,8]

