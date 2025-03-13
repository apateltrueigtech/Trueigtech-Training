// Calculate the average of the numbers in an array of numbers

function avgArray(arr){
    var n= arr.length;
    var sum =0;
    for(var i=0;i<n;i++){
        sum+=arr[i];
    }
    return sum/n;
}
var arr=[2,4,8,10,12,14];
var avg= avgArray(arr);
console.log(avg);