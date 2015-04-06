function reverseInteger (n) {
  // Write your code here, and
  // return your final answer.
  x = n;
  y = 0;
  while(x>0){
    y *=10;
    y+= x%10;
    x = parseInt(x/10);
  }
  return y
}
