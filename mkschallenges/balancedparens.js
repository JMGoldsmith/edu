function isBalanced (string) {
  var count = 0;
  for(i=0; i<string.length; i++){
    if(string[i] === '('){
      count +=1;
    }
    else if(string[i] === ')'){
      count --;
      if (count < 0) {
        return false;
      }
    }
    }
   return (count === 0)
}