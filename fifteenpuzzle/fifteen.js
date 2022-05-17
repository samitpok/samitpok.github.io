/*
init = function() {
    console.log("init called");
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpeg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        
};

$(document).ready(function() {
    init();

});
*/

//reference  taken  from codepen link https://codepen.io/Dorji/pen/dxdJdy

"use strict"; //this activates strict mode 

//globally declared variables 
var gamePiece; 
var notify;
var timer;
var spaceY;
var spaceX;


$(document).ready(function() {



	//var puzzleArea = document.getElementById('puzzlearea');
	//gamePiece = puzzleArea.getElementsByTagName('div'); //retrieve element within puzzlearea

    gamePiece = $("#puzzlearea div");
    
	for (var i=0; i<gamePiece.length; i++) //applies features to each puzzle piece 
	{

		gamePiece[i].className = 'puzzlepiece'; //setting up the puzzle piece code

		gamePiece[i].style.left = (i%4*100)+'px'; //calculates the position for puzzle pieces from the left of the screen

		gamePiece[i].style.top = (parseInt(i/4)*100) + 'px'; //calculates the position for puzzle pieces from the top of the screen

		gamePiece[i].style.backgroundPosition= '-' + gamePiece[i].style.left + ' ' + '-' + gamePiece[i].style.top; 
		//calculates the position of the background picture so in moves in relation to the puzzle pieces


		gamePiece[i].onmouseover = function() //aplies features when mouse moves over puzzle pieces

		{
			if (checkMove(parseInt(this.innerHTML))) //checks whenever a move is made

			{

				this.style.border = "3px solid red"; //changes to red when a puzzle piece is near an empty space

				this.style.color = "red"; //text color changes to red when a puzzle piece is near an empty space


                this.style.backgroundImage="url('background.jpeg')"; 
                //sets the image for the puzzle's background 

			}

		};


		gamePiece[i].onmouseout = function() //activates whenever mouse moves out of puzzle piece

		{

			this.style.border = "2px solid black"; //reverts to its original size border 

			this.style.color = "#000000"; //reverts to original text color

			this.style.textDecoration = "none"; //reverts to original text state

		};



		gamePiece[i].onclick = function() //activates when mouse clicks on a puzzle piece

		{

			if (checkMove(parseInt(this.innerHTML))) //checks whether or not the puzzle piece can move into an empty space

			{
				swap(this.innerHTML-1); //moves into an empty space if true


				if (finish()) //checks when the all the 15 pieces are in its right space

				{

					win(); //alerts the player that they have won the game

				}

				return;

			}

		};

	}


	

	spaceX = '300px'; 
	spaceY = '300px';

    

	$("#shufflebutton").click(function(){ //activates whenever the shuffle button is clicked

		for (var i=0; i<300; i++) 

		{

			var rand = parseInt(Math.random()* 100) %4; //generates a random number for shuffling each piece

			if (rand == 0)

			{

				var temp = up(spaceX, spaceY); 

				if ( temp != -1)

				{

					swap(temp);

				}

			}

			if (rand == 1)

			{

				var temp = down(spaceX, spaceY);

				if ( temp != -1) 

				{

					swap(temp);

				}

			}



			if (rand == 2)

			{

				var temp = left(spaceX, spaceY);

				if ( temp != -1)

				{

					swap(temp);

				}

			}


			if (rand == 3)

			{

				var temp = right(spaceX, spaceY);

				if (temp != -1)

				{

					swap(temp);

				}

			}

		}

	});

});//ready function end



function checkMove(position) // returns true whenever a piece can be moved into an empty space

{

	if (left(spaceX, spaceY) == (position-1))

	{

		return true;

	}



	if (down(spaceX, spaceY) == (position-1))

	{

		return true;

	}



	if (up(spaceX, spaceY) == (position-1))

	{

		return true;

	}



	if (right(spaceX, spaceY) == (position-1))

	{

		return true;

	}

}


function Notify() //notifies the user 

{

	notify --; //decrements the value of 

	if (notify == 0) //if the value reaches the end then

	{

		var body = document.getElementsByTagName('body'); //retrieves body element in html

		body[0].style.backgroundImage= "none"; //reverts to original page background

		alert('Winner! ... Shuffle and Play Again'); //tells the user that they have won the game 

		var para=document.getElementsByClassName('explanation');
	    para[0].style.visibility="visible"; //reverts visiblity to its original state

		return;

	}

	else  (notify % 2) 

	{

		var body = document.getElementsByTagName('body'); 

	    body[0].style.backgroundImage= "url('background.jpeg')";
	    //sets background pic to show user that they had completed the puzzle
		
	}

    timer= setTimeout(Notify, 200); //notifies the user for 2 secs
}



function win() //notifies user that they have won

{

	var body = document.getElementsByTagName('body');

	
	body[0].style.backgroundImage= "url('background.jpeg')";

	notify = 10; //initializes notify variable

	timer= setTimeout(Notify, 200);

	var para=document.getElementsByClassName('explanation');
	para[0].style.visibility="hidden"; //hides text when user is being notified

}


function finish() //checks when the game reaches its end

{

	var flag = true;

	for (var i = 0; i < gamePiece.length; i++) //for each puzzle piece 
	{

		var top = parseInt(gamePiece[i].style.top);

		var left = parseInt(gamePiece[i].style.left);


		if (left != (i%4*100) || top != parseInt(i/4)*100) //checks if each piece matches its left and top position

		{

			flag = false;

			break;

		}

	}

	return flag;

}



function left(x, y) //calculates how far to the left a puzzlepiece should position

{

	var cordX = parseInt(x);

	var cordY = parseInt(y);



	if (cordX > 0)

	{

		for (var i = 0; i < gamePiece.length; i++) 

		{

			if (parseInt(gamePiece[i].style.left) + 100 == cordX && parseInt(gamePiece[i].style.top) == cordY)

			{

				return i;

			} 

		}

	}

	else 

	{

		return -1;

	}

}



function right (x, y) //calculates how far to the right a puzzlepiece should position
{

	var cordX = parseInt(x);

	var cordY = parseInt(y);

	if (cordX < 300)

	{

		for (var i =0; i<gamePiece.length; i++){

			if (parseInt(gamePiece[i].style.left) - 100 == cordX && parseInt(gamePiece[i].style.top) == cordY) 

			{

				return i;

			}

		}

	}

	else

	{

		return -1;

	} 

}



function up(x, y) //calculates how far up a puzzlepiece should position
{

	var cordX = parseInt(x);

	var cordY = parseInt(y);

	if (cordY > 0)

	{

		for (var i=0; i<gamePiece.length; i++)

		{

			if (parseInt(gamePiece[i].style.top) + 100 == cordY && parseInt(gamePiece[i].style.left) == cordX) 

			{

				return i;

			}

		} 

	}

	else 

	{

		return -1;

	}

}



function down (x, y) //calculates how far down a puzzlepiece should position

{

	var cordX = parseInt(x);

	var cordY = parseInt(y);

	if (cordY < 300)

	{

		for (var i=0; i<gamePiece.length; i++)

		{

			if (parseInt(gamePiece[i].style.top) - 100 == cordY && parseInt(gamePiece[i].style.left) == cordX) 

			{

				return i;

			}

		}

	}

	else

	{

		return -1;

	} 

}



function swap (position) //moves the puzzle piece by switching position with an empty space
{

	var temp = gamePiece[position].style.top;

	gamePiece[position].style.top = spaceY;

	spaceY = temp;

	temp = gamePiece[position].style.left;

	gamePiece[position].style.left = spaceX;

	spaceX = temp;

}

