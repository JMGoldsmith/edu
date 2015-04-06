function middle (numbers) {
  // Write your code here, and
  // return your final answer.
  //if odd, return middle, if even return two middle and avg.
  if(numbers.length % 2 === 0){
    var mid = parseInt(numbers.length / 2);
    var avg = (numbers[mid] + numbers[mid-1])/2;
    return avg
  }
  else{
    var mid2 = parseInt(numbers.length / 2);
    return numbers[mid2]
  }
}