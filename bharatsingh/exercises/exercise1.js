// 1. Each of the following blocks of JavaScript contains errors. Take a look at each and do the following:
// From main.js
var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastname;

console.log(fullName); // Julia Roberts

// Identify which line the error occurs on.
Line 5: lastname is undefined. Variable declared is lastName, camel-cased.
// Explain the cause of the error
ReferenceError bc lastname is not defined. Variable declared is lastName, camel-cased.

// Fix the error, so the code produces the desired response.

var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastName;

console.log(fullName); // Julia Roberts




// From index.js

var yearBorn = 1975;
var currentYear = 2016;
Var age = currentYear - yearBorn;

console.log(age); // 41

// Identify which line the error occurs on.
Line 29

// Explain the cause of the error
 SyntaxError. Var is capitalized and should be written lower-cased (var).

 // Fix the error, so the code produces the desired response.
var yearBorn = 1975;
var currentYear = 2016;
var age = currentYear - yearBorn;

console.log(age); // 41
