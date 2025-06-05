const table = document.getElementById('timesheet');

const submit = document.getElementById('submit');


let filledHours = {}
table.addEventListener('input',(e)=> {
    filledHours[e.target.name] = e.target.value
})

submit.addEventListener('click',(e)=> {
    console.log(filledHours);
})




