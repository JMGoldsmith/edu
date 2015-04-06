function longestImprovement (numbers) {
 // Write your code here, and
 // return your final answer.
 var count = 1
 var answer = 1
 for (var x = 1; x < numbers.length; x++){
   numbers[x] > numbers[x-1] ? count++ : count = 1
   if (count > answer) {answer = count}
 }
 return answer
}