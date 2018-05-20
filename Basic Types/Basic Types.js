var isDone = true;
var decimal = 6;
var hex = 0x223;
var binary = 1010;
var octal = 19;
console.log(binary);
var color = 'blue';
var firstName = 'Anish';
var lastName = 'Sachdeva';
var age = 20;
console.log("My name is " + (firstName + ' ' + lastName) + ". \nI am " + age + " years old.");
var fibonacciSeries = [1, 1, 2, 3, 5];
var fibS = [1, 1, 2];
// Tuple Types and Deceleration
var tuple;
var fullName;
fullName = ['Gautam', 'Sachdeva'];
console.log(fullName);
console.log(fullName[0].substr(3, 3));
// Enums and Enummerators
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
// Setting default values in the Enumerator
var ColorPalette;
(function (ColorPalette) {
    ColorPalette[ColorPalette["Cyan"] = 1] = "Cyan";
    ColorPalette[ColorPalette["Magenta"] = 2] = "Magenta";
    ColorPalette[ColorPalette["Yellow"] = 4] = "Yellow";
    ColorPalette[ColorPalette["K"] = 0] = "K";
})(ColorPalette || (ColorPalette = {}));
var colorPalette = ColorPalette.K;
console.log(colorPalette);
// The any type that can be used for defining any type
var notSure = true;
console.log(notSure);
notSure = 10;
console.log(notSure);
notSure = [1, 2, 3];
var list = [true, false, 100, 'anish', ColorPalette];
console.log(list[4][1]);
//Null, Void, Undefined - all are pretty useless
function warnUser() {
    alert('This is a warning message');
}
//Explicit Type Conversions
var anyVariable = 'this is a string';
console.log('The string length is ' + anyVariable.length);
// Classes and generics
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Person = function (firstName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    Person.prototype.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
