function getTaxIncrease (foods, category) {
  // Write your code here, and
  // return your final answer.
var sum = 0
  return foods.filter(function(eats){
      return eats.category === category}).map(function(eats){
         var things = eats.centsPerUnit * .15;
          eats.centsPerUnit += things
         return things
      }).reduce(function(sum, diff){
          return sum += diff
      })
}