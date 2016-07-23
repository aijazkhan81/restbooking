app.controller('mainCtrl', function($scope, $http, readJson){


	// Calling from readJson service
	readJson.readJsonfun().then(function(data){
		$scope.restaurants = data.data;
	});

	$scope.letterLimit =  31;
	$scope.onlySix = 6;
	$scope.hideLoadMore = false;
	var listingLength;

	// This is an onclick function
	$scope.loadMore = function(){
		$scope.onlySix = $scope.onlySix + 6;

		readJson.readJsonfun().then(function(data){
			listingLength = data.data.length -1;
		});

		if($scope.onlySix >= listingLength){
			$scope.hideLoadMore = true;
		}
	}
});