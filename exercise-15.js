function groupAnimals(animals) {
    var temp = [];

    for(var x = 0; x < animals.length -1; x++){
        for(var y = x + 1; y < animals.length ; y++){ 
            if(animals[x][0] === animals[y][0]){
                temp.push([animals[x],animals[y]])
                animals[x] += '#';
                animals[y] += '#';
            }
        }
    }

    for(var x in animals){
        if(animals[x][animals[x].length-1] !== '#'){
            temp.push([animals[x]])
        }
    }

    temp.sort()
    return temp
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


