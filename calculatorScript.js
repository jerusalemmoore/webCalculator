let windowVal =document.getElementById('windowVal');
var var1, var2, op;
window.console.log(windowVal);
function addToEntry(digit){
  window.console.log(digit);
  if(parseInt(windowVal.innerHTML) == 0){
      windowVal.innerHTML = digit;
  }
  else{
    windowVal.innerHTML += digit;

  }

  // windowVal
}
function negate(){
  if(parseInt(windowVal.innerHTML) < 0){
    windowVal.innerHTML = String(windowVal.innerHTML).replace("-", "");
  }
  else if(parseInt(windowVal.innerHTML) == 0){
    return;
  }
  else{
    windowVal.innerHTML = "-" + windowVal.innerHTML
  }
}
function operation(operation){
  if(typeof var1 == 'undefined'){
    var1 = windowVal.innerHTML;
  }
  windowVal.innerHTML = 0;
  console.log(windowVal);
  op = operation;
}
function eval(){
  if(op == 'undefined'){
    window.console.log('op not entered')
    return;
  }
  else{
    var2 = windowVal.innerHTML;
    var finalAnswer;
    switch(String(op)){
      case '+':
        finalAnswer = var1 + var2;
        break;
      case '-':
        finalAnswer = var1 - var2;
        break;
      case '*':
        finalAnswer = var1 * var2;
        break;
      case '/':
        finalAnswer = var1 / var2;
        break;
      default:
        console.log('error, bad operator');
    }
    console.log(var1);
    console.log(var2);
    console.log(finalAnswer)

  }
}
