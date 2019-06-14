interface Person {
    readonly name: string;
    gender?: string;
    age: any;
    [propName:string]: any
}
 let tom: Person = {
     name: 'haha',
     age: 21,
     hehe: '122'
 }
 // tom.name = '111'
 console.log(tom.name);
 console.log(tom);

let arr: any[] = [1,2,3,4,'呵呵']


interface NumberArray {
    [index: number]: number | string;
}
let list: NumberArray = [1,2,3,4,5,'1']

function getLength(something: string | number): number {
    if((<string>something).length){
        return (<string>something).length;
    }else{
        return something.toString().length;
    }
}