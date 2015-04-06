function binaryToDecimal (n) {
  var digit = parseInt(n,2)
  return digit
}

function binaryToDecimal (n) {
    var result = 0;
    
    var number = 0;
    number = n.split('').reverse();
    for(var i=0; i<number.length; i++){
        if(parseInt(number[i])===1){
        result += Math.pow(2, i);
        console.log(Math.pow(2, i))
            
        }
    }
    return result
}