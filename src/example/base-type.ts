//布尔类型
// let bool:boolean = false

//数值类型
let num:number = 123

num = 0b11011

num= 0o173

num =0x23
//字符串类型
let str:String
str = `数值是${num}`
console.log(str);

//数组类型

let arr:String[]
arr = ['1','2','3']

let arr1:Array<String>
let arr2:(number|string)[]

//元组类型 固定位置上固定的类型
let tuple:[String,Number,Boolean]
tuple = ['1',1,false]

// 枚举类型
enum Roles{
    Admin,
    User
}