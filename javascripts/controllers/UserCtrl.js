"use strict";

app.controller('UserCtrl', function($scope, $rootScope, PlaybookFactory, UserFactory){
	console.log("helloeoeoeoeoeoe");

	$scope.users = [];

	let getAllUsers = function(){
		console.log("sdhfjasd", $scope.users);
		UserFactory.getUser($rootScope.user.uid).then(function(fbUser) {
			console.log(fbUser);
			$scope.users = fbUser;
		});
	};
	getAllUsers();

});