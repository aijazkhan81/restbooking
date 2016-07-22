app.factory('readJson', function($http){
	function readJsonfun(){
		return $http.get('components/controller/details.json')
	}

	return{
		readJsonfun: readJsonfun
	};
});