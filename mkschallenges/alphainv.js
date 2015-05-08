function alphaCount (alphabet, text) {
 var arr = [];
 var object = {};
 answer = "";

    for (x = 0; x < alphabet.length; x++){
        var stuffed = {}
        stuffed[alphabet[x].toLowerCase] = 0;
        arr.push(stuffed);
    }
    //object is inserting the '8' prior to everything else. Need to re-order it. Even when pushing to an array, it plops it down front. May need
    // to re-combine it on line 25 by matching to original string order.
    console.log(arr)
    for (i = 0; i<arr.length; i++){
            var arrKeys = Object.keys(arr[i]);
            object[arrKeys] = 0;
            console.log(object)
    }

    for (y = 0; y < text.length; y++){
        if (object[text[y].toLowerCase()] !== undefined){
            object[text[y].toLowerCase()] += 1;
        }
    }
    for(var item in object){
        if (object[item] > 0){
            answer += item + ":" + object[item] + ",";
            }
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
