// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// multiply input by 100 : 3.21 == 321

// take new number (321) and divide by 25 to get the number of quarters
// make sure to round down to get a whole number
// subtract the (# of quarters * 25) from the overall input # and then check the next denomination
// repeat for different denominations
// print and then return the data you collected

var output = {
    'quarters': 0,
    'dimes': 0,
    'nickels': 0,
    'pennies': 0,
}


function generateCoinChange(input) { //only a NaN problem to fix
    temp=input * 100
    temp=temp/25
    temp=temp.toString().split('.');
    temp[1]="."+temp[1]
    
    output['quarters']=temp[0]
    output['quarters']*=1
    // console.log(output['quarters'])
    

    temp.shift()
    temp*=25
//     console.log(temp)

    
    
    temp=temp/10
    temp=temp.toString().split('.');
    temp[1]="."+temp[1]

    output['dimes']=temp[0]
    output['dimes']*=1
    // console.log(output['dimes'])

    temp.shift()
    temp*=10
    // console.log(temp)



    temp=temp/5
    temp=temp.toString().split('.');
    temp[1]="."+temp[1]

    if(temp!=NaN){
        output['nickels']=temp[0]
        output['nickels']*=1
        // console.log(output['nickels'])
    }

    temp.shift()
    temp*=5
    // console.log(temp)


    temp=temp/1
    temp=temp.toString().split('.');
    temp[1]="."+temp[1]

    output['pennies']=temp[0]
    output['pennies']*=1
    // console.log(output['pennies'])

    temp.shift()
    temp*=1
    // console.log(temp)

    
    return output
}


console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57))// 18 quarters, 1 nickel, 2 pennies