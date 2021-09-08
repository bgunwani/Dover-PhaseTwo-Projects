
/**
 * Primitive Data Types: String, Number, Boolean, Null and Undefined
 */

/* *************************** */

/* Number Type */

// var number = 100;
// console.log(number);
// console.log(typeof number);     // Number

// var num1 = Number(100);
// console.log(num1);
// console.log(typeof num1);       // Number

// var num2 = new Number(100);
// console.log(num2);
// console.log(typeof num2);       // Object

// var n1 = new Number(100);
// var n2 = Number(100);
// var n3 = 100;
// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n1 == n2);  // true
// console.log(n1 === n2); // false
// console.log(n2 == n3);  // true
// console.log(n2 === n3); // true
// console.log(n1 == n3);  //  true
// console.log(n1 === n3); // false

/* *************************** */

/* String Type: */

// var firstName = 'King';
// var lastName = 'Kochhar';
// console.log(firstName + ' ' + lastName);
// console.log(`Welcome ${firstName} ${lastName}!!`);

// var message = "Hello World";
// for (let i = 0; i < message.length; i++) {
//     console.log(message[i]);
// }

// var message = "This is JavaScript Session";
// var message = 'This is JavaScript Session';
// var message = "This is 'JavaScript' Session";
// var message = 'This is "JavaScript" Session';
// var message = "This is \"JavaScript\" Session";
// var message = 'This is \'JavaScript\' Session';
// console.log(message);

/* *************************** */

/* Boolean Type: */

// var value = true;
// console.log(value);
// console.log(typeof value);

// value = true;
// console.log(value ? "Good" : "Bad");
// value = false;
// console.log(value ? "Good" : "Bad");

/* *************************** */

/* Null and Undefined Type: */

/**
 * 1. null means absence of value.
 * 2. undefined means lack of value.
 * 3. null and undefined both evaluates to false in conditions.
 */

var value1;         // Lack of Value
console.log(value1);
var value2 = null;  // Absence of Value
console.log(value2);

console.log( value1 ? "Good": "Bad");
console.log( value2 ? "Perfect": "So So");

/* *************************** */