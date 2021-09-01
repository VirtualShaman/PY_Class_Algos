// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isStrictPallindrome(str) {
    for(i=0;i<str.length;i++){
        j=str.length-1-i
        if(str[i]!=str[j]){
            return false
        }
        else if(i==j || i==j-1){
            return true
        }
    }
}

console.log(isStrictPallindrome("racecar")); // TRUE
console.log(isStrictPallindrome("e tacocat e")); // TRUE
console.log(isStrictPallindrome("Dud")); // FALSE
console.log(isStrictPallindrome("oho!")); // FALSE
console.log(isStrictPallindrome(" to ")); // FALSE

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function longestPallindrome(str) { // Unfinished!
    pallindrome=""
    for(i=0;i<str.length;i++){
        for(j=str.length-1;j>=0;j--){
            if(isStrictPallindrome(str.slice(i,j+1))){
                if(pallindrome.length<str.slice(i,j+1).length){
                    pallindrome+=str.slice(i,j+1)
                }
            }
        }
    }
    return pallindrome
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));