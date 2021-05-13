"use strict"

let name = 'John';
let admin = name;
console.log("Admin "+admin);
console.log();

let login = "Admin";;
let password = "The Master";
console.log("Enter login :");
if(login == "Admin"){
	console.log(login);
	console.log("Enter password: ");
	if(password == "The Master"){
		console.log(password);
		console.log("Welcome");
	}else if(password == "Other"){
		console.log("wrong password");
	}else{
		console.log("Canceled");
	}
}else if(login == "Other"){
	console.log("I don't know you");
}else{
	console.log("Canceled");
}