const body = document.body;
const button = document.querySelector("button");
// console.log(button);
// console.log(body);

const intervalId = setInterval(()=>{
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  body.style.background = rgb;
  // console.log(rgb);
 
}, 1000);


 // console.log(intervalId);

 button.addEventListener("click", ()=>{
  clearInterval(intervalId);
  button.textContent = body.style.background;
 })
 