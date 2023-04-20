//javascript here

function mood() {

	let feels=["SATISFIED","AMAZING","SWEET","YUMMY","TASTEY","SPLENDID","LOVELY","EXCELLENT","SOFT", "COMFORTABLE"];
	let num=Math.floor(Math.random() * feels.length);
	let currMood = feels[num];

	let el=document.getElementById('positiveWish');
	el.innerHTML=currMood;
};

function createButtons(X) {
    const board = document.getElementById('board');

    for (let i = 1; i <= X; i++) {
        const button = document.createElement('button');
        const buttonId = i.toString().padStart(2, '0');
        
        button.id = buttonId;
        button.onclick = function() {
            change(buttonId);
        };
        
        board.appendChild(button);
    }
};

function startUp() {
	//playMusic();
	//userGreeting();
	mood();
	createButtons(1369);
};

function nextPage() {

	var pg1 = document.getElementById('pg01');
	var pg2 = document.getElementById('pg02');

	pg1.style.display="none";
	pg2.style.display="flex";

	//MUSIC

	var song= document.getElementById('theme');

	if(song.paused)
	{
		playMusic();
	}
}

function playMusic() {

	let song= document.getElementById('theme');
	let musicBtn = document.getElementById('music');
	let playPauseBtn=document.getElementById('playPause');

	if(song.paused) {
		song.play();
		musicBtn.innerHTML="♡ MUSIC: ON ♡"
		playPauseBtn.src="visual/soundOff.png"			
	}
	else {
		song.pause();
		musicBtn.innerHTML="♡ MUSIC: OFF ♡"
		playPauseBtn.src="visual/soundOn.png"
	}

};

function musicShuffle(){

	let themes=["audio/theme001.mp3","audio/theme003.mp3","audio/theme005.mp3","audio/theme006.mp3"];
	let num=Math.floor(Math.random() * themes.length);

	let song= document.getElementById('theme');
	song.src=themes[num];

	playMusic();
};

