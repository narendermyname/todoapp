(function() {
	let todoApp = angular.module("todo");
	let API_URL = "api/v1/toDos"
	let ToDoService = function($http) {
		
		let findAll = function() {
			return $http.get(API_URL).then(function(response){
				return response;
			});
		}
		
		let add = function(todo) {
			return $http.post(API_URL,todo).then(function(response){
				return response;
			});
		}
		
		let update = function(todo) {
			return $http.put(API_URL+"/"+todo.id,todo).then(function(response){
				return response;
			});
		}
		
		let remove = function(id) {
			return $http.delete(API_URL+"/"+id).then(function(response){
				return response;
			});
		}
		
		let findByStatus = function(isCompleted){
			return $http.get(API_URL+"/search/findByIsCompleted?isCompleted="+isCompleted).then(function(response){
				return response;
			});
		}
		return {
			findAll : findAll,
			add : add,
			update : update,
			remove : remove,
			findByStatus : findByStatus
		}
	}

	todoApp.factory('ToDoService', [ '$http', ToDoService ]);
})();