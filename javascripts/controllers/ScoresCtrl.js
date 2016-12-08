"use strict";

app.controller('ScoresCtrl', function($scope, $location, PlaybookFactory){
	console.log("ScoresCtrl");
	$scope.actualScore = {};

	$scope.addScore = function(){
		$scope.actualScore.playerId = $rootScope.user.playerId;
		PlaybookFactory.postUserScore($scope.actualScore).then(function(scoreId){
			$location.url("/scores");
			$scope.actualScore = {};
			
		});
	};
});