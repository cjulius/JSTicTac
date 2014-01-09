var turn = true

document.getElementById('zero').onclick=clickStuff;
document.getElementById('one').onclick=clickStuff;
document.getElementById('two').onclick=clickStuff;
document.getElementById('three').onclick=clickStuff;
document.getElementById('four').onclick=clickStuff;
document.getElementById('five').onclick=clickStuff;
document.getElementById('six').onclick=clickStuff;
document.getElementById('seven').onclick=clickStuff;
document.getElementById('eight').onclick=clickStuff;



function clickStuff() {
	if(this.innerHTML==""){
	if (turn)
			 {
			 	this.innerHTML = '<img src="images/swords.jpg" />';
			 	turn = false
			 }
else {

				this.innerHTML = '<img src="images/shield.jpg" />';
				turn = true
 }
}

};
