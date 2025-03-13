// Calculate the sum of numbers  in an array of numbers.

function sumArray(arr){
    var sum =0;
    for(var i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(sumArray(arr)); 