var jsObjects = [
{a: 1, b: 2}, 
{a: 3, b: 4}, 
{a: 5, b: 6}, 
{a: 7, b: 6}, 
{a: 8, b: 6}, 
{a: 9, b: 6}, 
{a: 7, b: 8}
];
var elems = []

jsObjects.forEach(function(obj, index) {

	var ele = jsObjects.find(function(e) {
		return obj.a == 7 && e.a == 7 
	})
	if (ele) {
		elems.push(ele)
	}
}) 
console.log(elems)

if ('a' in jsObjects[0] = '1'){
	console.log(jsObjects[0]);
	function abc(){
		return jsObjects[0];
	};
	abc();			
}
else{
	console.log('no');
}
var newList = [];
function newArray(a,num){
	for (var i = 0; i <= jsObjects.length - 1; i++) {

		if(jsObjects[i].a == num || jsObjects[i].b == num){
			console.log('yes');
			newList.push(jsObjects[i]);
			console.log(newList);
		}
	}
}
var a = 'a';
var b = 'b';
newArray(a, b,7);

jsObjects.forEach(function(a, index) {
			// console.log(a, index);

			if(a.b == 6){
				function abc(){
					return a;
				};
				abc();
				console.log('yes');
				console.log(a);
			}
		});
var jsObjects = [
{a: 1, b: 2}, 
{a: 3, b: 4}, 
{a: 5, b: 8}, 
{a: 7, b: 6}, 
{a: 8, b: 6}, 
{a: 9, b: 6}, 
{a: 7, b: 8}
];

var newList = [];
function newArray(a,num){
	for (var i = 0; i <= jsObjects.length - 1; i++) {

		if(jsObjects[i].a == num || jsObjects[i].b == num){
			console.log('yes');
			newList.push(jsObjects[i]);
			console.log(newList);
		}
	}
}
var a = $scope.something;
newArray(a,7);	