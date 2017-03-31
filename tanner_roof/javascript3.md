1)

console.assert
console.table
console.profile
console.time
console.group

2)

EvalError
RangeError
ReferenceError

3)

d. All exceptions must be explicitly handled or the program won't run at all.

4)

c. try/catch

5)

a.
var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastname;

console.log(fullName); // Julia Roberts

Error occurs on line 3. Javascript is case sensitive, so running lastname instead of lastName is problematic.
var fullName = firstName + lastName;

b.
var yearBorn = 1975;
var currentYear = 2016;
Var age = currentYear - yearBorn;

console.log(age); // 41

Error occurs on line 3. "Var" shouldn't be capitalized and Javascript won't recognize it as such. Correctly changing it to "var" will run.
