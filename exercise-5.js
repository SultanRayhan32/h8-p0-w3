function palindrome(kata) {
    var kata2 = '';
    for(var x = kata.length -1; x >=0; x--){
        kata2 += kata[x]
    }
    if(kata2 === kata){
        return true
    }
    else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  

