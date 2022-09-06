let hello = "Hello, World!";
let message;

message = hello;
alert(hello);
alert(message);

let name = "John";
let admin;

admin = name;
alert(admin);

let planet = "Earth";
let currentUser;

alert(planet);

alert(10 / 2);

let num1 = 100;
let num2 = "10";

alert(isNaN(num2));
alert(num1 / num2);

let myNumber = 2;

while(myNumber != Infinity) {
    myNumber *= myNumber;
    alert(myNumber);
}

alert(typeof(Infinity));

myNumber = 32;
alert(myNumber.toString(32));
alert(myNumber.toString(16));
alert(myNumber.toString(12));
alert(myNumber.toString(10));
alert(myNumber.toString(8));
alert(myNumber.toString(2));

let newNumber = new Number(myNumber);
alert(newNumber);
alert(typeof(newNumber));

let answer1 = new Number(prompt("First Number?", 1));
let answer2 = new Number(prompt("Second Number?", 2));

alert(answer1 + answer2);