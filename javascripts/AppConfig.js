"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=>{
	if(AuthFactory.isAuthenticated()){
		resolve();
	}else{
		reject();
	}
});



app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
	firebase.initializeApp(FIREBASE_CONFIG);

	$rootScope.$on("$routeChangeStart", function(event, currRoute, prevRoute){
		let logged = AuthFactory.isAuthenticated();
		let appTo;


		if(currRoute.originalPath){
			appTo = currRoute.originalPath.indexOf("/auth") !== -1;

		}

		if(!appTo && !logged){
			event.preventDefault();
			$location.path("/auth");
		}
	});
});

app.config(function($routeProvider){
	$routeProvider
	.when("/auth", {
		templateUrl: "partials/auth.html",
		controller: "AuthCtrl"
	})
	.when("/playbook", {
		templateUrl: "partials/playbook.html",
		controller: "PlaybookCtrl",
		resolve: {isAuth}
	})
	.when("/logout", {
		templateUrl: "partials/auth.html",
		controller: "AuthCtrl",
		resolve: {isAuth}
	})
	.when("/quiz", {
		templateUrl: "partials/quiz.html",
		controller: "QuizCtrl",
		resolve: {isAuth}
	})
	.when("/roster", {
		templateUrl: "partials/roster.html",
		controller: "RosterCtrl",
		resolve: {isAuth}
	})
	.when("/scores", {
		templateUrl: "partials/scores.html",
		controller: "ScoresCtrl",
		resolve: {isAuth}
	})
	.when("/edit-user", {
		templateUrl: "partials/edit-user.html",
		controller: "UserCtrl",
		resolve: {isAuth}
	})
	.otherwise("/auth");
});