let display = document.getElementById('display');

function appendNumbers(input){
    display.value += input
}

function clearAll(){
  display.value = ''
}

function calculate(){
   display.value = eval(display.value)
}