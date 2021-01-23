var date = new Date();
var firstdate = new Date(date);

date.setHours(date.getHours() + 1);

alert("Current date: " + firstdate + "\n1 hour ago it was " + date);