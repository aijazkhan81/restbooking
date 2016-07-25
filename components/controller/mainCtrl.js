app.controller('mainCtrl', function($scope, $http, readJson,$routeParams){


	// Calling from readJson service
	function fetchData (){
		readJson.readJsonfun().then(function(data) {
			$scope.restaurants = data;
			$scope.restId = $routeParams.num - 1;
		})
	}
	fetchData();

	$scope.letterLimit =  31;
	$scope.onlySix = 6;
	$scope.hideLoadMore = false;
	var listingLength;
	$scope.some ="";

	// This is an onclick function
	$scope.loadMore = function(){
		$scope.onlySix = $scope.onlySix + 6;
		fetchData();
	}

	function checkLoadMore(){
		if($scope.some.length <= $scope.onlySix){
			$scope.hideLoadMore = true;
		}
		else{
			$scope.hideLoadMore = false;
		}
	}

	// This invokes when a new search term is applied
	$scope.iterate = function(){
		fetchData();
		checkLoadMore();
	}

	$scope.optionsIterate = function(){
		checkLoadMore();
	}

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
});