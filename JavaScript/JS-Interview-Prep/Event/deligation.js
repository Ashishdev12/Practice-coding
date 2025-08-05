const table = document.getElementById('timesheet');
const submit = document.getElementById('submit');


let filledHours = {};

const storedValue = localStorage.getItem('filledHours')
if(storedValue){
    filledHours = JSON.parse(storedValue);

    for(const name in filledHours ){
        const input = table.querySelector(`[name=${name}]`);
        if(input){
            input.value = filledHours[name] 
        }

    }
}

table.addEventListener('input',(e)=>{
     filledHours[e.target.name] = e.target.value
     localStorage.setItem('filledHours', JSON.stringify(filledHours))
})


submit.addEventListener('click',()=>{
    console.log(filledHours);
    
})