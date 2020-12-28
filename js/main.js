var input = document.getElementById("input")
var operators = document.querySelector(".operators")
var numbers = document.querySelector(".left-panel")
var equal = document.getElementById("equal")

// add event listeners 
numbers.addEventListener("click", displayToScreen)
operators.addEventListener("click", displayToScreen)
equal.addEventListener("click", compute)

//  if we push button on calculator


function displayToScreen(num){

  const button = num.target.innerHTML


  if(button === "C"){
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
  
  console.log(input.innerHTML)

  let equal = input.innerHTML

  input.innerHTML = Math.round(eval(equal) * 1000)/ 1000
}



