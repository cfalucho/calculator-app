var input = document.querySelector(".input")
var button = document.querySelectorAll("button")
var equal = document.getElementById("equal")


//===== add event listeners beings =====


  // add event listeners to every numbers
for(var i = 0; i < button.length - 1; i++) {
  button[i].addEventListener("click", displayToScreen)
}


  // add event listeners to equal
equal.addEventListener("click", compute)


//===== add event listeners beings =====




//  if we push button on calculator


function displayToScreen(num){

  const button = num.target.innerHTML


  if(button === "C" ){
      let del_input = input.innerHTML;
      input.innerHTML  = del_input.slice(0, -1)  
    }
  else if(input.innerHTML === '0'){
        input.innerHTML = button;
    }
  else{
        input.innerHTML += button;
    }
}


function compute(){

    
  let equal = input.innerHTML

  input.innerHTML = Math.round(eval(equal) * 1000)/ 1000
}



