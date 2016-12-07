"use strict";

app.factory("PlaybookFactory", function($q, $http, FIREBASE_CONFIG){
	var getPlays = function(){
        return $q((resolve, reject)=>{
            $http.get("img/play1.png")
            .success(function(response){
                let plays = [];
                Object.keys(response).forEach(function(key){
                    response[key].id = key;
                    plays.push(response[key]);
                });
                console.log("plays", plays);
                resolve(plays);
            })
            .error(function(errorResponse){
                reject(errorResponse);
            });
        });
    };

    var getQuiz = function(userId){
        return $q((resolve, reject)=>{
            $http.get(`${FIREBASE_CONFIG.databaseURL}/players.json?orderBy="uid"&equalTo="${userId}"`)
            .success(function(response){
                let players = [];
                Object.keys(response).forEach(function(key){
                    response[key].id = key;
                    players.push(response[key]);
                });
                console.log("players", players);
                resolve(players);
            })
            .error(function(errorResponse){
                reject(errorResponse);
            });
        });
    };
    return {getPlays:getPlays, getQuiz:getQuiz};
});
