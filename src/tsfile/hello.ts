function sayHello(preson: string){
    return 'hellow' + preson
}
let haha: boolean = false
console.log(sayHello('111'));
haha = true
console.log(haha);

let bo:any = new Boolean(12)

console.log(bo);

function alertName(a:string): void {
    alert('My name is Tom');
    a = '222'
    // return {}
    // return '123'
}

let u: undefined = undefined
let n: null = null
let n1: undefined = null
let n2: null = undefined
let n3: number = undefined
let n4: string = undefined
let n5: object = undefined
console.log(u);

let str: any = 'seven'
str = 123
console.log(str);