function pasanganTerbesar(num) {
    var angka2 = num.toString();
    var tempArr = []
    for(var x = 0 ; x < angka2.length -1; x++){
        for(var u = x + 1; u < x + 2; u++){
            tempArr.push(angka2[x] + angka2[u])
        }
    }
    // var t = tempArr.sort()
    // return t[t.length-1];
    var temp = ''
    for(var x = 0;  x< tempArr.length; x++){
        for(var u = x + 1; u < tempArr.length; u++){
            if(tempArr[x] > tempArr[u]){
                temp = tempArr[x]
                tempArr[x] = tempArr[u]
                tempArr[u] = temp    
            }
        }
    } // untuk mengurutkan array
    return tempArr[tempArr.length -1]

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99



