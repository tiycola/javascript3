//Problem 1
/*
Identify which line the error occurs on.
Explain the cause of the error
Fix the error, so the code produces the desired response.
*/


var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastname;

console.log(fullName); // Julia Roberts

//on line 11 lastname is not camel cased correctly and should be written lastName.
// Because it is not camelcased the var on line 11 does not know what what lastname is defined as.
//It should be written like this
var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastName;

console.log(fullName);