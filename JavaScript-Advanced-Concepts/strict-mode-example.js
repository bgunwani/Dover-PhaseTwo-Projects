
/**
 *  Strict Mode: 
 *      
 *      - This is a semantically stricter or restrict version of JavaScript.
 *      - This produces errors for those mistakes that are handled by JavaScript silently.
 * 
 */

// Enable Strict Mode:

// "use strict";

/* ************************************************ */

// General Restrictions in Strict Mode:

/* ************************************************ */

// 1. Undeclared Variables are Not Allowed.

// "use strict";

// x = 100;
// console.log(x); // ReferenceError: x is not defined

/* ************************************************ */

// 2. Deleting a Variables or Function is not allowed.

// "use strict";

// var person = { name: "Kartik", age: 32};
// console.log(person);
// delete person;  // SyntaxError: Delete of an unqualified identifier in strict mode.
// console.log(person);

/* ************************************************ */

// 3. Duplicating a Parameter Name is not allowed.

// "use strict";

// SyntaxError: Duplicate parameter name not allowed in this context
// function calculate(num, num) {
//     return num * num;
// }

// console.log(calculate(10, 10));


/* ************************************************ */

// 4. The eval Method cannot Alter Scope.

// "use strict";

// eval("var x = 100;");   // ReferenceError: x is not defined
// console.log(x);

/* ************************************************ */

// 5. Eval and arguments cannot used an identifier

// "use strict";

// var eval = 100; // SyntaxError: Unexpected eval or arguments in strict mode
// console.log(eval);

/* ************************************************ */

// 6. The with Statement is not allowed.

// "use strict";

// // Without `with` keyword:
// var radius = 5;
// var area1 = Math.PI * radius * radius;
// console.log(area1);

// // With `with` keyword:
// var radius1 = 10;
// with(Math) {        // SyntaxError: Strict mode code may not include a with statement
//     var area2 = PI * radius1 * radius1;
//     console.log(area2);
// }

/* ************************************************ */

// 7. Writing to a Read-Only Property is not allowed.

// "use strict";

// var person = { name: 'Kartik', age: 23};
// console.log(person);
// Object.defineProperty(person, "Gender", {value: "Male", writable: false})
// console.log(person.Gender);
// person.Gender = "M";    // TypeError: Cannot assign to read only property 'Gender' of object '#<Object>'
// console.log(person.Gender);

/* ************************************************ */

// 8. Adding a New Property to a Non-Extensible Object is not allowed.

"use strict";

var person = { name: 'Kartik', age: 23};
console.log(person);
console.log(Object.isExtensible(person));   // true
Object.freeze(person);
console.log(Object.isExtensible(person));   // false
person.city = "Delhi";  // TypeError: Cannot add property city, object is not extensible
console.log(person);

/* ************************************************ */