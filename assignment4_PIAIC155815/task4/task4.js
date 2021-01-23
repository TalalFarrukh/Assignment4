var email = prompt("Enter your email");

var isat = false, ischar = false, ischarafterat = false, isdotafterat = false;
var indexat;

for (var i = 0; i < email.length; i++) {
    if (email[i] == "@") {
        isat = true; indexat = i;
    }
    if (typeof (email[i]) == "string")
        ischar = true;

    for (var j = i; j < email.length; j++) {
        if (email[j] == ".")
            isdotafterat = true;
        if (typeof (email[j]) == "string")
            ischarafterat = true;
    }
}

if (isat && ischar && ischarafterat && isdotafterat)
    alert("email is correct");
else {
    alert("email is not in the right format");
}