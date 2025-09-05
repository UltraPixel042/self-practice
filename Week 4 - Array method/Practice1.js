// 1. ใช้ map()
// ให้ array ของตัวเลข แปลงเป็นเลขยกกำลังสาม
const nums1 = [1, 2, 3, 4, 5];
const newNum = nums1.map(num => num ** 3)
console.log(newNum)
// 👉 ผลลัพธ์ที่ต้องการ: [1, 8, 27, 64, 125]


// 2. ใช้ filter()
// ให้ array ของคำ คัดเอาเฉพาะคำที่ยาวมากกว่า 4 ตัวอักษร
const words = ["dog", "banana", "cat", "elephant", "sun"];
const longWord = words.filter(word => word.length > 4)
console.log(longWord)
// 👉 ผลลัพธ์ที่ต้องการ: ["banana", "elephant"]


// 3. ใช้ reduce()
// ให้ array ของราคา คำนวณผลรวมทั้งหมด
const prices = [100, 250, 300, 50];
const total = prices.reduce((sum, t) => sum + t, 0)
console.log(total)
// 👉 ผลลัพธ์ที่ต้องการ: 700


// 4. ใช้ find()
// ให้ array ของเมือง หาคำแรกที่ขึ้นต้นด้วยตัวอักษร "B"
const cities = ["Tokyo", "Bangkok", "London", "Berlin"];
const startB = cities.find(c => c.startsWith("B"))
console.log(startB)
// 👉 ผลลัพธ์ที่ต้องการ: "Bangkok"


// 5. ใช้ some()
// ให้ array ของอุณหภูมิ ตรวจสอบว่ามีค่าต่ำกว่า 0 หรือไม่
const temps = [15, -2, 8, 20];
const lowTemp = temps.some(t => t < 0)
console.log(lowTemp)
// 👉 ผลลัพธ์ที่ต้องการ: true


// 6. ใช้ every()
// ให้ array ของคะแนน ตรวจสอบว่าทุกค่ามากกว่าหรือเท่ากับ 50 หรือไม่
const marks = [70, 85, 90, 100, 60];
const check = marks.every(m => m > 50)
console.log(check)
// 👉 ผลลัพธ์ที่ต้องการ: true


// 7. ใช้ sort()
// ให้ array ของตัวหนังสือ จัดเรียงตามลำดับตัวอักษร
const fruits = ["Mango", "Apple", "Banana", "Orange"];
const fruits2 = fruits.sort((a, b) => a.localeCompare(b))
console.log(fruits2)
// 👉 ผลลัพธ์ที่ต้องการ: ["Apple", "Banana", "Mango", "Orange"]

console.log("Apple".localeCompare("Banana")); 


// 8. ใช้ forEach()
// ให้ array ของชื่อ พิมพ์ออกมาในรูปแบบ "Hello, <name>!"
const people = ["Anna", "Ben", "Chris"];
const hello = people.forEach(n => console.log(`Hello, ${n}!`))
// 👉 Output ที่ต้องการ:
// Hello, Anna!
// Hello, Ben!
// Hello, Chris!


// 9. ใช้ includes()
// ตรวจสอบว่าใน array มีเลข 30 อยู่หรือไม่
const numbers = [10, 20, 30, 40, 50];
const finds = numbers.includes(30)
console.log(finds)
// 👉 ผลลัพธ์ที่ต้องการ: true


// 10. ใช้ flat()
// ให้ array ซ้อนกัน 2 ชั้น แปลงให้เป็น array เดียว
const nested = [[1, 2], [3, 4], [5]];
const multi = nested.flat()
console.log(multi)
// 👉 ผลลัพธ์ที่ต้องการ: [1, 2, 3, 4, 5]
