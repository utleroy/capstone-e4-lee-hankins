"use strict";

app.controller('ScoresCtrl', function($scope, $location, $routeParams, $rootScope, PlaybookFactory, AuthFactory){
	console.log("ScoresCtrl");
	//get scores from firebase.
	//populate dom with FB data.

	$scope.singlePlayerScores = [];

	let getSingleScore = function(){
		PlaybookFactory.getScores($rootScope.user.uid).then(function(fbItems) {
			console.log(fbItems);
			$scope.singlePlayerScores = fbItems;
		});
	};

	getSingleScore();
});
