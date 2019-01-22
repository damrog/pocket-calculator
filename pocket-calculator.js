//Make Pi 9 digits long//
function input(num) {
  document.calc.display.value = document.calc.display.value + num;
}

function equal(){
  let equationEqual = document.calc.display.value
  document.calc.display.value = eval(equationEqual)


