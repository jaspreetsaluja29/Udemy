var firstName = 'Jaspreet';
console.log(firstName);
var lastName = 'Saluja';
console.log(lastName);
var age = 28;
console.log(age);
var fullAge =true;
console.log(fullAge);
var abc;
console.log(abc);

//variables
/*
commenting
*/

// Varibale mutation and type coerction
// Type coerction
/* type coerction which can be seen in age as the age get automatically changed to string in javascript */
if(age > 25)
{
    console.log(firstName + ' ' + lastName + ' is ' + age + ' year old.');
}
else
{
console.log('Age is less');
}

console.log('Is ' + firstName + ' ' + lastName + ' above 25 ?' + fullAge);


//Variable Mutation

age = 'Twenty Eight';

alert (firstName + ' ' + lastName + ' is ' + age + ' year old.');
lastName =  prompt('Please Enter Your Last Name');
console.log(firstName + ' ' + lastName + ' is ' + age + ' year old.');

