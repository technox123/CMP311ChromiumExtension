// Get the modal
var modal = document.getElementById("quizModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//adding event listeners to the buttons, running corresponding functions

document.getElementById("1A").addEventListener("click", myFunction1A);
document.getElementById("2A").addEventListener("click", myFunction2A);
document.getElementById("3A").addEventListener("click", myFunction3A);
document.getElementById("4A").addEventListener("click", myFunction4A);

document.getElementById("1B").addEventListener("click", myFunction1B);
document.getElementById("2B").addEventListener("click", myFunction2B);
document.getElementById("3B").addEventListener("click", myFunction3B);
document.getElementById("4B").addEventListener("click", myFunction4B);

document.getElementById("1C").addEventListener("click", myFunction1C);
document.getElementById("2C").addEventListener("click", myFunction2C);
document.getElementById("3C").addEventListener("click", myFunction3C);
document.getElementById("4C").addEventListener("click", myFunction4C);


// displaying the correct Answer to the question1
function myFunction1A() {
	var incorrect = "incorrect";
	document.getElementById("1A").classList.add("btn-danger");
	
		//Removing the other answers
	document.getElementById("2A").classList.remove("btn-danger");
	document.getElementById("4A").classList.remove("btn-danger");
	
	document.getElementById("3A").classList.remove("btn-success");

}

function myFunction2A() {
	var incorrect = "incorrect";
	document.getElementById("2A").classList.add("btn-danger");
	
	//Removing the other answers
	document.getElementById("1A").classList.remove("btn-danger");
	document.getElementById("4A").classList.remove("btn-danger");
	
	document.getElementById("3A").classList.remove("btn-success");

}

function myFunction3A() {
	var correct = "correct";
	document.getElementById("3A").classList.add("btn-success");
	
	//Removing the other answers
	document.getElementById("1A").classList.remove("btn-danger");
	document.getElementById("4A").classList.remove("btn-danger");
	document.getElementById("2A").classList.remove("btn-danger");
}

function myFunction4A() {
	var incorrect = "incorrect";
	document.getElementById("4A").classList.add("btn-danger");
	
	//Removing the other answers
	document.getElementById("1A").classList.remove("btn-danger");
	document.getElementById("2A").classList.remove("btn-danger");
	
	document.getElementById("3A").classList.remove("btn-success");
}




// displaying the correct Answer to the question2
function myFunction1B() {
	var correct = "correct";
	document.getElementById("1B").classList.add("btn-success");
	
	
	//Removing the other answers
	document.getElementById("2B").classList.remove("btn-danger");
	document.getElementById("3B").classList.remove("btn-danger");
	document.getElementById("4B").classList.remove("btn-danger");
	
}

function myFunction2B() {
	var incorrect = "incorrect";
	document.getElementById("2B").classList.add("btn-danger");

	
	//Removing the other answers
	document.getElementById("1B").classList.remove("btn-success");
	document.getElementById("3B").classList.remove("btn-danger");
	document.getElementById("4B").classList.remove("btn-danger");
}

function myFunction3B() {
	var incorrect = "incorrect";
	document.getElementById("3B").classList.add("btn-danger");	
	
		//Removing the other answers
	document.getElementById("1B").classList.remove("btn-success");
	document.getElementById("2B").classList.remove("btn-danger");
	document.getElementById("4B").classList.remove("btn-danger");
}

function myFunction4B() {
	var incorrect = "incorrect";
	document.getElementById("4B").classList.add("btn-danger");
	
	//Removing the other answers
	document.getElementById("1B").classList.remove("btn-success");
	document.getElementById("2B").classList.remove("btn-danger");
	document.getElementById("3B").classList.remove("btn-danger");
}




// displaying the correct Answer to the question3
function myFunction1C() {
	var incorrect = "incorrect";
	document.getElementById("1C").classList.add("btn-danger");
	
	//Removing the other answers
	document.getElementById("2C").classList.remove("btn-danger");
	document.getElementById("3C").classList.remove("btn-danger");
	document.getElementById("4C").classList.remove("btn-success");
}

function myFunction2C() {
	var incorrect = "incorrect";
	document.getElementById("2C").classList.add("btn-danger");

	//Removing the other answers
	document.getElementById("1C").classList.remove("btn-danger");
	document.getElementById("3C").classList.remove("btn-danger");
	document.getElementById("4C").classList.remove("btn-success");
}

function myFunction3C() {
	var incorrect = "incorrect";
	document.getElementById("3C").classList.add("btn-danger");

	
	//Removing the other answers
	document.getElementById("1C").classList.remove("btn-danger");
	document.getElementById("2C").classList.remove("btn-danger");
	document.getElementById("4C").classList.remove("btn-success");

}

function myFunction4C() {
	var correct = "correct";
	document.getElementById("4C").classList.add("btn-success");

	
	//Removing the other answers
	document.getElementById("1C").classList.remove("btn-danger");
	document.getElementById("2C").classList.remove("btn-danger");
	document.getElementById("3C").classList.remove("btn-danger");
}
