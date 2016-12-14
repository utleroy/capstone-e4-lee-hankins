"use strict";

app.controller("PlaybookCtrl", function($scope, $rootScope, $location, PlaybookFactory){
	
  $scope.welcome = "hello";     // this is like a console log AKA it tests it
  $scope.quiz = [];    //we put this info (data for people/to do items/etc) in FB database
  $scope.showme = "qb";

  $scope.BoardContainer = true;
  $scope.SelectedBoard = false;
  

});