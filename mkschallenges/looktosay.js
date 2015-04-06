function lookAndSay(n){
  function translate (string) {
  var result = [];
  var count = 0;
  var length = string.length
  for(var i =0; i<length; i++){
    count ++;
    if(i===length-1){
      result.push(count.toString()+string[i])
    } else if(string[i] != string[i+1]){
        result.push(count.toString()+string[i])
        count = 0;
    }
      
    
    }
  return result.join("");
  }
function populate(n){
    var populated_array = ["1"];
    for(var i=1; i<n; i++){
        populated_array.push(translate(populated_array[i-1]))
    }
    return populated_array
  }

  var answer = populate(n);
  return answer[n-1]
}