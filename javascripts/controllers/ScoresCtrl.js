"use strict";

app.controller('ScoresCtrl', function($scope, $location, $routeParams, $rootScope, PlaybookFactory, AuthFactory){
	console.log("ScoresCtrl");
	//get scores from firebase.
	//populate dom with FB data.

	$scope.singlePlayerScores = [];
	$scope.newTime = [];

	let getSingleScore = function(){
		PlaybookFactory.getScores($rootScope.user.uid).then(function(fbItems) {
			console.log("getSingleScore: ", fbItems);
			$scope.today = new Date();
			$scope.newTime = $scope.today;
			$scope.singlePlayerScores = fbItems;
		});
	};

	getSingleScore();

	$scope.deleteItem = function(itemId){

		console.log("clicked", itemId);
		PlaybookFactory.deleteItem(itemId).then(function(response){
			getSingleScore();
		});
	};

	// let newTime = function (new_time){
	// 	PlaybookFactory.getTimeStamp(new_time).then(function(){
	// 		console.log("newer time", new_time);
	// 	});
	// }
	
// $scope.getTimeStamp = function(time) {
// 	var now = new Date();
// 	console.log("new date", now);
// 	return ((now.getMonth() + 1) + '/' +
// 		(now.getDate()) + '/' +
// 		now.getFullYear() + " " +
// 		now.getHours() + ':' +
// 		((now.getMinutes() < 10)
// 			? ("0" + now.getMinutes())
// 			: (now.getMinutes())) + ':' +
// 		((now.getSeconds() < 10)
// 			? ("0" + now.getSeconds())
// 			: (now.getSeconds())));
// }
// console.log($scope.getTimeStamp());

});
