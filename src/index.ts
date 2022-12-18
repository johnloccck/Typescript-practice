let id:number = 5
let company: string = 'Travesry Media'
let isPublished:boolean = true
let x:any = 'Hello'
let age: number

let ids:number[] = [1,2,3,4,5]

x=true
console.log('ID:', id)

let arr: any[]= [1,true, "Hello"]

let person: [number, string,boolean] = [1, 'Brad', true ]

let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Brad'],
    [3, 'Jill']
]

//Union

let pid: string | number = 22
pid = '22'

//Enum

enum Direction1 {
    Up = 1,
    Down  ,
    Left,
    Right
}
enum Direction2 {
    Up = "Up",
    Down ="Down" ,
    Left = "Left",
    Right = "Right"
}

//Objects
// type User = {
//     id: number,
//     name: string
// }

// const user:User = {
//     id: 11,
//     name: 'John'
// }

// console.log(Direction1.Left)

//type Assertion

let cid:any = 1 
// let customerId = <number>cid

let customerId = cid as number

//Functions
function addNum(x:number,y:number):number{
    return x + y
}

console.log(addNum(1,2))

function log(message: string | number):void{
    console.log(message)
}

//Interfaces

interface UserInterface  {
    readonly id: number,
    name: string
    age?:number
}

const user1: UserInterface = {
    id: 1,
    name:"John",
    // age: number
}

// type Point = number | string
// const p1: Point = 1

// user1.id=5

interface MathFunc {
    (x:number, y:number):number
}

const add:MathFunc= (x:number, y:number):number => x+y
const sub:MathFunc= (x:number, y:number):number => x-y

//Classes

// class Person {
//     id: number
//     name: string

//     constructor (){
//        console.log(123)
//     }
// }

// const brad = new Person()















