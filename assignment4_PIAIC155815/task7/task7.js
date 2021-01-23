var x = "The quick brown fox jumps over the lazy dog";
var y = 0;

for (var i = 0; i < x.length-2; i++) {
    if (x[i] == "t" || x[i] == "T" && x[i + 1] == "h" && x[i + 2] == "e")
        y++;
}

alert("Text: " + x + "\nThere are " + y + " occurences of the word 'the'");