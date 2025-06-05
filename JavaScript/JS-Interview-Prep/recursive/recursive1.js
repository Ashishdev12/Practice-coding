function importantAction(username){
    return new Promise((resolve, reject)=> {
       setTimeout(()=> {
           console.log(`Subscribe to ${username}`);
       },1000)
    })
   }
   
   function likeTheVideo(video){
       return new Promise((resolve, reject)=> {
          setTimeout(()=> {
              console.log(`Like the ${video}`);
          },1000)
       })
      }
   
      function shareTheVideo(video){
       return new Promise((resolve, reject)=> {
          setTimeout(()=> {
              console.log(`Subscribe to ${video}`);
          },1000)
       })
      }
   
   const promRecurse = (funcPromises)=>{
       if(funcPromises.length === 0) return
       const promise = funcPromises.shift()
       promise.then((res)=>console.log(res)).catch((err)=>console.log(err));
   
       promRecurse(funcPromises)
   }
   
   promRecurse([
       importantAction("Ashish"),
       likeTheVideo("Please like the Video"),
       shareTheVideo("Please share the video")
   ])
   
   