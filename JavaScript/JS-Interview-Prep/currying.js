/*
// Not carried function
function add(a,b,c){
    return a + b + c
}
     console.log(add(1,2,3));

// carried function 

function CurriedAdd(a){
    return function(b){
        return function(c){
            return a + b + c 
        }
    }
}

console.log(CurriedAdd(1)(2)(3));
const addnewValue = CurriedAdd(1)(2);
console.log(addnewValue(3));

*/

// Practical use case


function logMessage(level) {
    return function(message) {
        console.log(`[${level}] ${message}`);
    };
}

const logError = logMessage('ERROR');

const logInfo = logMessage('INFO');


logError('Something went wrong!'); 
logInfo('This is an info message.');