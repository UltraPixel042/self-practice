const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
]

// output: ['SOMCHAI JAIDEE', 'PORNCHAI DEEJAI', 'SUDA RAKDEE']

let full = employees.map((e) => e.firstname.toUpperCase() + " " +  e.lastname.toUpperCase())
// console.log(full)

// output: ['SOMCHAI JAIDEE', 'PORNCHAI DEEJAI']

let fulls = full.filter((e) => e.includes("JAI"))
// console.log(fulls)

"---------------------------------------------------------------------------------------------------"

const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7%

let all = carts.reduce((total, current) => total + (current.price * current.amount), 0)
const allPrice = all * 1.07
console.log(allPrice.toFixed(2))

const words = ["apple", "orange", "banana"]
// add 'cherry' after 'orange'
words.splice(2, 0, "cherry", "berry")
console.log(words)

// delete "cherry"
words.splice(2, 1)
console.log(words)

// replace "berry" with "mango"
words.splice(2, 1, "mango")
console.log(words)

console.log("------------------------------------------------------------------")

const fruits = ["apple", "orange", "banana", "mango", "cherry"]

console.log(fruits.slice(1)) // ["orange", "banana", "mango", "cherry"]
console.log(fruits.slice(0, 3)) // ["apple", "orange", "banana"]

console.log(fruits.slice(2, 5)) // ["banana", "mango", "cherry"]
console.log(fruits.slice(2))    // ["banana", "mango", "cherry"]
console.log(fruits.slice(-3))   // ["banana", "mango", "cherry"]

words.fill(undefined, 1, 3)
console.log(words)
words.fill(null, 1)
console.log(words)
