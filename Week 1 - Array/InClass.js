// B

// 1.create array with many data types
const box = ['apple', true, 19, 'orange', false, 38]
console.log("=============================")

// 2. print array size
const room = box.length
console.log(room)
console.log("=============================")

// 3. print the first item
console.log(box[0])
console.log("=============================")

// 4. print the last item
console.log(box[box.length - 1])
console.log("=============================")

// 5. add two more items at the end of array with object and array data types respectively

box.push(['pens', 'pencil', 'phone'], { name: 'O' })
console.log(box)
console.log("=============================")

// 6. print every items in the array

for (let i = 0; i < box.length; i ++) {
    console.log(box[i])
}                                                   // for i
for (const e of box) {
    console.log(e)
}                                                   // for of
console.log("=============================")

// 7. shrink array with any operations
box.pop(2)
console.log(box)
console.log("=============================")

// 8. apply spread on string variable
let str = 'ultraman'
const strUltraman=[...str]
console.log(strUltraman)
console.log("=============================")

// 9. create array with new constructor
let arr1 = new Array()
console.log(arr1)
let arr2 = new Array(8)
console.log(arr2)
let arr3 = new Array(3, 'panda', true)
console.log(arr3)

const arr4 = Array.of(10)   // create array with item 10
console.log(arr4)
const arr5 = Array.from(arr4)   // copy arr4
console.log(arr5)
const str2 = Array.from(str)
console.log(str2)
console.log("=============================")

const [, , c, , ...e] = [5, 10, 15, 20, 25]
console.log(c)
console.log(typeof(c))      // number
console.log(e)
console.log(typeof(e))      // object (array)ื