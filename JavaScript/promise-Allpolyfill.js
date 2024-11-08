// Promise.all() polyfill Implementation


function importantAction(username){
    return new Promise((resolve, reject)=> {
       setTimeout(()=> {
          resolve(`Subscribe to ${username}`);
       },1000)
    })
   }
   
   function likeTheVideo(video){
       return new Promise((resolve, reject)=> {
          setTimeout(()=> {
             resolve(`Like the ${video}`);
          },1000)
       })
      }
   
      function shareTheVideo(video){
       return new Promise((resolve, reject)=> {
          setTimeout(()=> {
             reject(`Subscribe to ${video}`);
          },1000)
       })
      }

      Promise.allPolyfill = (promises) => {
        return new Promise((resolve, reject) => {
            const result = [];
            if(!promises.length){
                resolve(result);
                return
            }

            let pending = promises.length;
            promises.forEach((pro, idx)=> {
                Promise.resolve(pro).then((res)=> {
                    result[idx] = res;
                    pending--;

                    if(pending === 0){
                        resolve(result)
                    }
                },reject)
            })
        })
      }
   
    Promise.allPolyfill([
        importantAction("Ashish"),
       likeTheVideo("Please like the Video"),
       shareTheVideo("Please share the video")
    ]).then((res)=>console.log(res))
    .catch((err)=>console.log("Failed:", err));