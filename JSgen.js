var el_down = document.getElementById("generate");

function generateP() {
   
   var generatedPassword = "";
   
   var lower1 = "";
   var lower2 = "";
   var lower3 = "";
   var lowerT = "";
   
   var Higher1 = "";
   var Higher2 = "";
   var Higher3 = "";
   var HigherT = "";
   
   var No1 = "";
   var No2 = "";
   var NoT = "";
   
   var Symb1 = "";
   
   function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	// Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

	return array;
	}
   
   
   function secureMathRandom() {
		return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
	}
	
	 
	   lower1 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	   lower2 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	   lower3 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	   lowerT = lower1 + lower2;
	   
	   Higher1 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	   Higher2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	   Higher3 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	   HigherT = Higher1 + Higher2 + Higher3;
	   
	   No1 = String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
	   No2 = String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
	   NoT = No1 + No2;
	   
	   const symbols = '~!@#$%^&*()_+{}":?><;.,';
	   
	   Symb1 = symbols[Math.floor(Math.random() * symbols.length)];
	   
	
	
	var arr = [lower1, Higher1, Higher3, No1, lower3, Higher2, lower2, NoT, Symb1];
	
   
   shuffle(arr);
   
   var arrayGPass = arr.join('');
   
   return arrayGPass;
   
}

 function pGen_Run() { 
            el_down.innerHTML = generateP(); 
        }

