//Make Pi 9 digits long//
//define variables here//
var execution = false;
var expressionArray= [];
var decimalStatus = false;
var piStatus = false;
var decimalInputted = false;
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var operationInputted = false;
var finalSym = false;
var exponential;
var firstNegate = false;
var negated = false;
//do functions here//
//function input(num) {
//  document.calc.display.value = document.calc.display.value + num;
//}

//function equal(){
//  let equationEqual = document.calc.display.value
 // document.calc.display.value = eval(equationEqual)
//} 

  console.log("var status", finalSym, operationInputted, execution, decimalStatus, piStatus, decimalInputted);
//logs false to the console after loading onto the page
function input(num){
  if(execution == false){
  document.calculator.display.value = "";
  execution = true;
}

//this replaces the operators
if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if(expressionArray[expressionArray.length - 1] == '+' || expressionArray[expressionArray.length - 1] == '-' || expressionArray[expressionArray.length -1] == '*' || expressionArray[expressionArray.length - 1] == '/'){
    expressionArray.pop();
    expressionArray.push(num);
    operationInputted = true;
    console.log("raw array", expressionArray);
  }
}


  if(operationInput
     ted == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
      console.log("joined array", expressionArray.join(''));
  }

  if(Number(document.calculator.display.value.length) <= 10){
    document.calculator.display.value = document.calculator.display.value;
  }else{
    document.getElementsByClassName("button").disabled = true;
  }
  //disables buttons to prevent overflow

  if(decimalInputted == false){
 let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
 document.calculator.display.value = commaInput;
  }
}

function clean(){
  finalSym = false;
  operationInputted = false;
  document.calculator.display.value=0;
   i = i = 7;
  execution = false;
  decimalStatus = false;
  piStatus = false;
  decimalInputted = false;
  firstNegate = false;
  console.log(finalSym, operationInputted, execution, decimalStatus, piStatus, decimalInputted);
    expressionArray = [];
    document.getElementsByClassName("button").disabled = false;

}

function clearOnOperation(){
  //this functions clears the display after clicking an operator
  operationInputted = false;
   i = i = 7;
  symbolStatus = false;
  firstPercent = false;
  document.calculator.display.value= 0;
  execution = false;
  decimalStatus = false;
  piStatus = false;
  decimalInputted = false;
  firstNegate = true;
    document.getElementsByClassName("button").disabled = false;

}

function equals(){
  symbolStatus = false;
  firstPercent = false;
  piStatus = false;
  finalSym = true;
    document.getElementsByClassName("button").disabled = true;


  let calculatorAnswer= eval(expressionArray.join(''));
  //completes operations
  if(expressionArray.join(",").includes("e")){
     exponential = true;
  }
  console.log(exponential);

    expressionArray = [];
    //established expressionArray as an empty array
    expressionArray.push(calculatorAnswer);
    console.log(calculatorAnswer);
  if(calculatorAnswer > 999999999 || calculatorAnswer < -999999999){
    document.calculator.display.value = calculatorAnswer.toExponential(9);
  }else{
    document.calculator.display.value=calculatorAnswer.toLocaleString("en");
  }
  if(exponential == true){
    document.calculator.display.value = calculatorAnswer;
  }

  if(document.calculator.display.value === "Infinity" || document.calculator.display.value === "NaN" || document.calculator.display.value === "∞") {
    document.calculator.display.value = "ERROR";
  }
}

function percentage(){
  //splits array in order to insert commas. Then joins it back together.
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  if(finalSym == false){
  if(firstPercent == false){
  let numberCount = document.calculator.display.value.length;
  numberCount = numberCount -1;
  console.log(numberCount);
  let removed = expressionArray.length - numberCount;

  while(expressionArray.length >= removed){
  expressionArray.pop();
  //removes last value of expressionArray while expressionArray.length is greater than or equal to the number removed
  }

  document.calculator.display.value = Number(document.calculator.display.value) / 100;
  expressionArray[removed] = document.calculator.display.value;
  console.log(expressionArray);
  firstPercent = true;

}else{
  let numC2 = document.calculator.display.value.length;
  numC2 = numC2 - i;
  console.log(numC2);
  let removed2 = expressionArray.length - numC2;
  expressionArray.splice(expressionArray.length -1);
  document.calculator.display.value = document.calculator.display.value/100;
  expressionArray.push(document.calculator.display.value);
  console.log(expressionArray);
  //logs expressionArray to the console
  console.log(document.calculator.display.value);
  if(document.calculator.display.value>= 0.9999999){
    let power= Number(document.calculator.display.value);
    console.log(typeof power);
    document.calculator.display.value = power.toExponential(9);
    //uses scientific notation after 9 digits
  }
  console.log("percentaged array", expressionArray);
}
}else{
  document.calculator.display.value = document.calculator.display.value/100;
  expressionArray = [];
  expressionArray.push(document.calculator.display.value);
  let power= Number(document.calculator.display.value);
  console.log(typeof power);
  if(document.calculator.display.value >= 0.9999999){
  document.calculator.display.value = power.toExponential(9);
    }
  }
}

function negation(){
  document.calculator.display.value = document.calculator.display.value.split(",").join('');
   let negNums = document.calculator.display.value.length;
   document.calculator.display.value = document.calculator.display.value * -1;
   let negVal = document.calculator.display.value;
   document.calculator.display.value = Number(document.calculator.display.value.split(",").join('')).toLocaleString();
   if(firstNegate == false){
     expressionArray[0]= expressionArray[0] *-1;
     //obtains value at the "0" position in the array and multiplies it by -1
     console.log(expressionArray);
     firstNegate = true;
     negated = true;
   }else {
     let negLoc = expressionArray.length - negNums;

     if(expressionArray.length >= negLoc){
       expressionArray.pop();
       //removes value at the end of the array
       negated = true;
     }
     expressionArray.push(negVal);
   }
 //   if(expressionArray.length-1 === "-"){
 //   num === "+";
 // }
 }



function decimalInput(num){
  if(decimalStatus == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
    //pushes to the array
    console.log(expressionArray);
    decimalStatus = true;
    decimalInputted = true;
    document.getElementById("decimal").disabled = true;
    //disables decimal button after clicking it
  }
}
function piInput(num){
  if(piStatus == false){
    document.calculator.display.value = '';
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
    console.log(expressionArray);
    piStatus = true;
  }
}
