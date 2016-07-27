app.controller('mainCtrl', function($scope, $http, readJson,$routeParams, $q){


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

	// Function for hiding the loadmore button if no more listings present
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


	// Function for calculating new ID for the new listing added
	// var	newId = "";

	// function findId(){
	// 	return readJson.readJsonfun().then(function(data) {
	// 		newId = data.length + 1;
	// 		return $q.when(newId);
	// 	});
	// }
	// findId().then(function(){
	// 	console.log(newId);
	// 	var newId = newId;
	// });

	
	// console.log(newId + 'abc');

	$scope.submitListing = function(rest){
		if(rest){
			$scope.restaurants.push(rest);
			$scope.rest = {};
		}
	}

	var newId = 10;
	var modifiedId1;
	var modifiedId2;

	console.log(newId + ' before function call');


	function findId(){
		return readJson.readJsonfun().then(function(data) {
			newId = data.length + 1;
			return $q.when(newId);
		});
	}

	findId().then(function(id){
    	firstFunction(newId); 
	});

	function firstFunction(id){
		$scope.onlySix = id * 2;
	}

	firstFunction(2);

	function secondFunction(){
		return findId().then(function(id){
       //second time we need it, newId is updates
       modifiedId2 = id * 4;
       return $q.when();
   });
	}

	

	console.log(modifiedId1 + ' final');
	
});