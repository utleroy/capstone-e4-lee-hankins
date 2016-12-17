"use strict";

app.factory('UserFactory', function($q, $http, FIREBASE_CONFIG){

	let addUser = (authData) => {
		console.log("w", authData);
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`, 
				JSON.stringify({
					uid: authData.uid,
					username: authData.username,
					email: authData.email,
					phone: authData.phone
				})
				)
			.success(function(storeUserSuccess){
				resolve(storeUserSuccess);
			})
			.error(function(storeUserError){
				reject(storeUserError);
			});
		});
	};

	let getUser = (userId) => {
		console.log("userId",userId);
		return $q((resolve,reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/users/.json?orderBy="uid"&equalTo="${userId}"`)
			.success(function(userObject){
				let users = [];
				Object.keys(userObject).forEach(function(key){
					userObject[key].id = key;
					users.push(userObject[key]);
				});
				resolve(users[0]);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	var postRosterMember = function(member){
		console.log("member", member);
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/members.json`, 
				JSON.stringify({
					username: member.username,
					phone: member.phone,
					email: member.email,
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

	let getRoster = () => {
		return $q((resolve,reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/members/.json`)
			.success(function(userObject){
				let allMembers = [];
				Object.keys(userObject).forEach(function(key){
					allMembers.push(userObject[key]);
				});
				resolve(allMembers);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	var deleteMember = function(email){
		console.log("delete by email", email);
		return $q((resolve, reject)=>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/members/${email}.json`)
			.success(function(deleteResponse){
				resolve(deleteResponse);
			})
			.error(function(deleteError){
				reject(deleteError);
			});
		});
	};

	var editMember = function(editedUser) {
		console.log("editedUser", editedUser);
		return $q((resolve,reject)=>{
			$http.put(`${FIREBASE_CONFIG.databaseURL}/users/${editedUser.id}.json`, 
				JSON.stringify({
					username: editedUser.username,
					phone: editedUser.phone,
					email: editedUser.email,
					uid: editedUser.uid
				})
			)
			.success(function(editResponse){
				resolve(editResponse);
			})
			.error(function(editError){
				reject(editError);
			});
		});
	};

	return{addUser:addUser, getUser:getUser, postRosterMember:postRosterMember, getRoster:getRoster, deleteMember:deleteMember, editMember:editMember};

});