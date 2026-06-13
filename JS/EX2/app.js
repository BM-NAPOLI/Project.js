// init = 0
// arr loop
// Check if positive
// sum positive numbers
// return result


function sumPositive(arr){
    let initNumbers = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            initNumbers += arr[i];
        }
    }
    return initNumbers;
}
console.log(sumPositive([3, 9, -5, 8, -4]))