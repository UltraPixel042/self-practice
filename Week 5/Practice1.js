// 1.1 เพิ่ม property "age" = 25 ให้ object {name: "Ark"}
// 1.2 รวม object {a:1,b:2} กับ {b:3,c:4} แล้วเก็บผลลัพธ์
// 1.3 จาก object {oldKey: 100} ดึงค่า oldKey แล้วเปลี่ยนชื่อเป็น newKey

function addProperty(obj, key, values){
    obj[key] = values
    return obj
}
console.log(addProperty({name:"Ark"},"age",25))

function mergeObject(obj1, obj2){
    return {...obj1, ...obj2}
}
console.log(mergeObject({a: 5, b: 5}, {b: 9, d: 9}))

function extractObject(obj){
    const { oldKey: newKey } = obj
     return { newKey }
}
console.log(extractObject({oldKey: 100}))

