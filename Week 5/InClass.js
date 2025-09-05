console.log(Array.isArray([]))                      // true
console.log(Array.isArray(['a', 12, false]))        // true
console.log(Array.isArray(new Array(2)))            // true

console.log(Array.isArray('[]'))                    // false
console.log(Array.isArray(123))                     // false
console.log(Array.isArray(false))                   // false
console.log(Array.isArray('1'))                     // false
console.log(Array.isArray({}))                      // false

const num1 = [1, 2, 3]
const num2 = [3, 5, 7]
console.log([...num1, ...num2])     // spread
console.log(num1.concat(num2))      // concat

console.log(num1.toString())
console.log(num2.toString())
console.log(num1.join('-'))
console.log(num2.join('-'))

console.log("mangoteen".includes("go"))                         // true
console.log(["mangoteen", "mango"].includes("go"))              // false
console.log(["mangoteen", "mango"].join().includes("go"))       // true
console.log(["mangoteen", "mango"].includes("Mango"))           // false        // Sensitive case
console.log(["mangoteen", "mango"].join().includes("mango"))    // true         // ต้องเหมือนกันเป๊ะ

const array14 = [1, 30, 4, 21, 100000]
array14.sort((a, b) => b - a)
console.log(array14)
const array15 = [1, 30, 4, 21, 100000]
array15.sort((a, b) => a - b)
console.log(array15)

