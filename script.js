//START VARIABLES
//var -- it can be updated and also can be re-declared || var keyword two types of scope global and function not block level scope
//let -- it can be updated and also cannot be re-declared || let keyword support function and block level scope
//const -- it cannot be updated and also cannot be re-declared || const keyword support function and block level scope
// const course = "zero to hero"
// //course="qwe" -- cannot update value
// console.log(course)

// function abv()
// {
//     const x = 20
//     console.log(x)
// }
// abv()

// const x = 30
// console.log(x)

// //block scope 
// if(1==1){
//     let y = "block scope"
//     console.log(y)
// }
// console.log(x)
//END VARIABLES

/*****************************************************************************************************************************************/

//START DATA TYPES 
// //number
// var x = 10.66 //number limit +-(253-1)
// console.log(typeof x)

// //big int
// var y = 999999999999999990n //n means big int
// console.log(typeof y)

// //string
// var name = "jhonejay"
// console.log(typeof name)

// //boolean
// var isMonday = true
// console.log(typeof isMonday)

// //undefined
// var w
// console.log(typeof w)

// //objects
// var obj={}
// console.log(typeof obj)

// var arr={}
// console.log(typeof arr)

// //symbol
// var sym = Symbol("id")
// console.log(typeof sym)

// //null
// var x = 10
// x = null
// console.log(typeof x)

// //String() Boolean()
// console.log(typeof new String("qwe"))
//END DATA TYPE

/*****************************************************************************************************************************************/

//START NULL VS UNDEFINED
//equality comparision
//normal comparision
//strict comparision

//1. Normal comparision || only compare value
// console.log(3==3)
// console.log("parba" == "parba")

// //2. strict comparision(===)
// //compare value + data type
// console.log(3===3)

// //NULL vs UNDEFINED
// var x
// console.log(x)

// var y = null
// console.log(y)

// console.log(x==y)
//END NULL VS UNDEFINED

/*****************************************************************************************************************************************/

//START SPREAD OPERATOR
// //1 Array
// var arr = ["a","b","c"]
// console.log(arr)
// //array index start from zero
// console.log(arr[0])
// console.log(arr[1])
// arr.push("3")
// console.log(arr)

// //object
// var obj = {
//     "name": "salesforce",
//     "age": 23,
//     "fullname": "JHONE JAY PARBA"
// }
// console.log(obj.age)
// console.log(obj["fullname"])
// obj.hobbies = "test"
// console.log(obj)

// //1. Expanding of string
// let greeting = "Hello Everyone"
// let charList = [...greeting]
// console.log(charList)

// //2. Combing array
// let arr1 = ["amazon", "google"]
// let arr2 = ["facebook", "instagram"]
// let arr3 = [...arr1,...arr2]
// console.log(arr3)

// //3. adding values to an array
// let arr4 = ["a","b","c"]
// let arr5 = [...arr4,"test"]
// console.log(arr5)

// //4. combining objects
// let obj1 = {
//     name: "salesforce",
//     age:23,
//     date: "12-12-2021"
// }
// let obj2 = {
//     name : "facebook",
//     age:35,
//     test : "01-01-2022"
// }
// let obj3 = {...obj1, ...obj2}
// console.log(obj3)

// //5. Shallow Copy
// var arr10 = ["x","y","z"]
// var arr11 = [...arr10]
// arr11.push("test")
// console.log(arr10)
// console.log(arr11)

// //6. Nested copy
// var arrObj = [
//     {
//         name : "nikhil"
//     },
//     {
//         name: "salesforce"
//     }
// ]
// // var arrObj1 = [...arrObj]
// // console.log( arrObj1)
// // arrObj1[0].name = "superman"
// // console.log(arrObj1)
// // console.log(arrObj)

// //Hack for nested copy
// var arrObj1 = JSON.parse(JSON.stringify(arrObj))
// arrObj1[0].name = "superman"
// console.log(arrObj1)
// console.log(arrObj)

//END SPREAD OPERATOR

/*****************************************************************************************************************************************/

//START destructuring

// //array destructuring
// let arr = ["amazon", "google"]
// // let company1 = arr[0]
// // let company2 = arr[1]

// let [company1, company2] = arr
// console.log(company1)
// console.log(company2)

// //object destructing
// let options ={
//     title: "zero to hero",
//     age: 23,
//     type : "CRM"
// }
// // var title = options.title
// // var age = options.age

// let {title,age, type} = options
// console.log(title)
// console.log(age)
// console.log(type)

//END destructuring

/*****************************************************************************************************************************************/

// //START STRING INTERPOLATIOn
// var name ="jhone jay parba"
// var age = "24"
// //console.log(name+age)

// var str = "my name is " + name + " and my age is " + age
// console.log(str)
// console.log(`my name is ${name} and my age is ${age}`)
// var a = 1
// var b = 2

// var str1 = "the sum of " + a + " and " + b + " is " + a+b
// console.log(str1)
// console.log(`the sum of ${a} and ${b} is ${a+b}`)

// //END STRING INTERPOLATIOn

/*****************************************************************************************************************************************/

// //START String methods
// let str = "Hello guys I hope your are doing good"

// //1. Includes()
// let check = str.includes("hope")
// console.log(check)

// //2. indexof
// let index = str.indexOf("doing")
// console.log(index)

// //3. Startwith
// console.log(str.startsWith("Hello"))

// //4.slice
// console.log(str.slice(0,5))

// //5. toLowerCase
// console.log(str.toLowerCase())

// //6. toUpperCase
// console.log(str.toUpperCase())

// //7.trim
// console.log("   trim this string  ".trim().toUpperCase())

//END String methods

/*****************************************************************************************************************************************/

//START Object/JSON Operations
let obj={
    name : "Salesforce",
    age: 23,
    dob:"23/10/1990"
}
//object.keys()
console.log(Object.keys(obj))

//object.values()
console.log(Object.values(obj))

//json.stringify
console.log(JSON.stringify(obj))

//json.parse
console.log(JSON.parse(JSON.stringify(obj)))

//END Object/JSON Operations