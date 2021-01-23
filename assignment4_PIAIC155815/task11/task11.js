var num = prompt("Enter number");
var sum = 0;
var numbers = num.length;

for (var i = 0; i < num.length; i++) {
    sum = sum + parseInt(num[i]);
}

var average = sum / numbers;
average = average.toFixed(0);
alert("Mean = " + average);