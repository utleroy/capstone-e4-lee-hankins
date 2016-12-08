"use strict";


app.controller("QuizCtrl", function($scope, $rootScope, $location, PlaybookFactory, AuthFactory){
	$scope.loggedInUser = AuthFactory.getUser();
  $scope.quiz = [];    //we put this info (data for people/to do items/etc) in FB database
  $scope.showme = "qb";

  $scope.BoardContainer = true;
  $scope.SelectedBoard = false;

  $scope.QB_quiz = false;
  $scope.RB_quiz = false;
  $scope.TE_quiz = false;
  $scope.WR_quiz = false;

  $scope.position = function (player) {
  	console.log("player selected: ", player);
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
  	// userAnswers = ['A','B','B']
  	// $ userAnswers = {
  	// 	question1: 'A',
  	// 	question2: 'B',
  	// }



  	// actualAnswers = ['A','C','B']

  };

  let getPlayer = function(){
    PlaybookFactory.getQuiz($rootScope.user.uid).then(function(quiz){ //what is here needs to be right below this
    	$scope.quiz = quiz;
    	console.log("quiz");
    });
	};
	getPlayer();

	$scope.answersQB = function () {
		let obtainAnswerQB = $('#QB_question1 input:radio:checked').val();
		console.log("QB answer", obtainAnswerQB);
		if(obtainAnswerQB === "A"){
			console.log("correct!");
		}else{
			console.log("Wrong Dumbass!!");
		}
	};

	$scope.answersRB = function () {
		let obtainAnswerRB = $('#RB_question1 input:radio:checked').val();
		console.log("RB answer", obtainAnswerRB);
		if(obtainAnswerRB === "B"){
			console.log("correct!");
		}else{
			console.log("Wrong Dumbass!!");
		}
	};

	$scope.answersTE = function (player) {
		let obtainAnswerTE = $('#TE_question1 input:radio:checked').val();
		console.log("TE answer", obtainAnswerTE);
		if(obtainAnswerTE === "B"){
			console.log("correct!", $scope.loggedInUser.email);
		}else{
			console.log("Wrong Dumbass!!");
		}
	};

	$scope.answersWR = function () {
		let obtainAnswerWR = $('#WR_question1 input:radio:checked').val();
		console.log("WR answer", obtainAnswerWR);
		if(obtainAnswerWR === "B"){
			console.log("correct!");
		}else{
			console.log("Wrong Dumbass!!");
		}
	};
});
