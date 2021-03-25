
var el_up = document.getElementById("complex_p");
document.getElementById("buttonC").addEventListener("click", complexity_run);

function myFunction() {
	var myInput = document.getElementById("psw").value;     //get user input from html form
  var res = myInput.split("");							    //put user input into array
  document.getElementById("demo").innerHTML = res;			//displaying array 
  
  var complexity = 0;
  
  var numbComplexP = false;
  var numbComplexN = false;
  
  //checking the array for recurrences (complexity)
  for (var i = 0; i < res.length; i++){
	if (res[i] == null && res[i + 1] == null){
  complexity = complexity;
  }
  else if (res[i] == res[i + 1]){
	complexity = complexity + 1;
	}
  }
  
  //checking the array for  + predictable sequences (1234)
  for (var i = 0; i < res.length; i++){
	for (var j = 0; j < res.length; j++){
	if (res[i] == null && res[i + 1] == null){
  complexity = complexity;
  }
  else if (res[i] == (j + 1) && res[i + 1] == (j + 2)){
		numbComplexP = true;
	}
  }
  }
  
  if (numbComplexP == true){
  complexity = complexity + 1;
  }
  
  //checking the array for  - predictable sequences (9876)
  for (var i = 0; i < res.length; i++){
	for (var j = 9; j > res.length; j--){
	if (res[i] == null && res[i + 1] == null){
  complexity = complexity;
  }
  else if (res[i] == (j - 1) && res[i + 1] == (j - 2)){
		numbComplexN = true;
	}
  }
  }
  
  if (numbComplexN == true){
  complexity = complexity + 1;
  }
  
  document.getElementById("demo2").innerHTML = complexity;              //displaying complexity variable to the html form
  
  //using the complexity value to determine progress bar values
  var value ="";
  document.getElementById("progress").value =0;
  
  if (complexity <2 && myInput.length >8) {
	  document.getElementById("progress").value += 100;
  }
  else if (complexity < 3 && myInput.length > 7){
	  document.getElementById("progress").value += 75;
  }
  else if (complexity < 4 && myInput.length >6) {
	  document.getElementById("progress").value += 50;
  }
  else if (complexity <5 && myInput.length >5) {
	  document.getElementById("progress").value += 25;
  }
  else{
	  document.getElementById("progress").value += 5;
  }
}
function complexity_run(){
el_up.innerHTML = myFunction();
}
