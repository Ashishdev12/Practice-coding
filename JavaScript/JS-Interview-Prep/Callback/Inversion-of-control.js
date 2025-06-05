// Ioc - Inversion of control 

function getUserDetails(cb){
    setTimeout(()=> {
        cb({name: 'Ashish', userId: '123'})
    },1000)
}

// getUserDetails((result)=> {
//     console.log(result);
// })

function getPost(userid,cb1){
    setTimeout(()=>{
        cb1(['post1', 'post2'])
    },1000)
}

// getPost((result)=> {
//     console.log(result);
// })




getUserDetails((userDetails)=> {
    console.log(userDetails);
    getPost(userDetails,(post)=> {
        console.log(post);
    })
})