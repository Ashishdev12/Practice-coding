/*
function printStartPattern(star){
    let result = document.getElementById('star');
    let output = '';
    for(let i = 1; i<=5; i++){
        for(j = 1; j<=i; j++){
            output += star;
        }
        output += '<br>'
    }
    result.innerHTML = output;

}

printStartPattern('*')
*/

function printStartPattern(star){
    let result = document.getElementById('star');
    let output = '';
    let x = 10
    for(let i = 1; i<=x; i++){

        for(let k =1; k<=x-i; k++){
            output += '&nbsp;&nbsp';
        }

        for(j = 1; j<=i; j++){
            output += star;
        }

        output += '<br>'
    }
    result.innerHTML = output;

}

printStartPattern('*')