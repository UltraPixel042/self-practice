// Array
// ผมให้ ChatGPT ช่วย เจนโจทย์ให้

// -------------------------
// 1. หาผลรวมของตัวเลขใน Array
// -------------------------
const arr1 = [1, 2, 3, 4, 5];
// write function sumArray(arr) { ... } to return 15
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray(arr1));

// -------------------------
// 2. หาตัวเลขคู่ใน Array
// -------------------------
const arr2 = [1, 2, 3, 4, 5, 6];
// write function getEvenNumbers(arr) { ... } to return [2,4,6]
function getEvenNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(getEvenNumbers(arr2));

// -------------------------
// 3. หาคำที่ยาวที่สุดใน Array ของคำ
// -------------------------
const arr3 = ["apple", "banana", "kiwi", "strawberry"];
// write function longestWord(arr) { ... } to return "strawberry"
function longestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word;
}
console.log(longestWord(arr3));

// -------------------------
// 4. รวมตัวเลขจากหลาย Array
// -------------------------
const arr4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// write function flattenAndSum(arrays) { ... } to return 21
function flattenAndSum(arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      sum += arrays[i][j];
    }
  }
  return sum;
}
console.log(flattenAndSum(arr4));

// -------------------------
// 5. ลบค่าซ้ำออกจาก Array
// -------------------------
const arr5 = [1, 2, 2, 3, 4, 4, 5];
// write function removeDuplicates(arr) { ... } to return [1,2,3,4,5]
function removeDuplicates(arr) {
  let numArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!numArr.includes(arr[i])) {
      numArr.push(arr[i]);
    }
  }
  return numArr;
}
console.log(removeDuplicates(arr5));

// -------------------------
// 6. หาเลขมากที่สุดใน Array
// -------------------------
const arr6 = [10, 4, 32, 7, 18];
// write function maxNumber(arr) { ... } to return 32
function maxNumber(arr) {
  let number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      number = arr[i];
    }
  }
  return number;
}
console.log(maxNumber(arr6));

// -------------------------
// 7. หาเลขน้อยที่สุดใน Array
// -------------------------
const arr7 = [10, 4, 32, 7, 18];
// write function minNumber(arr) { ... } to return 4
function minNumber(arr) {
  let number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < number) {
      number = arr[i];
    }
  }
  return number;
}
console.log(minNumber(arr7));

// -------------------------
// 8. นับจำนวนคำที่มีความยาว > 5
// -------------------------
const arr8 = ["apple", "banana", "cherry", "kiwi"];
// write function countLongWords(arr) { ... } to return 2
function countLongWords(arr) {
  let word = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      word.push(arr[i]);
    }
  }
  return word.length;
}
console.log(countLongWords(arr8));

// -------------------------
// 9. แปลงตัวอักษรทั้งหมดเป็นตัวพิมพ์ใหญ่
// -------------------------
const arr9 = ["apple", "banana", "cherry"];
// write function toUpperCaseArr(arr) { ... } to return ["APPLE","BANANA","CHERRY"]
function toUpperCaseArr(arr) {
  let fruits = [];
  for (let i = 0; i < arr.length; i++) {
    fruits.push(arr[i].toUpperCase());
  }
  return fruits;
}
console.log(toUpperCaseArr(arr9));

// -------------------------
// 10. รวม Array ของคำเป็นสตริง
// -------------------------
const arr10 = ["Hello", "world", "!"];
// write function joinWords(arr) { ... } to return "Hello world !"
function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < arr.length; i++) {
    sentence = arr.join(" ");
  }
  return sentence;
}
console.log(joinWords(arr10));


