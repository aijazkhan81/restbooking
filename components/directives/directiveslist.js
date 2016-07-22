app.directive('searchArea', function(){
	return {
		name: 'searchArea',
		restrict: 'E', 
		templateUrl: 'templates/searcharea.html'
	};
});

app.directive('displayListings', function(){
	return {
		name: 'displayListings',
		restrict: 'E', 
		templateUrl: 'templates/displaylistings.html'
	};
});


app.directive('copyrightInfo', function(){
	return {
		name: 'copyrightInfo',
		restrict: 'E', 
		templateUrl: 'templates/copyrightinfo.html'
	};
});