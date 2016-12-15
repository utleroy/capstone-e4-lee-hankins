"use strict";

app.controller('RosterCtrl', function($scope, $rootScope, $location, $route, UserFactory){
	console.log("RosterCtrl");

	$scope.newMember;
	$scope.allMembers = [];

	$scope.addToRoster = function(){
		console.log($scope.newMember);
		UserFactory.postRosterMember($scope.newMember).then(function(memberId){
			$route.reload();
			console.log("addToRoster", memberId);
			
		});
	};
	UserFactory.getRoster().then(function(allMembersData){
		console.log("getRoster", allMembersData);
		$scope.allMembers = allMembersData;

	});

	$scope.deleteMember = function(email){
		UserFactory.deleteMember(email).then(function(memberGone){
			UserFactory.getRoster();
		});
	};
});