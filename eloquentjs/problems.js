
//problem 2.1
var num = '#';
for (var i=0; i<7; i++){
	console.log(num);
	num = num + '#';
}

//problem 2.2
for (var i = 1; i < 101; i++){
	if ( (i % 5 === 0) && (i % 3 === 0)){
		console.log('fizzbuzz');
	}
	else if ( i % 5 === 0){
		console.log('buzz');
	}
	else if (i % 3 === 0){
		console.log('fizz');
	}
	else{
		console.log(i);
	}
}

//problem 3.1
var min = function(first,second){
	if(first < second){
		return first;
	}
	else {
		return second;
	}
};

//problem 3.2
var isEven = function (num) {
	if (num % 2 === 0){
		return true;
	}
	else if ( num % 2 < 0){
		var pos = num * -1;
		return isEven(pos);
	}
	else {
		return false;
	}
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
