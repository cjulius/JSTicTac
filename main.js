var turn = true

var nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
var moves = [[null, null, null], [null, null, null], [null, null, null]];
for(var i in nums)
	document.getElementById(nums[i]).onclick=clickStuff;


function clickStuff() 
{
	if(this.innerHTML=="")
	{
		if (turn)
		{
			this.innerHTML = '<img src="images/swords.jpg" />';
			for(var i in nums){
				if (this.id == nums[i])
				{
					moves[Math.floor(i / 3)][i % 3] = "x";
				}
			}

			turn = false
		}	
		else 
		{
			this.innerHTML = '<img src="images/shield.jpg" />';
			for(var i in nums){
				if (this.id == nums[i])
				{
					moves[Math.floor(i / 3)][i % 3] = "o";
				}
			}

			turn = true
		}
	}
	else
	{
		alert("Winter is Coming") 
	}


	checkWin();
}

function checkWin(){
	if (moves [0][0]=="x" && moves [1][0]=="x" && moves [2][0]=="x")
		alert("X WINS!");
	if (moves [0][0]=="x" && moves [0][1]=="x" && moves [0][2]=="x")
		alert("X WINS!");
	if (moves [1][0]=="x" && moves [1][1]=="x" && moves [1][2]=="x")
		alert("X WINS!");
	if (moves [2][0]=="x" && moves [2][1]=="x" && moves [2][2]=="x")
		alert("X WINS!");
	if (moves [0][0]=="x" && moves [1][1]=="x" && moves [2][2]=="x")
		alert("X WINS!");
	if (moves [0][2]=="x" && moves [1][1]=="x" && moves [2][0]=="x")
		alert("X WINS!");
	if (moves [2][0]=="x" && moves [1][1]=="x" && moves [0][2]=="x")
		alert("X WINS!");
	if (moves [0][1]=="x" && moves [1][1]=="x" && moves [2][1]=="x")
		alert("X WINS!");

	if (moves [0][0]=="o" && moves [1][0]=="o" && moves [2][0]=="o")
		alert("O WINS!");
	if (moves [0][0]=="0" && moves [0][1]=="o" && moves [0][2]=="o")
		alert("O WINS!");
	if (moves [1][0]=="o" && moves [1][1]=="o" && moves [1][2]=="o")
		alert("O WINS!");
	if (moves [2][0]=="o" && moves [2][1]=="o" && moves [2][2]=="o")
		alert("O WINS!");
	if (moves [0][0]=="o" && moves [1][1]=="o" && moves [2][2]=="o")
		alert("O WINS!");
	if (moves [0][2]=="o" && moves [1][1]=="o" && moves [2][0]=="o")
		alert("O WINS!");
	if (moves [2][0]=="o" && moves [1][1]=="o" && moves [0][2]=="o")
		alert("O WINS!");
	if (moves [0][1]=="o" && moves [1][1]=="o" && moves [2][1]=="o")
		alert("O WINS!");


}



