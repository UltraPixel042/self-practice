// 1. map()
// ให้ array ของตัวเลข แปลงแต่ละตัวเป็น string ที่ขึ้นต้นด้วย "No."
const nums = [1, 2, 3, 4];
const no = nums.map(n => `No.${n}`)
console.log(no)
// 👉 ["No.1", "No.2", "No.3", "No.4"]


// 2. filter()
// ให้ array ของคน (object) คัดเฉพาะคนที่อายุมากกว่า 18
const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 22 }
];
const adult = people.filter(a => a.age > 18)
console.log(adult)
// 👉 [{name:"Bob", age:20}, {name:"David", age:22}]


// 3. reduce()
// ให้ array ของสินค้า หาผลรวมราคาทั้งหมด
const products = [
  { name: "Pen", price: 20 },
  { name: "Book", price: 120 },
  { name: "Bag", price: 300 }
];
const total = products.reduce((sum, p) => sum + p.price, 0)
console.log(total)
// 👉 440


// 4. find()
// ให้ array ของตัวเลข หาตัวแรกที่เป็นเลขคี่และมากกว่า 10
const arr = [2, 4, 6, 11, 13, 20];
const newArr= arr.find(a => a % 2 == 1 && a > 10)
console.log(newArr)
// 👉 11


// 5. some()
// ให้ array ของคะแนน ตรวจสอบว่ามีคะแนนที่น้อยกว่า 50 หรือไม่
const scores = [70, 80, 45, 90];
const points = scores.some(a => a < 50)
console.log(points)
// 👉 true


// 6. every()
    // ให้ array ของชื่อ ตรวจสอบว่าทุกชื่อมีความยาวอย่างน้อย 3 ตัวอักษรหรือไม่
    const names = ["Ann", "Bob", "Chris"];
    const nameLong = names.every(l => l.length >= 3)
    console.log(nameLong)
    // 👉 true


// 7. sort() + localeCompare()
// ให้ array ของชื่อภาษาอังกฤษ จัดเรียงตามตัวอักษรโดยไม่สนใจตัวเล็ก/ใหญ่
const students = ["mike", "Alice", "bob", "Charlie"];
const asc = students.sort((a, b) => a.localeCompare(b.toLowerCase()))
console.log(asc)
// 👉 ["Alice", "bob", "Charlie", "mike"]


// 8. forEach()
// ให้ array ของสินค้า พิมพ์ออกมาในรูปแบบ "ชื่อสินค้า: ราคา"
const items = [
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 10000 }
];
const product = items.forEach(a => console.log(`${a.name}: ${a.price}`))

// 👉 Output
// Phone: 15000
// Tablet: 10000


// 9. includes()
// ให้ array ของชื่อสัตว์ ตรวจสอบว่ามี "cat" หรือไม่
const animals = ["dog", "cat", "bird"];
const isCat = animals.includes("cat")
console.log(isCat)
// 👉 true


// 10. flatMap()
// ให้ array ของประโยค แยกเป็นคำ (words) ทั้งหมด
const sentences = ["I love JS", "JS is fun"];
const word = sentences.flatMap(s => s.split(" "))
console.log(word)
// 👉 ["I", "love", "JS", "JS", "is", "fun"]
