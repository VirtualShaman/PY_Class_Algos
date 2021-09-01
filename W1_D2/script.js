// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve, you can also use a counter

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    for (i=0;i<str.length/2;i++){
        j=str.length-1-i
        if(str[i]=="("&&str[j]!=")"){
            return "False"
        }
        else if(i==j || i==j-1) {
            return "True"
        }
    }
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid (returns true/false). 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve, you can also use a counter

function bracesValid(str) {
    for (q=0;q<str.length;q++){
        if(str[q]=="(" || str[q]=="{" || str[q]=="["){
            for (u=q+1;u<str.length;u++){
                if(str[u]!=")"||str[u]!="}"||str[u]!="]" && u<str.length){
                    return "False"
                }
            }
            // for (i=0;i<str.length/2;i++){ Unfinished
            //     j=str.length-1-i
            //     if(str[i]=="("&&str[j]!=")"){
            //         return "False"
            //     }
            //     else if(i==j || i==j-1) {
            //         return "True"
            //     }
            // }
        }
        if(q==str.length-1){
            return "True"
        }
    }
}

console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));