"use strict";

app.controller('UserCtrl', function($scope, $rootScope, PlaybookFactory){
	console.log("helloeoeoeoeoeoe");

	$scope.users = [];

	let getAllUsers = function(){
		console.log("sdhfjasd", $scope.users);
		PlaybookFactory.getUser($rootScope.user.uid).then(function(fbUser) {
			console.log(fbUser);
			$scope.users = fbUser;
		});
	};
	getAllUsers();
});