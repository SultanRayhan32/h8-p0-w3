function hitungJumlahKata(kalimat) {
    var temp = []
    var temp2 = [];
    // var kataAkhir = kalimat[kalimat.length -1]
    for(var x = 0; x < kalimat.length; x++){
        if(kalimat[x] !== ' '  ){
            temp.push(kalimat[x])
            // console.log(kata)
        } // untuk kalimat
        else if(kalimat[x] == ' ' ){
            temp2.push(temp)
            // console.log(temp)
            temp = [];
        }// untuk spasi
        
        if(x === kalimat.length -1 ){
            temp.push(kalimat[x])
            temp2.push(temp)
            temp = []
        } // untuk kalimat terakhir
        
        
    }
    return temp2.length;
  }


  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  

