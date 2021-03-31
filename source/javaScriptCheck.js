var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var elemId = "psw";
var emailInput = document.getElementById("email");
var pswInput = document.getElementById("psw");
var pswBreached = document.getElementById("breached1");
var password = "";
var debug = true;
document.getElementById("clear_database").addEventListener("click", clear_database);
document.getElementById("searchPSW").addEventListener("click", search_password);
document.getElementById("searchEmail").addEventListener("click", search_email);
document.getElementById("generate_P_btn").addEventListener("click", generateP);

$('#searchPSW').popover({
    title: 'Search Result',
    content: 'Loading...'
});

$('#searchEmail').popover({
    title: 'Search Result',
    content: 'Loading...'
});

$('#generate_P_btn').popover({
    title: 'Generated Password',
    content: 'Loading...'
});

$(document).ready(function() {
  $('[data-toggle="popover"]').popover()

  checkForUpdates();

  $('#' + elemId).keyup(function(evt) {

      var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
      var numbers = /[0-9]/g;

      if(pswInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }

      if(pswInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

      if(pswInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }

      // Validate length
      if(pswInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }

      password = pswInput.value;
      PasswordComplexity(password);
  });

});

var local = (function(){

  var setData = function(key,obj){
      var values = JSON.stringify(obj);
      localStorage.setItem(key,values);
  }

  var getData = function(key){
      if(localStorage.getItem(key) != null){
        return JSON.parse(localStorage.getItem(key));
      }else{
        return false;
      }
  }

  var clearDatabase = function() {
    localStorage.clear();
  }

  return {set:setData,get:getData,clear:clearDatabase}
})();

function checkForUpdates(){

  $.getJSON('https://mayar.abertay.ac.uk/~cmp311g20eh12/API/account/read_version.php', function(result){

    $.each( result, function( key, val ) {
      if (local.get("internal_database_version") != val.version) {
        clear_database();
        download_database();
      } else {
        if (debug == true) {
          console.log("Current database is already up to date!");
        }
      }
    });
  });

}

function download_database() {
  $.getJSON('https://mayar.abertay.ac.uk/~cmp311g20eh12/API/account/read_passwords.php', function(result){

    $.each( result, function( key, val ) {
      if (debug == true) {
        console.log("Currently saving this password: " + JSON.stringify(val.password));
      }
      local.set(val.password, val.password);

    });
  });

  $.getJSON('https://mayar.abertay.ac.uk/~cmp311g20eh12/API/account/read_emails.php', function(result){

    $.each( result, function( key, val ) {
      if (debug == true) {
        console.log("Currently saving this email: " + JSON.stringify(val.email));
      }
      local.set(val.email, val.email);
    });
  });

  $.getJSON('https://mayar.abertay.ac.uk/~cmp311g20eh12/API/account/read_version.php', function(result){

    $.each( result, function( key, val ) {
      if (debug == true) {
        console.log("Current version of the database saved: " + JSON.stringify(val.version));
      }
      local.set("internal_database_version", val.version);

    });
  });
}

function clear_database() {
  local.clear();
  console.log("Cleared local storage!");
}

function search_password() {
  if(local.get(password)) {
    var popoverPSW = $('#searchPSW').data('bs.popover');
    popoverPSW.config.content = "Password found in database, password is BREACHED";
    popoverPSW.show();
    if (debug == true) {
      console.log('Password found in database, password is BREACHED');
    }
    pswBreached.classList.remove("notbreached");
    pswBreached.classList.add("breached");

  } else {
    var popoverPSW = $('#searchPSW').data('bs.popover');
    popoverPSW.config.content = "Password is not found in the local database, password seems save to use";
    popoverPSW.show();
    if (debug == true) {
      console.log('Password is not found in the local database, password seems save to use');
    }
	pswBreached.classList.remove("breached");
    pswBreached.classList.add("notbreached");
  }
}

function search_email() {
  if(local.get(emailInput.value)) {
    var popoverEmail = $('#searchEmail').data('bs.popover');
    popoverEmail.config.content = "Email found in database, Email is BREACHED";
    popoverEmail.show();
    console.log('Email found in database, Email is BREACHED');

  } else {
    var popoverEmail = $('#searchEmail').data('bs.popover');
    popoverEmail.config.content = "Email is not found in the local database, password seems save to use";
    popoverEmail.show();
    console.log('Email is not found in the local database, password seems save to use');
    
  }
}
 


///////// PASSWORD GENERATION \\\\\\\\\

function generateP() {
   
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
   var No3 = "";
   var NoT = "";
   
   var Symb1 = "";
   
   
  function secureMathRandom() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
  }
  
   
     lower1 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
     lower2 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
     lower3 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
     //lowerT = lower1 + lower2;
     
     Higher1 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
     Higher2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
     Higher3 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
     //HigherT = Higher1 + Higher2 + Higher3;
     
     No1 = String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
     No2 = String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
     No3 = String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
     NoT = No1 + No2;
     
     const symbols = '~!@#$%^&*()_+{}":?><;.,';
     
     Symb1 = symbols[Math.floor(Math.random() * symbols.length)];
     
  
  
  var arr = [lower1, Higher1, Higher3, No3, lower3, Higher2, lower2, NoT, Symb1];
  
  arr = arr.sort(() => Math.random() - 0.5);
   
  var arrayGPass = arr.join('');
  
  var popoverGPass = $('#generate_P_btn').data('bs.popover');
  popoverGPass.config.content = "The generated password is: " + arrayGPass;
  popoverGPass.show();
  console.log('Generated password: ' + arrayGPass);
   
}

//////// COMPLEXITY ALGORITHM \\\\\\\\\

function PasswordComplexity(password) {
  var myInput = password;     //get user input from html form
  var res = myInput.split("");                  //put user input into array
  //document.getElementById("demo").innerHTML = res;      //displaying array 
  
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
  
  //document.getElementById("demo2").innerHTML = complexity;              //displaying complexity variable to the html form
  
  //using the complexity value to determine progress bar values
  var value = "";
  var pswComplexBar = document.getElementById("progress");
  pswComplexBar.value =0;
  
  if (complexity <2 && myInput.length >8) {
    pswComplexBar.value += 100;
	
  }
  else if (complexity < 3 && myInput.length > 7){
    pswComplexBar.value += 75;
  }
  else if (complexity < 4 && myInput.length >6) {
    pswComplexBar.value += 50;
  }
  else if (complexity <5 && myInput.length >5) {
    pswComplexBar.value += 25;
  }
  else{
    pswComplexBar.value += 5;
  }
}