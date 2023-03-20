alert("⚠ Please use PC or Tablet for the best experince ⚠");

var feeling=prompt("♡ Hi, How are you feeling today? ♡");

alert("♡Great to hear that you're feeling "+feeling+" ♡");


function playMusic() {

	var answer=prompt("♡ Do you like Music? Y / N ♡");

	var song= document.getElementById('theme');

	while(1)
	{
		if(answer=="Y" || answer=="y") {
			song.play();
			break;			
		}

		if(answer=="N" || answer=="n") {
			song.pause();
			break;
		}

		var answer=prompt("♡ Do you like Music? Y / N ♡");
	}
};

var colour="pink";

function change(name) {
    var x = document.getElementById(name);
    x.style.backgroundColor = colour;
};

function clearColour()
{
	colour="white";
};

function makeBunnyActive()
{
	var bunny=document.querySelector("#bunny");
	bunny.src="activeBunny.gif";
};

function makeBunnySleep()
{
	var bunny=document.querySelector("#bunny");
	bunny.src="lazyBunny.gif";	
};

function clearAllPixels(){
	var pixels=document.getElementsByTagName('button');

	for(var i=0; i<pixels.length ; i++)
	{
		pixels[i].style.backgroundColor="white";
	}
}

function fillAllPixels(){
	var pixels=document.getElementsByTagName('button');

	for(var i=0; i<pixels.length ; i++)
	{
		pixels[i].style.backgroundColor=colour;

		if(colour=="black")
		{
			pixels[i].style.borderColor="white";				
		}
	}
};

function changeColourVar(){
	colour=document.getElementById('colourPicker').value;
};