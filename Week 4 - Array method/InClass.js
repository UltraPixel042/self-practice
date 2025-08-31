const words = ["apple", "mango", "orange", "banana"];
// words.reverse()
// console.log(words)

// วิธีการเขียน call back function

// 1. annonymous arrow function
const startAWords = words.filter((words) => words.startsWith("a"));
console.log(startAWords);

// 2. annonymous function declaration
const startAwords = words.filter(function (word) {
  return word.startsWith("a");
});
console.log(startAwords);

// 3. named arrow function
const checkStartA = (word) => word.startsWith("a");
const startAWord2 = words.filter(checkStartA);
console.log(startAWord2);

// 4. named function declaration

function checkStart3(word) {
  return word.startsWith("a");
}
const startAWord3 = words.filter(checkStart3);
console.log(startAWord3);

let kum = [];
words.forEach((word) => {
  if(word.startsWith("a")){
      kum.push(word);
  }
});
console.log(kum);

const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)