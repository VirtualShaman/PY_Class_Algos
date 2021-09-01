// Create a function that, given a string, returns the string's acronym as a string (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym(str) {
    var solution = "";
    for(i=0;i<str.length;i++){
        if(i == 0){
            solution += str[i];
        }
        if(str[i] == " ")
            solution += str[(i+1)]
    }
    return solution.toUpperCase();
}

console.log(acronym("there's no free lunch - gotta pay yer way"));



// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    var newarr = '';
    for(i=str.length-1;i>=0;i--){
        newarr += str[i];
    }
    return newarr
}

console.log(reverseString("creature")); // "erutaerc"