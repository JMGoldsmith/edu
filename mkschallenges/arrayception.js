function arrayception(array){
   
 function recurse(array, level){
     var result = 0;
     for(var i=0; i<array.length; i++){
         if(array[i].constructor === Array) {
             console.log('first '+level)
             n = recurse(array[i], level+1)
             console.log("second " +level)
             if(n>result){
                 result = n;
                 console.log(level)
             }
         }
         else if(array[i] > -1){
             console.log(level);
             if(level > result){
                 result = level;
             }
         } else {
             console.log("contains nothing")
         }
        
   }
    return result;
 }

 return recurse(array,(1))

}