let isDone: boolean = true;
let decimal: number = 6;
let hex: number = 0x223;
let binary: number = 1010;
let octal: number = 0o23;
console.log(binary);


let color: string = 'blue';
let firstName:string = 'Anish';
let lastName: string = 'Sachdeva';
let age: number = 20;

console.log(`My name is ${firstName + ' ' + lastName}. 
I am ${age} years old.`);

let fibonacciSeries: number[] = [1,1,2,3,5];
let fibS: Array<number> = [1,1,2];

// Tuple Types and Deceleration
let tuple: [number, string];
let fullName: [string, string];
fullName = ['Gautam', 'Sachdeva'];
console.log(fullName);
console.log(fullName[0].substr(3,3));



// Enums and Enummerators
enum Color {
    Red,
    Green,
    Blue
}
let c:Color = Color.Blue;
console.log(c);

// Setting default values in the Enumerator
enum ColorPalette {
    Cyan=1,
    Magenta=2,
    Yellow=4,
    K=0
}
let colorPalette: ColorPalette = ColorPalette.K;
console.log(colorPalette);



// The any type that can be used for defining any type
let notSure: any = true;
console.log(notSure);
notSure = 10;
console.log(notSure);
notSure = [1,2,3];
let list: Array<any> = [true, false, 100, 'anish', ColorPalette];
console.log(list[4][1]);


//Null, Void, Undefined - all are pretty useless
function warnUser(): void {
    alert('This is a warning message');
}




//Explicit Type Conversions
let anyVariable: any = 'this is a string';
console.log('The string length is ' + (<string>anyVariable).length );


// Classes and generics
class Address{
    houseNumber: number;
    streetName: string;
    City: string;
    State: string;
    Country: string
}
class Person{
    firstName: string;
    lastName: string;
    age: number;
    addresses: Address[];

    Person(firstName, age){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public fullName(){
        return this.firstName + ' ' + this.lastName
    }
}
