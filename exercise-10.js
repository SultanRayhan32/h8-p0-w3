function perkalianUnik(arr) {
  // you can only write your code here!
//   var arr = [5,6,10 ]
var arr2 = [];
var y = 1;
var temp = 1;
    for(var x = 0; x < arr.length; x++){
        temp = arr[x]
        arr[x] = 1
        
        // console.log(arr[x])
        // console.log(arr)
        // arr2.push(arr)
        for(var i = 0; i <arr.length; i++){
            y*= arr[i]
            // console.log(arr)
            
        }
        arr2.push(y)
        y = 1;
        arr[x] = temp
    }
    return arr2;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
