"use strict";

app.controller('ScoresCtrl', function($scope, $location, $routeParams, $rootScope, PlaybookFactory, AuthFactory){
	console.log("ScoresCtrl");
	//get scores from firebase.
	//populate dom with FB data.

	$scope.singlePlayerScores = [];

	let getSingleScore = function(){
		PlaybookFactory.getScores($rootScope.user.uid).then(function(fbItems) {
			console.log("getSingleScore: ", fbItems);
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

	$scope.time = function() {
  expect(element(by.binding("1288323623006 | date:'medium'")).getText()).
     toMatch(/Oct 2\d, 2010 \d{1,2}:\d{2}:\d{2} (AM|PM)/);
};

});
