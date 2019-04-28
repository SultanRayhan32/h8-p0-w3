function mengelompokkanAngka(arr) {
    var arrTemp = [[],[],[]] ;
    for(var x in arr){
        if(arr[x] % 3 === 0){
            arrTemp[2].push(arr[x])
        }
        else if(arr[x] % 2 === 0){
            
            arrTemp[0].push(arr[x])
        }
        else if(arr[x] % 2 === 1){
            arrTemp[1].push(arr[x])
        }
        
    }
    return arrTemp;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

//   Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. 
    // Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

//     kelompok pertama (baris pertama) merupakan angka-angka genap
//     kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
//     kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

// Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]

// var temp = [[],[],[]]

// var u = 12;
// var y = 15;

// temp[0].push(u)
// temp[1].push(u,y)
// console.log(temp)