// Zadatak 1:
// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"


function paste(string, number, addition) {
    var c = "";

    var addition = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== number) {
            c += string[i];
        }
        else {
            c += addition;

        }
        return c;
    }
}
console.log(paste("Aston Martin", 3, "MM"));
