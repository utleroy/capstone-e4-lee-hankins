"use strict";

app.factory("PlaybookFactory", function($q, $http){
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
    return {getPlays:getPlays};
});
