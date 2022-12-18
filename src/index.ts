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

interface PersonInterface  {
    readonly id: number,
    name: string
    register():string
    
}

//Classes

class Person implements PersonInterface {
    id: number
    name: string

    constructor (id:number, name:string){
        this.id = id,
        this.name = name
       console.log(123)
    }
    register (){
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "one")
const mike = new Person(2, "two");


//data modifiers
//Subclasses
class Employee extends Person {
    position: string

    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position = position;


    }
}

const emp = new Employee(3, "Shawn", "Developer")

console.log(brad, mike)


console.log(emp.register())

//Generics

function getArray<T>(items:T[]): T[]{
 return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['bred', 'John', 'Jill'])

numArray.push(1)














