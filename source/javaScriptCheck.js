var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var elemId = "psw";
var myInput = document.getElementById("psw");
var passwordTypingTimer;
var passwordDoneTypingInterval = 1000;
document.getElementById("download_database").addEventListener("click", download_database);
document.getElementById("clear_database").addEventListener("click", clear_database);
document.getElementById("get_value_test").addEventListener("click", get_value);

/* When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
} */

$(document).ready(function() {
  $('#' + elemId).keyup(function(evt) {

      var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
      var numbers = /[0-9]/g;

      if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }

      if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

      if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }

      // Validate length
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }


      clearTimeout(passwordTypingTimer);
      passwordTypingTimer = setTimeout(checkPassword(myInput.value, passwordDoneTypingInterval));
  });

  //if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
  //  output = "🎉 Dark mode is supported";
  //}

  /*var local = (function(){

    var getData = function(key){
        if(localStorage.getItem(key) != null){
          return JSON.parse(localStorage.getItem(key));
        }else{
            return false;
        }
    }

  })();*/

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

function download_database() {
  $.getJSON('https://mayar.abertay.ac.uk/~cmp311g20eh12/API/account/read_passwords.php', function(result){


    $.each( result, function( key, val ) {
      console.log("Currently saving this password: " + JSON.stringify(val.password));
      local.set(val.password, val.password);

      //items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
  });
}

function clear_database() {
  local.clear();
  console.log("Cleared local storage!");
}

function get_value() {
  var a = local.get('123456');
  console.log("The current value that is found is: " + JSON.stringify(a));
}

function checkPassword(password) {
  if(local.get(password)) {
    console.log('Password found in database, password is BREACHED');
  } else {
    console.log('Password is not found in the local database, password seems save to use');
  }
}
 
