var date = new Date();
var age = prompt("Enter your age");

var birthyear = date.getFullYear() - parseInt(age);

alert("Your age is " + age + "\nYour birth year is " + birthyear);