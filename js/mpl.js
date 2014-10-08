/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 1
   Review Assignment

   Function List:
   randomInteger()
      Used to reverse the order of characters in a text string
*/

function randomInteger(size) {
   return Math.floor((size+1)*Math.random());
}

var numbers = [randomInteger(9),randomInteger(9),randomInteger(9),randomInteger(9),randomInteger(9)]; // 

for(var i = 0; i < 5; i++){    

	var img = document.createElement("img");
	var display = document.getElementById('images');

	img.src = "../images/"+numbers[i]+".jpg";
	display.appendChild(img);

}

function validate(){
	var captcha = document.getElementById("captcha");

	if(captcha.value === numbers.join("")){
		return true;
	}else{
		alert("Invalid Captcha Code. Please try again or refresh to get a new code.");
		return false;
	}
}
