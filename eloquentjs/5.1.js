function flatten(arr){
    var stuff = []
    arr = arr.concat.apply(stuff, arr)
    console.log(arr)
}
var arrays = [[1, 2, 3], [4, 5], [6]];
flatten(arrays)