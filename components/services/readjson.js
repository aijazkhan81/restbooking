app.factory('readJson', function($http, $q){
	function readJsonfun(){
		var deffered = $q.defer()
		$http.get('components/controller/details.json').then(function(data){
			var _data = data.data;
			deffered.resolve(_data)
		});
		return deffered.promise
	}

	return{
		readJsonfun: readJsonfun
	};
});