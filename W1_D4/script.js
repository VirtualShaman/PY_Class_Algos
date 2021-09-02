// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

// ============================
// Instructor's Solution
// ============================

function bookIndex(arr){
newstr=''
end=[]
start=[]
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]==arr[i+1]-1){
            if(arr[i-1]!=arr[i]-1){
                start.push((arr[i]+'-'))
            }
            if(arr[i+2]!=arr[i+1]+1){
                end.push(start+arr[i+1])
                if (i+1==arr.length-1){
                    newstr+=(end[end.length-1])
                }
                else {
                    newstr+=(end[end.length-1]+', ')
                }
                start.pop()
                i++
            }
        }
        else if(arr[i]!=arr[i+1]){
            if (i==arr.length-1){
                newstr+=arr[i]
            }
            else {
                newstr+=arr[i]+', '
            }
        }
    }
return newstr
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))
console.log(bookIndex([1,3,4,5,7,8,10,12,13,14,15,16,17]))
