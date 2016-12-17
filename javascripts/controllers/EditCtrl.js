"use strict";

app.controller('EditCtrl', function($scope, $rootScope, UserFactory, AuthFactory){
	$scope.user = {};
	
	let getUsers = function(){
		UserFactory.getUser($rootScope.user.uid).then(function(fbUser) {
			console.log(fbUser);
			$scope.user = fbUser;
			console.log("sdhfjasd", $scope.user);
		});
	};
	getUsers();

	$scope.editUser = function(){
		UserFactory.editMember($scope.user).then(function(editedUser){
			console.log("editedUser", editedUser);
		});
	};
});