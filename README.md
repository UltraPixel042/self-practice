# **Self Practice**
## **Wannawat Siriarkanay**
## **67130500036**

***

## JavaScript Array Methods

## 🔹 Mutating Methods (แก้ไข array เดิม)
| Method          | คำอธิบาย |
|-----------------|-----------|
| `push()`        | เพิ่ม element ท้าย |
| `pop()`         | ลบ element ท้าย และแสดงตัวที่ลบด้วย |
| `shift()`       | ลบ element แรก |
| `unshift()`     | เพิ่ม element แรก |
| `splice(<เลข index ที่จะเริ่ม>, <ลบกี่ตัว>, "ใส่ตัวที่จะเพิ่ม")`      | เพิ่ม/ลบ/แทนที่ element ตามตำแหน่ง |
| `sort()`        | เรียงลำดับ ใช้ได้กับ array เท่านั้น |
| `reverse()`     | กลับลำดับ ใช้ได้กับ array เท่านั้น |
| `fill()`        | เติมค่าในช่วง |
| `copyWithin()`  | คัดลอกบางส่วนมาแทนบางส่วน |

---

## 🔹 Non-Mutating Methods (ไม่แก้ array เดิม)
| Method          | คำอธิบาย |
|-----------------|-----------|
| `concat()`      | รวม array |
| `slice()`       | ตัดบางส่วนออกมา |
| `map()`         | แปลงค่าใหม่ทุก element |
| `filter()`      | คัดกรอง element |
| `reduce()`      | รวมค่าจากซ้ายไปขวา |
| `reduceRight()` | รวมค่าจากขวาไปซ้าย |
| `flat()`        | คลี่ array ซ้อน |
| `flatMap()`     | map + flat |
| `toReversed()`  | คืน array ใหม่แบบกลับลำดับ |
| `toSorted()`    | คืน array ใหม่ที่เรียงแล้ว |
| `toSpliced()`   | คืน array ใหม่ที่ถูก splice |

---

## 🔹 ค้นหา & ตรวจสอบ
| Method             | คำอธิบาย |
|--------------------|-----------|
| `find()`           | element แรกที่ตรงเงื่อนไข |
| `findIndex()`      | index ของ element แรกที่ตรงเงื่อนไข |
| `findLast()`       | element สุดท้ายที่ตรงเงื่อนไข |
| `findLastIndex()`  | index สุดท้ายที่ตรงเงื่อนไข |
| `indexOf()`        | index ของ element (ไม่เจอ = -1) |
| `lastIndexOf()`    | index สุดท้ายของ element |
| `includes()`       | เช็คว่ามี element นี้หรือไม่ |
| `some()`           | true ถ้ามีบาง element ตรงเงื่อนไข |
| `every()`          | true ถ้าทุก element ตรงเงื่อนไข |

---

## 🔹 แปลงค่าเป็น String
| Method            | คำอธิบาย |
|-------------------|-----------|
| `join()`          | รวมเป็น string |
| `toString()`      | แปลง array เป็น string |
| `toLocaleString()`| แปลง element ตาม locale |

---

## 🔹 Iteration (วน loop)
| Method     | คำอธิบาย |
|------------|-----------|
| `forEach()`| วนแต่ละ element คล้ายๆ loop |
| `keys()`   | iterator ของ index |
| `values()` | iterator ของค่า |
| `entries()`| iterator ของ `[index, value]` |

---

## 🔹 Array Object Utilities
| Method            | คำอธิบาย |
|-------------------|-----------|
| `Array.isArray()` | ตรวจว่าเป็น array |
| `Array.from()`    | สร้าง array จาก iterable |
| `Array.of()`      | สร้าง array จาก argument |
| `at()`            | เข้าถึง element ตาม index (รองรับเลขลบ) |
| `with()`          | คืน array ใหม่ที่แทนค่า element ที่ index |

## 🔹 More
| Method            | คำอธิบาย |
|-------------------|-----------|
| `length` | ดูความยาวของ string หรือ จำนวนสมาชิกใน array |
| `toUpperCase()` | เปลี่ยนจากตัว พิมพ์เล็ก เป็น พิมพ์ใหญ่ |
| `toLowerCase()` | เปลี่ยนจากตัว พิมพ์ใหญ่ เป็น  พิมพ์เล็ก |
| `split("")` | แยก string ออกจากกันให้กลายเป็น array ตามด้วยตัวคั่น |
| `startsWith(" ")` | เป็นการดูว่าตัวหน้าสุดเริ่มต้นด้ยตัวอะไร จะ return ออกมาเป็น True, False |
| `localeCompare()` | เป็นเมธอดของ string ใช้สำหรับ เปรียบเทียบ string 2 ตัว โดยคำนึงถึง ภาษาหรือตำแหน่งทางภูมิภาค (locale)| 


*** เมื่อไหร่ที่จะคิดถึง map คือ เมื่อเราต้องการที่จะเปลี่ยนค่าทุกตัวใน array ***
*** join() จะยืดหยุ่นกว่า toString() เพราะสามารถเปลี่ยนตัวขั้นได้ แต่ toString() จะมีตัวขั้นแค่ตัวเดียว (default) คือ , ***
*** reverse() มันจะแก้ที่ original array ด้วย ***
*** sort() จะเรียง text โดยจะเรียงจากค่าน้อยไปมาก ละก็ Sensitive case ก็มีผล จะเรียงจากตัวพิมพ์ใหญ่ไปพิมพ์เล็ก ถ้าเป็นเลข จะเรียงตามตัวหน้าสุดของคำๆนั้น ดูที่ Folder: Week 5, File: InClass.js, Row: 27***