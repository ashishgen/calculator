function enterone(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "1";
    }
   }
function entertwo(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "2";
    }
   }
function enterthree(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "3";
    }
   }
function enterfour(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "4";
    }
   }
function enterfive(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "5";
    }
   }
 function entersix(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "6";
    }
   }
function enterseven(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "7";
    }
   }
function entereight(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "8";
    }
   }
function enternine(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "9";
    }
   }
function enterzero(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "0";
    }
   }
function enterdbzero(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "00";
    }
   }
function enterdecimal(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + ".";
    }
   }
function enteradd(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "+";
    }
   }
function entermultiply(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "*";
    }
   }
function enterdivide(divide) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "/";
    }
   }
function entermodulus(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "%";
    }
   }
function enterlog(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "!";
    }
   }
function entersubtract(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + "-";
    }
   }
function enterequal(display) {
    {
      document.getElementById("display").value = document.getElementById("display").value + console.log(display);
    }
   }


//number
//operator
//display
//clear
//delete
//variables

let string= " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
  if(e.target.innerHTML=='='){
    string = eval(string);
    document.querySelector('input').value = string;
  }
     else if (e.target.innerHTML=='C'){
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML=='cu'){
      string = string*string*string;
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML=='sq'){
      string = string*string;
      document.querySelector('input').value = string;
    }
     
    else if (e.target.innerHTML=='D'){
      string = string.slice(1,-1);
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML=='!'){
      string='string'+'!';
    }
      
    else
     {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value=string;
     }
  })
})


