function iterativeFib (n) {
  // Write your code here, and
  // return your final answer.
  var a = 0, b = 1, t;
  for(var i = n;i > 0;i--){
      t = a;
      a = b;
      b+=t;
  }
  return a
}


// iterativeFib(1)
// iterativeFib(2)
// iterativeFib(3)
// iterativeFib(7)
iterativeFib(57)
