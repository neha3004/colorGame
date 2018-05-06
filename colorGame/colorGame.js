var numSquare= 6;
var colors=generateRandomColors(numSquare);
 var h1= document.querySelector("h1");
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var reset= document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "easy") {
			numSquare=3;
		}
		else{
			numSquare=6;
		}
		resetAll();

	});
}

function resetAll(){
	colors=generateRandomColors(numSquare);
	pickedColor= pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor= colors[i];}
	h1.style.backgroundColor="steelblue";
	reset.textContent="new colors";
	messageDisplay.textContent="";
	reset.textContent="new colors";
	for (var i = 0; i < squares.length; i++) {
	 if(colors[i]){
	 	squares[i].style.display="block";
	 	squares[i].style.backgroundColor=colors[i];
	 }
	 else{
	 	squares[i].style.display="none";
	 }
	}
}


reset.addEventListener("click",function(){
	resetAll();
})

colorDisplay.textContent= pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click", function(){
			var clickedColor= this.style.backgroundColor;
			if (clickedColor !== pickedColor) {
				this.style.backgroundColor= "#232323";
				messageDisplay.textContent="try again!";
			}

			else{
				changeColors(clickedColor);
				messageDisplay.textContent="Correct!";
				h1.style.backgroundColor= clickedColor;
				reset.textContent="play again?";
			}
	});
}

function changeColors(color){
	for (var i = 0; i<colors.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}

function pickColor() {
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num;i++){
		arr[i]=randomColor();
	}
	return arr;
}

function randomColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b + ")";
}