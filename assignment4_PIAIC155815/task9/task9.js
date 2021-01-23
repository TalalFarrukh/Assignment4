var a = "<p><strong><em>Only print this</em></strong></p>";

a = a.replace("<p><strong><em>", " ");
a = a.replace("</em></strong></p>", " ");

alert(a);
