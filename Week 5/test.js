// 1. transform individual export to export list and add exporting Book class

// const { echo, getLength, GPA, Book } = require("./libs/utilities.js")
import { getLength,echo, Book } from "./libs/utilities.js"

console.log(echo("Today is a present"))
console.log(getLength("JS Beginner"))
const b1 = new Book(1234)
console.log(b1)
