var reverseArray = function (array) {
    var new_array =[];
    for (var i=array.length-1 ; i > -1 ; i-- ){
        new_array.push(array[i]);
    }
    return new_array;
};


console.log(reverseArray(["A", "B", "C"]));