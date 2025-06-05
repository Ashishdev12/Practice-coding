const circleCoordinate = []

function circleIntersect(x0, y0, r0, x1, y1, r1) {
      return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
  }

function logIfIntersectingCircle(){
     const firstCircle = circleCoordinate[0];
     const secondCircle = circleCoordinate[1];
     const x1  = firstCircle.x;
     const x2 = secondCircle.x;
     const r1 = firstCircle.radius
     const y1 = firstCircle.y;
     const y2 = secondCircle.y;
     const r2 = secondCircle.radius;

     return circleIntersect(x1,y1,r1,x2,y2,r2);
     
}
document.addEventListener("click", (e)=>{

      const totalCircle = document.querySelectorAll(".circle")
      if(totalCircle.length === 2){
            totalCircle.forEach((circ)=>{
                  document.body.removeChild(circ)
                  circleCoordinate.shift();
            })
      }
      const x = e.clientX;
      const y = e.clientY;
      
      
      // const randomNo = Math.random();
      const radius = Math.floor(Math.random() * (200 - 50) + 50)
      // console.log("x =", x, "y =", y, "rad =", radius);
      circleCoordinate.push({x,y,radius});

      const circle = document.createElement("div");
      circle.classList.add("circle");
      var elStyle = circle.style;
      elStyle.top = y-(radius) + "px";
      elStyle.left = x-(radius) + "px";
      elStyle.width = radius*2 + "px";
      elStyle.height = radius*2 + "px";

      document.body.appendChild(circle);

      if(circleCoordinate.length === 2){
       const res = logIfIntersectingCircle();
       console.log("Intersecting =", res);
      }
      
});


