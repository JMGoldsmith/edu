function reconstruct (changes) {
  var result = []
  var flattened_array = []
  flattened_array = flattened_array.concat.apply(flattened_array,changes)
  var splice = Array.prototype.splice
  
   
  for(var i = 0; i< flattened_array.length; i++){
      
      if(flattened_array[i].type === "add"){
        var additions = flattened_array[i].text.trim().split('\n')
        splice.apply(result, [flattened_array[i].line,0].concat(additions))
          
      } {
         result.splice(flattened_array[i].line, flattened_array[i].count)
      } 
  }
  
   
   

   return result.join('\n') + "\n"
}