function  balikString(arr){
    var temp = ''
    for(var x = arr[0].length -1; x >=0; x--){
        temp+= arr[0][x]
    }
    return temp
}

console.log(balikString(['hello world']))
