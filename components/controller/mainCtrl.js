app.controller('mainCtrl', function($scope, $http, readJson){


	// Calling from readJson service
	readJson.readJsonfun().then(function(data){
		$scope.restaurants = data.data;
	});

	$scope.letterLimit =  31;

});