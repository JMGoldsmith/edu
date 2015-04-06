function onlyUnique (str) {
 var uniq = []
 var only_multiples = []
 var found = false
 for (i = 0; i < str.length; i++) {
   found = false
   for (j = 0; j < uniq.length; j++) {
     if(uniq[j] === str[i]) {
       found = true
       only_multiples.push(str[i])
     }
   }
   if( found === false) {
     uniq.push(str[i])
   }
 }
 var only_once = uniq.filter(function(char) {
   for (j = 0; j < only_multiples.length; j++) {
       if (char === only_multiples[j])
         return false
   }
   return true
 });
 return only_once.toString().replace(/,/g, "")
}