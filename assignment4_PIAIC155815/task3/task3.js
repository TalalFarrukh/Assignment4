var password = prompt("Enter password");

var isnum = false, isalpha = false;

for (var i = 0; i < password.length; i++) {
    if (typeof (parseInt(password[i])) == "number")
        isnum = true;
    if (typeof (password[i]) == "string")
        isalpha = true;
}

console.log(isnum); console.log(isalpha);

if (typeof (password[0]) != "Number" && password.length >= 8 && isnum && isalpha)
    alert("Password meets conditions!");
else
    password = prompt("Password does not meet conditions, Enter password again");
    