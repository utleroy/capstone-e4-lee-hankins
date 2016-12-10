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

	var getScores = function(singlePlayer) {
		return $q((resolve,reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/scores.json?orderBy="playerId"&equalTo="${singlePlayer}"`
				)
			.success(function(response){
                let singlePlayerScore = [];
                Object.keys(response).forEach(function(key){
                    response[key].id = key;
                    singlePlayerScore.push(response[key]);
                });
                console.log("singlePlayerScore", singlePlayerScore);
                resolve(singlePlayerScore);
            })
            .error(function(errorResponse){
                reject(errorResponse);
            });
		});
	};

    var postScore = function(score){
    	console.log("score", score);
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/scores.json`, 
				JSON.stringify({
					postedScore: score.postedScore,
					playerId: score.playerId
				})
				)
			.success(function(postResponse){
				resolve(postResponse);
			})
			.error(function(postError){
				reject(postError);
			});
		});
	};

	var deleteItem = function(itemId){
		console.log("itemsdjfs", itemId);
		return $q((resolve, reject)=>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/scores/${itemId}.json`)
			.success(function(deleteResponse){
				resolve(deleteResponse);
			})
			.error(function(deleteError){
				reject(deleteError);
			});
		});
	};


    return {getPlays:getPlays, getQuiz:getQuiz, postScore:postScore, getScores:getScores, deleteItem:deleteItem};
});
