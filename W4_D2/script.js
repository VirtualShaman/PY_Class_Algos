// Greatest Common Factor
// Given two integers, create recursiveGreatestCommonFactor(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// 1) if num1 === num2, that number is the greatest common factor;
// 2) if a>b, then you can remove b from a, which gets you closer to the GCF;
// 3) if b>a, then you can remove a from b, which gets you closer to the GCF;
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654) .

// function recursiveGreatestCommonFactor(num1,num2){//       This is iterative not recursive...
//     var result = 0
//     for (i=0;i<=num1;i++){
//         if (num1 % i === 0){
//             var temp1 = i
//         }
//         for (j=0;j<=num2;j++){
//             if (num2 % j === 0){
//                 var temp2 = j
//                 if (temp1 == temp2){
//                     result = temp1
//                 }
//             }
//         }
//     }
//     return result
// }

function recursiveGreatestCommonFactor(num1,num2){//    Not My Code
    if(num1 == num2){
        return num1
    }
    if(num1 > num2){
        return recursiveGreatestCommonFactor(num1-num2, num2)
    }
    if(num1 < num2){
        return recursiveGreatestCommonFactor(num1, num2-num1)
    }
}
console.log(recursiveGreatestCommonFactor(50,180)); // 10
console.log(recursiveGreatestCommonFactor(7,35)); // 7
console.log(recursiveGreatestCommonFactor(65,95)); // 5
