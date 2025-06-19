const newYear = new Date('2026-01-01 12:00:00 AM');

const countDownTimer = setInterval(()=>{
    const now = new Date()

    let distance = newYear - now
   if(distance <= 0){
    clearInterval(countDownTimer)
    document.getElementById("countdown").innerHTML = "Happy New year!"
   } else {
    const days = Math.floor(distance /1000 /60 /60 /24);
    const hours = Math.floor(distance /1000 /60 /60) % 24
    const minutes = Math.floor(distance / 1000 /60) % 60
    const seconds = Math.floor(distance/ 1000) % 60
    // console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
    document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
    
   }
},1000)