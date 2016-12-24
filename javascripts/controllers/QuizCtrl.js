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

  };

  let getPlayer = function(){
  	console.log($rootScope.user);
    PlaybookFactory.getQuiz($rootScope.user.uid).then(function(quiz){ //what is here needs to be right below this
    	$scope.quiz = quiz;
    	console.log("quiz");
    });
};
getPlayer();

let userScore = 0;

$scope.answersQB = function () {
		// $location.url("/scores"); this was too early moved to line85
		console.log("jksdhfks:");
		let obtainAnswerQB_Q1 = $('#QB_question1 input:radio:checked').val();
		console.log("QB answer question 1", obtainAnswerQB_Q1);

		if(obtainAnswerQB_Q1 === "A"){
			$location.url("/correct");
			userScore ++;
			let actualScore = (userScore / 1) * 100;
			let userScoreTime = new Date();
			console.log("actualScore", actualScore);
			let postUserScore = {
				postedScore: actualScore,
				playerId: $scope.loggedInUser.uid,
			};
			console.log("posted user score", postUserScore);
			PlaybookFactory.postScore(postUserScore).then(function(){
			});
		}else{
			$location.url("/wrong");

			let actualScore = (userScore / 1) * 100;
			console.log("actualScore", actualScore);
			let postUserScore = {
				postedScore: actualScore,
				playerId: $scope.loggedInUser.uid,
				scoreTime: userScoreTime
			};
			console.log("posted user score", postUserScore);
			PlaybookFactory.postScore(postUserScore).then(function(){
			});
		}



	};



	$scope.answersRB = function () {

		let obtainAnswerRB = $('#RB_question1 input:radio:checked').val();
		console.log("RB answer", obtainAnswerRB);
		if(obtainAnswerRB === "B"){

			$location.url("/correct");
			userScore ++;

		// Do math to calculate score into a percentage
		let actualScore = (userScore / 1) * 100;
		console.log("actualScore", actualScore);
		let postUserScore = {
			postedScore: actualScore,
			playerId: $scope.loggedInUser.uid,
			scoreTime: userScoreTime
		};
		console.log("posted user score", postUserScore);
		PlaybookFactory.postScore(postUserScore).then(function(){
		});
		
	}else{

		$location.url("/wrong");

		let actualScore = (userScore / 1) * 100;
		console.log("actualScore", actualScore);
		let postUserScore = {
			postedScore: actualScore,
			playerId: $scope.loggedInUser.uid,
			scoreTime: userScoreTime
		};
		console.log("posted user score", postUserScore);
		PlaybookFactory.postScore(postUserScore).then(function(){
		});

	}
};

$scope.answersTE = function (player) {
	let obtainAnswerTE = $('#TE_question1 input:radio:checked').val();
	console.log("TE answer", obtainAnswerTE);
	if(obtainAnswerTE === "B"){
		
		$location.url("/correct");
		userScore ++;

		// Do math to calculate score into a percentage
		let actualScore = (userScore / 1) * 100;
		console.log("actualScore", actualScore);
		let postUserScore = {
			postedScore: actualScore,
			playerId: $scope.loggedInUser.uid,
			scoreTime: userScoreTime
		};
		console.log("posted user score", postUserScore);
		PlaybookFactory.postScore(postUserScore).then(function(){
		});
		
	}else{
		
		$location.url("/wrong");

		let actualScore = (userScore / 1) * 100;
		console.log("actualScore", actualScore);
		let postUserScore = {
			postedScore: actualScore,
			playerId: $scope.loggedInUser.uid,
			scoreTime: userScoreTime

		};
		console.log("posted user score", postUserScore);
		PlaybookFactory.postScore(postUserScore).then(function(){
		});
	}
};

$scope.answersWR = function () {
	let obtainAnswerWR = $('#WR_question1 input:radio:checked').val();
	console.log("WR answer", obtainAnswerWR);
	if(obtainAnswerWR === "B"){
		$location.url("/correct");
		userScore ++;

		// Do math to calculate score into a percentage
		let actualScore = (userScore / 1) * 100;
		console.log("actualScore", actualScore);
		let postUserScore = {
			postedScore: actualScore,
			playerId: $scope.loggedInUser.uid,
			scoreTime: userScoreTime

		};
		console.log("posted user score", postUserScore);
		PlaybookFactory.postScore(postUserScore).then(function(){
		});

	}else{
		
		$location.url("/wrong");

		let actualScore = (userScore / 1) * 100;
		console.log("actualScore", actualScore);
		let postUserScore = {
			postedScore: actualScore,
			playerId: $scope.loggedInUser.uid,
			scoreTime: userScoreTime

		};
		console.log("posted user score", postUserScore);
		PlaybookFactory.postScore(postUserScore).then(function(){
		});
	}
};
});
