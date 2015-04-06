function max (numbers) {
   numbers.sort(function(a,b){return b-a;});
   return numbers[0];
}

