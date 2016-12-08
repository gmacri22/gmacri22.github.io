$(document).ready(function() {

	//start index at 0
	var index = 0;
	//slides - corresponding to text array
	var slides = [
		'images/conway.png',
		'images/tictactoe.png',
		'images/mips.png'
	];
	//descriptions - corresponding to slides array
	var text = [
		'<h2>Parallelized Game of Life</h2><h3>University of Rochester</h3><h4>Programming Language Design and Implementation &nbsp; | &nbsp; Fall 2016</h4><p>Simulated John Conway\'s Game of Life using multithreading, both by directly creating threads and by using Java\'s Executor facilities. Wrote a formal report on the effect of thread number on execution speed.</p>',
		'<h2>Tic-Tac-Toe AI</h2><h3>University of Rochester</h3><h4>Intro to Artificial Intelligence &nbsp; | &nbsp; Spring 2016</h4><p>In a group of three, built an AI that uses state space search, minimax, and alpha-beta pruning to play tic-tac-toe. First, created a program to play a normal three-by-three board, which can be easily solved with minimax. Then, applied the approach to a nine board version, which required developing a heuristic and using alpha-beta pruning</p>',
		'<h2>MIPS Emulator</h2><h3>University of Rochester</h3><h4>Computer Architecture &nbsp; | &nbsp; Spring 2016</h4><p>Emulated a subset of the MIPS assembly instruction set using C. Uses an array to simulate registers and allows user to input MIPS assembly code and see the results in the register array.</p>'
	];

	var getSlide = $('#slide'); //maintain a global jquery variable for slide image
	var getText = $('#slideDesc'); //maintain a global jquery variable for slide description

	//on left arrow (back) click,
	$('body').on('click', '#leftArrow', function() {
		index--; 							//decrease current index
		if (index < 0) { 					//if index is now less than 0, (outside array)
			index = slides.length-1; 		//reset and loop around to last element
		}
		update(); 							//update page
	});

	//on right arrow (forward) click,
	$('body').on('click', '#rightArrow', function(){
		index++;							//increase current index
		if (index >= slides.length) {		//if index is now greater than length, (outside array)
			index = 0;						//reset and loop around to first element
		}
		update();							//update page
	});

	function update() {
		getSlide.attr('src', slides[index]); //changes src attribute of the image
		getText.html(text[index]);			 //change description (AKA inner html)
	}
	
});
