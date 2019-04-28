function targetTerdekat(arr) {
    // looping pertama untuk menentukan o index ke berapa dari array tersebut

// // var arr = ['o' , '' ,'' ,'x','' ,'x'];
// var arr = ['o', ' ', ' ', ' ', 'x', 'x', 'x']

var indexDariO = 0;
var indexDariX = []

for(var x in arr){
    if(arr[x] === 'o'){
        indexDariO = x
    }
    else if(arr[x] === 'x'){
        indexDariX.push(x)
    }
}

if(indexDariX.length === 0){
    return 0;
}

var hasilKurang = [];
var temp = 0 ;
for(var  x in indexDariX){
    if(indexDariX[x]> indexDariO){
        temp = indexDariX[x] - indexDariO
        hasilKurang.push(temp)
        temp = 0;
    } 
    else{
        temp = indexDariO - indexDariX[x]
        hasilKurang.push(temp)
        temp =0;
    }
}

var hasil = hasilKurang.sort()[0]


return hasil



// 1 2 3 4 5 6 == x = 4 o = 1 x = 5
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2