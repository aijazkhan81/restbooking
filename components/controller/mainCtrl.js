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

	$scope.hello = function(){
		alert('abc');
	}

	// Form show and hide 
	$scope.formDisplay = true;
	$scope.focusyes = true;

	$scope.showHidePanel = function(){
		$scope.formDisplay = !$scope.formDisplay;		
	}


	$scope.submitListing = function(rest){
		if(rest){
			firstFunction();
			$scope.rest.id = $scope.abc;
			if($scope.rest.image == "" || $scope.rest.image == null){
				$scope.rest.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/800px-No_image_3x4.svg.png";
			}
			$scope.restaurants.unshift(rest);
			$scope.rest = {};
			$scope.showHidePanel();
		}
	}

	// Function for getting the ID for new classified

	var newId = "";
	var modifiedId1;
	$scope.abc;

	function findId(){
		return readJson.readJsonfun().then(function(data) {
			newId  = data.length + 1;
			return $q.when(newId);
		});
	}

	findId().then(function(id){
		firstFunction(newId); 
	});

	function firstFunction(id){
		$scope.abc = newId;
	}

	

	console.log(modifiedId1 + ' final');
	
});