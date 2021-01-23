var date = new Date();
var msecDate = date.getTime();
var minuteDate = msecDate / 60000;

alert("Current Date: " + date + "\nElapsed milliseconds since January 1, 1970: " + msecDate + "\nElapsed minutes since January 1, 1970: " + minuteDate);