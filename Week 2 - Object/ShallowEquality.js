// Shallow Equality
let book1 = {
    isbn: 123456789,
    title: "JavaScript"
}

let book2 = {
    isbn: 123456789,
    title: "JavaScript"
}

function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if(keys1.length !== keys2.length){
        return false
    }
    for(let key of keys1) {
        if(object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}

console.log("shallow equality: " + shallowEquality(book1, book2))


// ฟังก์ชั่นนี้เป็นการเช็คว่า object ทั้งสองตัวเท่ากันและเหมือนกันรึเปล่า
// จากนั้นก็ทำการดึง keys มาเก็บไว้ในตัวแปรที่สร้างก่อน เพื่อจะได้ง่ายต่อการทำขั้นต่อไป
// ขั้นแรกจะทำการเช็คว่าจำนวน keys ของทั้ง 2 object **เท่ากัน** รึเปล่า ถ้าไม่เท่ากันจะ return false เลย แต่ถ้าเท่าก็จะไปเช็คขั้นต่อไป
// หลังจากเช็คจำนวน keys แล้ว ขั้นต่อมาเป็นการ loop ดูหาว่าค่าด้านใน object ทั้งสองตัว **เหมือนกัน** รึเปล่า ถ้าไม่เหมือนจะ return false แต่ถ้าเหมือนก็จะทำในขั้นต่อไป
// หลังจากที่เช็คว่าจำนวน keys เท่ากัน และ loop ออกมาเท่ากัน ก็จะ return true เลย


// นายวรรณวัฒน์ ศิริอาคเนย์
// 67130500036