var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastname; //error is here. 
//the lastname here doesn't match the camelCase on the previous line.

console.log(fullName);

//line 3 should read
var fullName = firstName + lastName;