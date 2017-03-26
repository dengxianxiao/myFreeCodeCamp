var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(a, b) {
	return a + b;
});