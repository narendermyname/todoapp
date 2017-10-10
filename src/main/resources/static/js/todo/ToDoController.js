(function() {

	let todoApp = angular.module("todo");

	let ToDoController = function($scope, ToDoService) {
		$scope.todos = [];
		$scope.title = "";
		$scope.error = "";
		$scope.selected = false;
		$scope.todoTask = [ 'Completed', 'Pending' ]

		let onComplete = function(data) {
			$scope.todos = data.data._embedded.toDos;
		}

		let onError = function(reason) {
			$scope.error = "could not fetch data from server." + reason
		}

		$scope.loadAllTodo = function() {
			ToDoService.findAll().then(onComplete, onError);
		}

		$scope.loadAllTodo();

		$scope.add = function(event) {
			if ($scope.title != "" && event.which === 13) {
				let todo = {
					"title" : $scope.title,
					"completed" : false
				};
				ToDoService.add(todo).then(function(data) {
					$scope.todos.push(data.data);
					$scope.title = "";
				}, onError);
			}
		}

		$scope.update = function(todo) {

			ToDoService.update(todo).then(function(data) {
				var oldList = $scope.todos;
				$scope.todos = [];
				angular.forEach(oldList, function(x) {
					if (x.id != data.id)
						$scope.todos.push(x);
					else
						$scope.todos.push(data.data);
				});
			}, onError);
		}

		$scope.remove = function(todo) {
			console.debug(todo);
			ToDoService.remove(todo.id).then(function(data) {
				var oldList = $scope.todos;
				$scope.todos = [];
				angular.forEach(oldList, function(x) {
					if (x.id != todo.id)
						$scope.todos.push(x);
				});
			}, onError)
		}

		$scope.doneEditing = function(todo) {
			todo.editing = false;
		}

		$scope.edit = function(todo) {
			todo.editing = true;
		}

		$scope.deleteAll = function() {
			angular.forEach($scope.todos, function(x) {
				$scope.remove(x);
			});
		}

		$scope.completeAll = function() {
			var oldList = $scope.todos;
			angular.forEach(oldList, function(x) {
				x.completed = true;
				$scope.update(x);
			});
		}

		$scope.getClass = function(todo) {
			if (todo.completed) {
				return "btn btn-success";
			} else
				return "btn-warning"
		}

		$scope.hideError = function() {
			$scope.error = "";
		}
		
		$scope.filter = function() {
			//console.log($scope.selected);
			ToDoService.findByStatus($scope.selected).then(onComplete, onError);
		}
	}
	todoApp.controller("ToDoController", [ '$scope', 'ToDoService',
			ToDoController ]);
})();