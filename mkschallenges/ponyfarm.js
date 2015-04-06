function getPonyAllergies (ponies, ownerEmail) {
  // Write your code here, and
  // return your final answer.
 
 var array = [];
 
 ponies.filter(function(pony) {
   return pony.email === ownerEmail }).map(function(pony) {
      pony.allergies.map(function(allergy){
        if (array.indexOf(allergy) === -1) 
          array.push(allergy)
    })
 })
 return array.sort()
}