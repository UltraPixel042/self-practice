// 1. เขียนฟังก์ชัน greet(name) ที่ return "Hello, <name>!"
// ตัวอย่าง: greet("Alice") -> "Hello, Alice!"
function greet(name){
    return `"Hello, ${name}!"`
}
console.log(greet("Alice"))


// 2. เขียนฟังก์ชัน square(number) ที่ return กำลังสองของ number
// ตัวอย่าง: square(5) -> 25
function square(number){
    return number ** 2
}
console.log(square(5))


// 3. เขียนฟังก์ชัน isEven(n) ที่บอกว่าเป็นเลขคู่หรือไม่
// ตัวอย่าง: isEven(4) -> true, isEven(7) -> false
function isEven(n){
    if(n % 2 == 0){
        return true
    } else if (n % 2 == 1){
        return false
    } else {
        return ""
    }
}
console.log(isEven(43))


// 4. เขียนฟังก์ชัน getMax(a, b) ที่คืนค่ามากสุด
// ตัวอย่าง: getMax(10, 20) -> 20
function getMax(a, b){
    if(a > b) {
        return a
    } else if (a < b){
        return b
    } else{
        return a
    }
}
console.log(getMax(1, 2))
console.log(getMax(3, 1))
console.log(getMax(4, 4))


// 5. เขียนฟังก์ชัน sumArray(arr) ที่หาผลรวมของ array
// ตัวอย่าง: sumArray([1,2,3,4]) -> 10
function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log(sumArray([1, 1, 1, 1]))


// 6. เขียนฟังก์ชัน reverseString(str) ที่กลับด้าน string
// ตัวอย่าง: reverseString("hello") -> "olleh"
function reverseString(str){
    return str.split("").reverse().join("")     // split เพือทำให้เป็น array, reverse เพื่อให้ข้อความกลับ, join ทำให้เป็น string
}
console.log(reverseString("Hello"))


// 7. เขียนฟังก์ชัน factorial(n) ที่คืนค่า n!
// ตัวอย่าง: factorial(5) -> 120
function factorial(n){                                  // Recursive Function
    if(n === 0) return 1;
    return n * factorial(n - 1)
}
console.log(factorial(5))

// 8. เขียนฟังก์ชัน countVowels(str) ที่นับสระใน string
// ตัวอย่าง: countVowels("Hello World") -> 3
function countVowels(str){
    str = str.toLowerCase()
    let count = 0;
    const vowels = "aeiou"

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }  
    }
    return count
}
console.log(countVowels("Hello World"))

// 9. เขียนฟังก์ชัน fibonacci(n) ที่คืนค่าเลขฟีโบนัชชีลำดับที่ n
// ตัวอย่าง: fibonacci(6) -> 8
function fibonacci(n){                                  // Recursive Function
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(6))
// 0 1 1 2 3 5 8 13 21 34 55, ...


// 10. เขียนฟังก์ชัน isPalindrome(word) ที่ตรวจว่าเป็น palindrome
// ตัวอย่าง: isPalindrome("madam") -> true
function isPalindrome(word){
    let reversed = word.split("").reverse().join("")
    return word === reversed
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("adam"))


// 11. เขียนฟังก์ชัน findLongestWord(sentence) หาคำที่ยาวที่สุด
// ตัวอย่าง: findLongestWord("I love programming") -> "programming"
function findLongestWord(sentence){
    let longest = "";
    let word = sentence.split(" ")
    for(let i = 0; i < word.length; i++){
        if(word[i].length > longest.length){
            longest = word[i]
        }
    }   
    return longest
}
console.log(findLongestWord("I love programming"))


// 12. เขียนฟังก์ชัน uniqueElements(arr) คืน array ที่ไม่ซ้ำ
// ตัวอย่าง: uniqueElements([1,2,2,3,4]) -> [1,2,3,4]
function uniqueElements(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(uniqueElements([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]))