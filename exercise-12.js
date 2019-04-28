function tentukanDeretGeometri(arr) {
    var tempArr = [];
    var temp = 0;
    for(var x = 0; x < arr.length-1; x++){
        for(var y = x + 1; y < x + 2; y++){
            temp = arr[y] / arr[x]
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
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false