function zipSum (xs, ys) {
  // Write your code here, and
  // return your final answer.
  var sumOf = [];
  if (xs.length > ys.length){
    for(var i = 0; i < ys.length;i++){
      var sums = xs[i]+ys[i];
      sumOf.push(sums);
   }
  }
  else {
     for(var j = 0; j < xs.length;j++){
      var sums2 = ys[j]+xs[j];
      sumOf.push(sums2);
    } 
   }
   return sumOf
}