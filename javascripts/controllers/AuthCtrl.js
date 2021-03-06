"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $location, AuthFactory, UserFactory){
	$scope.loginContainer = true;
	$scope.registerContainer = false;
	$scope.login = {
    email: "l@l.com",
    password:"111111"
  };
	

	if($location.path() === "/logout"){
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url("/auth");
	}

	let logMeIn = function(loginStuff){
		AuthFactory.authenticate(loginStuff).then(function(didLogin){
			console.log("login working", didLogin);
			return UserFactory.getUser(didLogin.uid);
		}).then(function(userCreds){
			console.log("login User", userCreds);
			$rootScope.user = userCreds;
			$scope.login = {};
			$scope.register = {};
			$location.url("/instructions");
		});
	};
	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
		$scope.registerContainer = false;
	};

	$scope.setRegisterContainer = function(){
		console.log("working");
		$scope.loginContainer = false;
		$scope.registerContainer = true;
	};

	$scope.registerUser = function(registerNewUser){
		console.log("1", registerNewUser);
		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
			registerNewUser.uid = didRegister.uid;
			console.log("user user", didRegister);
			return UserFactory.addUser(registerNewUser);
		}).then(function(registerComplete){
			logMeIn(registerNewUser);
		});
	};

	$scope.loginUser = function(loginNewUser) {
		logMeIn($scope.login);
	};


});