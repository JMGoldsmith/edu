var range = function(start,end){
	var range_array = [];
	
	for (var i = start; i<=end; i++){
		range_array.push(i);
	}
	return range_array;
	
};
var sum = function(range_array){
	var sums = 0;
	for (var i = 0; i<range_array.length; i++){
		sums += range_array[i];
	}
	return sums;
};