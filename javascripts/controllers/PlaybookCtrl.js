"use strict";

app.controller("PlaybookCtrl", function($scope, $rootScope, $location, PlaybookFactory){
  $scope.welcome = "hello";     // this is like a console log AKA it tests it
  $scope.quiz = [];    //we put this info (data for people/to do items/etc) in FB database
  $scope.showme = "qb";

  $scope.BoardContainer = true;
  $scope.SelectedBoard = false;

  $scope.QB_quiz = false;
  $scope.RB_quiz = false;
  $scope.TE_quiz = false;
  $scope.WR_quiz = false;

  $scope.trial = function (player) {
  	console.log("player", player);
  	if(player === "qb"){
  		$scope.QB_quiz = true;
  		$scope.RB_quiz = false;
  		$scope.TE_quiz = false;
  		$scope.WR_quiz = false;
  	}
  	if(player === "rb"){
  		$scope.RB_quiz = true;
  		$scope.QB_quiz = false;
  		$scope.TE_quiz = false;
  		$scope.WR_quiz = false;
  	}
  	if(player === "te"){
  		$scope.TE_quiz = true;
  		$scope.RB_quiz = false;
  		$scope.QB_quiz = false;
  		$scope.WR_quiz = false;
  	}
  	if(player === "wr"){
  		$scope.WR_quiz = true;
  		$scope.RB_quiz = false;
  		$scope.TE_quiz = false;
  		$scope.QB_quiz = false;
  	}
  };

  let getPlayer = function(){
    PlaybookFactory.getQuiz($rootScope.user.uid).then(function(quiz){ //what is here needs to be right below this
    	$scope.quiz = quiz;
    	console.log("quiz");
    });
};

getPlayer();
});