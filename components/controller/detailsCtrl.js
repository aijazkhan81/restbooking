app.controller('detailsCtrl', function($scope, $http, $routeParams, readJson){
	function fetchData (){
		readJson.readJsonfun().then(function(data) {
			$scope.restaurants = data;
			$scope.restId = $routeParams.num - 1;
		})
	}
	fetchData();
	$scope.Math = window.Math;
})