function musicRequest() {

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

var currColour="pink";
var prevColour="pink";
var bgColour="white";

function change(name) {
    var x = document.getElementById(name);
    x.style.backgroundColor = currColour;
};

function clearColour()
{
	currColour=bgColour;
	let curr=document.getElementById('currColour');
	curr.style.backgroundColor=currColour;
};

function makeBunnyActive()
{
	let acts=["visual/activeBunny.gif","visual/activeBunny2.gif","visual/activeBunny3.gif","visual/activeBunny4.gif","visual/activeBunny5.gif","visual/activeBunny6.gif"]
	let currAct=acts[Math.floor(Math.random() * acts.length)];
	
	var bunny=document.querySelector("#bunny");
	bunny.src=currAct;
};

function makeBunnySleep()
{
	var bunny=document.querySelector("#bunny");
	bunny.src="visual/lazyBunny.gif";	
};

function makeBunnyActive2()
{
	let acts=["visual/activeBunny.gif","visual/activeBunny2.gif","visual/activeBunny3.gif","visual/activeBunny4.gif","visual/activeBunny5.gif","visual/activeBunny6.gif" ]
	let currAct=acts[Math.floor(Math.random() * acts.length)];

	var bunny=document.querySelector(".bunny");
	bunny.src=currAct;
};

function makeBunnySleep2()
{
	var bunny=document.querySelector(".bunny");
	bunny.src="visual/lazyBunny.gif";	
};

function clearAllPixels(){
	var pixels=document.getElementsByTagName('button');

	for(var i=0; i<pixels.length ; i++)
	{
		pixels[i].style.backgroundColor=bgColour;

		if(bgColour=="black" || bgColour=="#000000" || bgColour=="rgba(0, 0, 0)")
		{
			pixels[i].style.borderColor="white";				
		}

		if(bgColour=="white" || bgColour=="#ffffff" || bgColour=="rgba(255, 255, 255)")
		{
			pixels[i].style.borderColor="black";				
		}				
	}
};

function fillAllPixels(){
	var pixels=document.getElementsByTagName('button');

	for(var i=0; i<pixels.length ; i++)
	{
		pixels[i].style.backgroundColor=currColour;

		if(currColour=="black" || currColour=="#000000" || currColour=="rgba(0, 0, 0)")
		{
			pixels[i].style.borderColor="white";				
		}

		if(currColour=="white" || currColour=="#ffffff" || currColour=="rgba(255, 255, 255)")
		{
			pixels[i].style.borderColor="black";				
		}
	}
};


function changeColourVar(){

	//DEFINITION OF PREV COLOUR
	prevColour=currColour;
	let prev=document.getElementById('prevColour');
	prev.style.backgroundColor=prevColour;

	//DEFINITION OF CURR COLOUR
	currColour=document.getElementById('colourPicker').value;
	let curr=document.getElementById('currColour');
	curr.style.backgroundColor=currColour;
};

function prevToCurr() {

	let prev=document.getElementById('prevColour');
	prev.style.backgroundColor=currColour;

	let curr=document.getElementById('currColour');
	curr.style.backgroundColor=prevColour;

	let hold=currColour;
	currColour=prevColour;
	prevColour=hold;
};

function setBgColour() {
	bgColour=currColour;
	let background=document.getElementById('bgColour');
	background.style.color=bgColour;
}

var grids=true;
Boolean(grids);

function setGrids() {
	let pixels=document.getElementsByTagName('button');
	let gridsBtn=document.getElementById('gridsBtn');

	if(grids) {
		gridsBtn.innerHTML="♡ GRIDS: OFF ♡";

		for(var i=0; i<pixels.length ; i++)
		{
			pixels[i].style.borderStyle = "hidden";
		}
		grids=0;
	}
	else {
		gridsBtn.innerHTML="♡ GRIDS: ON ♡";

		for(var i=0; i<pixels.length ; i++)
		{
			pixels[i].style.border = "1px solid black";

			if(bgColour=="black" || bgColour=="#000000" || bgColour=="rgba(0, 0, 0)")
			{
				pixels[i].style.border = "1px solid white";			
			}
		}
		grids=1;
	}
}


function setResolution() {

	let e = document.getElementById("resolution");
	let strUser = e.options[e.selectedIndex].value;
	let oldBoard= document.getElementById('board');

	//NEW BOARD
	let newBoard=document.createElement('div');
	newBoard.id = "board";

	//REPLACEMENT
	oldBoard.replaceWith(newBoard);
	let board= document.getElementById('board');

	if(strUser=="LOW")
	{
		board.style.gridTemplateColumns="repeat(18, auto)";
		createButtons(324);
	}
	if(strUser=="MID")
	{
		board.style.gridTemplateColumns="repeat(37, auto)";
		createButtons(1369);
	}
	if(strUser=="HIGH")
	{
		board.style.gridTemplateColumns="repeat(39, auto)";
		createButtons(1521);
	}
}

var m1=true;
Boolean(m1);

function nextMenu() {

	let menu1=document.querySelectorAll("[id='m1']");
	let menu2=document.querySelectorAll("[id='m2']");
	let nextMenu=document.getElementById('nextMenu');

	if(m1) {
		m1=0;
		nextMenu.innerHTML="♡ BACK ♡";

		//CLOSE
		for(let i=0;i<menu1.length;i++)
		{
			menu1[i].style.display="none";
		}

		//OPEN
		for(i=0;i<menu1.length;i++)
		{
			menu2[i].style.display="flex";
		}

	}
	else {
		m1=1;
		nextMenu.innerHTML="♡ NEXT ♡";
		
		//CLOSE
		for(let i=0;i<menu2.length;i++)
		{
			menu2[i].style.display="none";
		}

		//OPEN
		for( i=0;i<menu2.length;i++)
		{
			menu1[i].style.display="flex";
		}
	
	}
};


