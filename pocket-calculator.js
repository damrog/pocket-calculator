var expressionArray= [];
var decimalStatus = false;
var piStatus = false;
var execution = false;
var decimalInserted = false;
var firstPercent = false;
var symbolStatus = false
var operationInserted = false;
var finalSym = false;
var exponential;
var firstNegate = false;
var negated = false;
var i = 7;
  console.log("var status", finalSym, operationInserted, execution, decimalStatus, piStatus, decimalInserted);
function insertNum(num){
  if(execution == false){
  document.calculator.display.value = "";
  execution = true;
}

if(num === '+'|| num === '-' || num === '*' || num === '/'){
  if(expressionArray[expressionArray.length - 1] == '+' || expressionArray[expressionArray.length - 1] == '-' || expressionArray[expressionArray.length -1] == '*' || expressionArray[expressionArray.length - 1] == '/'){
    expressionArray.pop();
    expressionArray.push(num);
    operationInserted = true;
    console.log("raw array", expressionArray);
  }
}


  if(operationInserted == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
      console.log("joined array", expressionArray.join(''));
  }

  if(Number(document.calculator.display.value.length) <= 10){
    document.calculator.display.value = document.calculator.display.value;
  }else{
    document.getElementById("zero_button").disabled = true;
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    document.getElementById("button5").disabled = true;
    document.getElementById("button6").disabled = true;
    document.getElementById("button7").disabled = true;
    document.getElementById("button8").disabled = true;
    document.getElementById("button9").disabled = true;
    document.getElementById("decimal").disabled = true;
    document.getElementById("pi_Button").disabled = true;
  }

  if(decimalInserted == false){
 let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
 document.calculator.display.value = commaInput;
  }
}

function clean(){
  finalSym = false;
  operationInserted = false;
  document.calculator.display.value=0;
   i = i = 7;
  execution = false;
  decimalStatus = false;
  piStatus = false;
  decimalInserted = false;
  firstNegate = false;
  console.log(finalSym, operationInserted, execution, decimalStatus, piStatus, decimalInserted);
    expressionArray = [];

    document.getElementById("buttonZero").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
    document.getElementById("pi_Button").disabled = false;
    document.getElementById("decimal").disabled = false;
}

function clearOnOperation(){
  operationInserted = false;
   i = i = 7;
  symbolStatus = false;
  firstPercent = false;
  document.calculator.display.value= 0;
  execution = false;
  decimalStatus = false;
  piStatus = false;
  decimalInserted = false;
  firstNegate = true;

  document.getElementById("buttonZero").disabled = false;
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").disabled = false;
  document.getElementById("button3").disabled = false;
  document.getElementById("button4").disabled = false;
  document.getElementById("button5").disabled = false;
  document.getElementById("button6").disabled = false;
  document.getElementById("button7").disabled = false;
  document.getElementById("button8").disabled = false;
  document.getElementById("button9").disabled = false;
 document.getElementById("pi_Button").disabled = false;
  document.getElementById("decimal").disabled = false;
}

function equals(){
  symbolStatus = false;
  firstPercent = false;
  piStatus = false;
  finalSym = true;

  document.getElementById("decimal").disabled = true;
  document.getElementById("zero_button").disabled = true;
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button4").disabled = true;
  document.getElementById("button5").disabled = true;
  document.getElementById("button6").disabled = true;
  document.getElementById("button7").disabled = true;
  document.getElementById("button8").disabled = true;
  document.getElementById("button9").disabled = true;
  document.getElementById("pi_Button").disabled = true;

  let calculatorAnswer= eval(expressionArray.join(''));
  if(expressionArray.join(",").includes("e")){
     exponential = true;
  }
  console.log(exponential);

    expressionArray = [];
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

  if(document.calculator.display.value === "NaN" || document.calculator.display.value === "∞" || document.calculator.display.value === "Infinity") {
    document.calculator.display.value = "ERROR";
  }
}

function percentage(){
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  if(finalSym == false){
  if(firstPercent == false){
  let numberCount = document.calculator.display.value.length;
  numberCount = numberCount -1;
  console.log(numberCount);
  let removed = expressionArray.length - numberCount;

  while(expressionArray.length >= removed){
  expressionArray.pop();
  }

  document.calculator.display.value = Number(document.calculator.display.value)/100;
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
     console.log(expressionArray);
     firstNegate = true;
     negated = true;
   }else {
     let negLoc = expressionArray.length - negNums;

     if(expressionArray.length >= negLoc){
       expressionArray.pop();
       negated = true;
     }
     expressionArray.push(negVal);
   }
 }



function decimalInsert(num){
  if(decimalStatus == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
    console.log(expressionArray);
    decimalStatus = true;
    decimalInserted = true;
    document.getElementById("decimal").disabled = true;
  }
}
function piInsert(num){
  if(piStatus == false){
    document.calculator.display.value = '';
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
    console.log(expressionArray);
    piStatus = true;
  }
}
