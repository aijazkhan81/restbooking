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

	// This invokes when a new search term is applied
	$scope.iterate = function(){
		fetchData();
		if($scope.some.length <= $scope.onlySix){
			$scope.hideLoadMore = true;
		}
		else{
			$scope.hideLoadMore = false;
		}
	}
});