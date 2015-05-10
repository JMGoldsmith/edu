function alphaCount (alphabet, text) {
 var arr = [];
 var letters = [];
 var nums = [];
 var prev;
 answer = "";
    for (var x = 0; x< alphabet.length; x++){
        for (y = 0; y < text.length; y++){
            if (alphabet[x].toLowerCase() === text[y].toLowerCase()){
                arr.push(alphabet[x]);
            }
        }
    }
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            letters.push(arr[i]);
            nums.push(1);
        } else {
            nums[nums.length-1]++;
        }
        prev = arr[i];
    }
    for(var j = 0; j< letters.length; j++){
            answer += letters[j] + ":" + nums[j] + ",";
    }
    if (answer === ''){
        console.log("No matches found");
    }
    else {
    return answer.slice(0,-1);
    }
}
// alphaCount("a1Bc","aabbcc11dd");
// alphaCount("x","Racer X is my friend :)");
// alphaCount("123","o hai");
alphaCount("i8gec","uoeu8382aeouhi488ap283.8");
