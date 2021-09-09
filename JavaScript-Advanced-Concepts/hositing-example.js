
/**
 * JavaScript Hoisting:
 *  
 *  In JavaScript, all variables and function declarations are moved or hoisted to the
 *  top of the current scope, regardless of where it is defined.
 *  And, this is the default behaviour of JavaScript interpreter.
 *  We have:
 *      a. Variable Hoisting
 *      b. Function Hoisting
 * 
 */

// Declaration
    // var value;
// Assignment
    // value = 100;
// Initialization
    // var value = 100;

/* ************************************************* */

// Variable Hoisting:

// str = "Hello Everyone";
// var str3;
// console.log(str);       // Hello Everyone
// console.log(str2);      // undefined
// console.log(str3);      // undefined
// var str;
// var str2 = "Something More";
// str3 = "Something Exciting";

/* ************************************************* */

// Function Hoisting:

// Calling of function:
sayHello();
sayHello();

// Declaration of function:
function sayHello() {
    console.log('Hello Everyone');
}

// Below code will give error, thus arrow function can't be hoisted.

// Calling of Arrow Function:
display();
display();

// Declaration of Arrow Function:
var display = () => console.log('Say Hi!!');

/* ************************************************* */