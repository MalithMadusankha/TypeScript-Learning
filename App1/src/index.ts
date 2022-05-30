console.log("hello world");
let age: number = 20;
let array : number[] = [1,2,3]
let array1 = [1,2,3]
// 2, Name
let tuple : [number, string] = [2, "name"]

enum Size {Small, Medium, Large} // implicitily assign values 0, 1, 2
// enum Size {Small = 1, Medium, Large} // implicitily assign values 1, 2, 3
// enum Size {Small = 's', Medium = 'm', Large = 'l'} // implicitily assign values 1, 2, 3

let mySize = Size.Large
console.log(mySize);

const enum SizeA {Small, Medium, Large} // Compiler generate more optimize code

let mySizeA = SizeA.Large
console.log(mySizeA);

function calculteTax(income: number): number {
    if(income > 10)
        return income * 10
    return income * 5
}
// with optional parameter not best practises (using by JS trip)
function calculteTaxO(income: number, tax?: number): number {
    if((tax|| 30) > 10)
        return income * 10
    return income * 5
}
// with optional parameter not best practises, But Good
function calculteTaxOG(income: number, tax:number = 20): number {
    if(tax > 10)
        return income * 10
    return income * 5
}

calculteTax(5)

// objects
 let obj = {id: 1}
//  emp.name = 'malith' cannont beause not dynamic
let newObj: {
    id: number,
    name: string
} = {id: 1, name: ''} // assigning two values required and best practices

let newO: {
    id: number,
    name?: string
} = {id: 1} // name optional and not best practices

let newObjC: {
    readonly id: number,
    name: string
} = {id: 1, name: ''} // cannot change id

// with method 
let newObjF: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {id: 1, name: '', retire: (date: Date) => {
    console.log(date);
}} // with methods

// DRY principle

// custom type
type Employee ={
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let emp1 = {id: 1, name: '', retire: (date: Date) => {
    console.log(date);
}} 

// union type 

function kgToLbs(weight:number | string) {
    // Narrowing
    if(typeof weight === 'number')
        return weight * 2
    else 
        return parseInt(weight) * 2
}

// intersection
// type intersection
let weight: number & string

type Drageble = {
    drag: () => void
}

type Resizeble = {
    resize: () => void
}

type UIwidget = Drageble & Resizeble

let uiWidgetObj: UIwidget = {
     drag: () => {},
     resize: () => {}
}

// Literal (exact, specific)
let quality: 50 = 50 // can assign only  50
let qty: 50 | 100 = 50 // can assign only  50 and 100

// using by custom type
type Quality = 10 | 20 // can have any types
let qtyT: Quality = 20  // can assign only  10 and 20

// Nullable
function NullableFun(name:string | null | undefined): void {
    if(name)
        console.log(name.toUpperCase());
    else 
        console.log('hola !');        
}

// can call
NullableFun('malith')
NullableFun(null)
NullableFun(undefined)

// Optional changing
type Customer = { birthday?: Date}

function getCustomer(id: number) : Customer | null {
    return id === 0 ? null : {birthday : new Date()}
}

let cus = getCustomer(0)
// Optional property access operator
console.log(cus?.birthday?.getFullYear());

// Optional call

let log: any = null // (a: string) => {}
log?.('a')

