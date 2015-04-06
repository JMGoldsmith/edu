function nestedWordCount (wordList) {
  var count_array = []
for (var i= 0; i<wordList.length; i++){
  count_array[i]= 0
    for (var j=0; j<wordList.length; j++){
        if(wordList[i].indexOf(wordList[j]) > -1){
          count_array[i] += 1
            }
            
        }
        
    }
  var result = count_array.indexOf(Math.max.apply(Math, count_array));
  return wordList[result]
}