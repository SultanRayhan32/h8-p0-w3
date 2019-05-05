function groupAnimals(animals) {
    
    var tampungHuruf = []
    var tampungHuruf2 = [];
    
    for(var x = 0; x < animals.length; x++){
        tampungHuruf.push([animals[x]])
    } 
    for(var x = 0; x < tampungHuruf.length; x++){
        for(var i = x + 1; i < tampungHuruf.length; i++){
            if(tampungHuruf[x][0][0] === tampungHuruf[i][0][0]){
                tampungHuruf[x].push(tampungHuruf[i][0])
                tampungHuruf[i][0] = ''
            }
        }
    } 
    for(var x = 0; x < tampungHuruf.length;x++){
        if(tampungHuruf[x][0] !== ''){
            tampungHuruf2.push(tampungHuruf[x])
        }
    } 
    var temp = ''
    for(var x = 0; x < tampungHuruf2.length; x++){
        for(var i = x + 1 ; i < tampungHuruf2.length; i++){
            if(tampungHuruf2[x][0] > tampungHuruf2[i][0]){
                temp = tampungHuruf2[x]
                tampungHuruf2[x] = tampungHuruf2[i]
                tampungHuruf2[i] = temp
            }
        }
    }

    return tampungHuruf2

}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'   ]));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


