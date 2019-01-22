//Make Pi 9 digits long//
//define variables here//

//do functions here//
function input(num) {
  document.calc.display.value = document.calc.display.value + num;
}

function equal(){
  let equationEqual = document.calc.display.value
  document.calc.display.value = eval(equationEqual)
}

