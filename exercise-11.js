function tentukanDeretAritmatika(arr) {
    var tempArr = [];
    var temp = 0;
    for(var x = 0; x < arr.length-1; x++){
        for(var y = x + 1; y < x + 2; y++){
            temp = arr[y] - arr[x]
            tempArr.push(temp)
            temp = 0;
        }
    }
    for(var x = 0; x < tempArr.length-1; x++){
        for(var y = x + 1; y < x + 2; y++){
            if(tempArr[x] !==  tempArr[y]){
                return false
            }
            
        }
    }
    return true;
    
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

// var arr = [1,2,3,4,5,6];

// for(var x = 0; x < arr.length; x ++){
//     for(var u = x + 1; u < x + 2; u++){
        
//     }
// }
// var arr = [1,1,1,1,1];

// function cari(arr){
//     for(var x = 0; x < arr.length-1; x++){
//         for(var y = x + 1; y < x + 2; y++){
//             if(arr[x] !==  arr[y]){
//                 return false
//             }
            
//         }
//     }
//     return true;
// }


// console.log(cari(arr))

// for(var x = 0; x < arr.length-1; x++){
//     for(var y = x + 1; y < x + 2; y++){
//         if(arr[x] !==  arr[y]){
//             console.log(false)
//         }
//         else { 
//             console.log(true)
//         }
//     }
// }