function angkaPalindrome(num) {
    var kondisi = false;
    while(kondisi === false){ // looping berhenti jika kondisi berubah menjadi true
        var num2 = '';
        var numTemp = num.toString()
        for(var x = numTemp.length -1; x >=0; x--){
            num2 += numTemp[x]
        }
        if(num == num2){
            kondisi = true; 
            num++;
            if(num2.length === 1){
                return num;
            } // untuk angka di bawah 10
            return num2; // untuk angka diatas 10
        }
        else{
            num++;
        }
    }
    
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
  

