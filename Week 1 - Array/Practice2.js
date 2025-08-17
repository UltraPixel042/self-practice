// Array
// Wannawat Siriarkanay
// 67130500036

// -------------------------
// 11. แยก Array ของตัวเลขเป็นคู่และคี่
// -------------------------
const arr11 = [1, 2, 3, 4, 5, 6, 7];
// write function splitOddEven(arr) { ... } to return { odd:[1,3,5,7], even:[2,4,6] }
function splitOddEven(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    }
  }
  return `{ odd: [${odd}], even: [${even}]}`;
}
console.log(splitOddEven(arr11));

// -------------------------
// 12. ตรวจสอบว่า Array มีค่าที่ซ้ำกันหรือไม่
// -------------------------
const arr12 = [1, 2, 3, 4, 2];
// write function hasDuplicate(arr) { ... } to return true
function hasDuplicate(arr) {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (num.includes(arr[i])) {
      return true;
    } else {
      num.push(arr[i]);
    }
  }
  return false;
}
console.log(hasDuplicate(arr12));

// -------------------------
// 13. สลับค่าตัวแรกกับตัวสุดท้ายใน Array
// -------------------------
const arr13 = [1, 2, 3, 4, 5];
// write function swapFirstLast(arr) { ... } to return [5,2,3,4,1]
function swapFirstLast(arr) {
  let swapArr = [...arr];

  [swapArr[0], swapArr[swapArr.length - 1]] = [swapArr[swapArr.length - 1],swapArr[0],];

  return swapArr;
}
console.log(swapFirstLast(arr13));

// -------------------------
// 14. นับจำนวนครั้งที่ตัวเลขปรากฏใน Array
// -------------------------
const arr14 = [1, 2, 3, 2, 4, 2];
// write function countOccurrences(arr, num) { ... } countOccurrences(arr14,2) should return 3
function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences(arr14, 2));

// -------------------------
// 15. รวม Array ของ Object โดยเฉพาะ property หนึ่ง
// -------------------------
const arr15 = [{ age: 10 }, { age: 20 }, { age: 30 }];
// write function sumProperty(arr,'age') { ... } to return 60
function sumProperty(arr, age) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i][age];
  }
  return total;
}
console.log(sumProperty(arr15, "age"));

// -------------------------
// 16. สร้าง Array ของเลขยกกำลังสอง
// -------------------------
const arr16 = [1, 2, 3, 4, 5];
// write function squareArray(arr) { ... } to return [1,4,9,16,25]
function squareArray(arr) {
  let numArr = [];
  for (let i = 0; i < arr.length; i++) {
    numArr.push(arr[i] ** 2)
  }
  return numArr
}
console.log(squareArray(arr16))

// -------------------------
// 17. หาคำที่เริ่มต้นด้วยตัวอักษรที่กำหนด
// -------------------------
const arr17 = ["apple", "banana", "apricot", "cherry"];
// write function wordsStartWith(arr,'a') { ... } to return ["apple","apricot"]
function wordsStartWith(arr, start) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i][0] === start){
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(wordsStartWith(arr17, "a"))

// -------------------------
// 18. ลบค่าที่น้อยกว่าค่าที่กำหนด
// -------------------------
const arr18 = [5, 10, 3, 12, 7];
// write function removeLessThan(arr,6) { ... } to return [10,12,7]
function removeLessThan(arr, num){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(num < arr[i]){
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(removeLessThan(arr18, 6))

// -------------------------
// 19. หมุน Array ไปทางขวา 1 ตำแหน่ง
// -------------------------
const arr19 = [1, 2, 3, 4, 5];
// write function rotateRight(arr) { ... } to return [5,1,2,3,4]
function rotateRight(arr){
  let newArr = [...arr];
  let last = newArr.pop()
  newArr.unshift(last)
  return newArr
}
console.log(rotateRight(arr19))


// -------------------------
// 20. ตรวจสอบว่า Array เป็น Palindrome หรือไม่
// -------------------------
const arr20 = [1, 2, 3, 2, 1  ];
// write function isPalindrome(arr) { ... } to return true
function isPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false; 
    }
  }
  return true;
}
console.log(isPalindrome(arr20));
