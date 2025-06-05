// To avoid callback hell, you can refactor the code using Promises:

const getUserDetails = () =>{
    return new Promise((resolve)=>{
     setTimeout(()=> {
         resolve({name:'Ashish', userId: '123', age: 32})
     },1000)
     });
 }
 
 const getPost = () => {
  return new Promise((resolve)=> {
     setTimeout(()=> {
 
         resolve(['post1', 'post2'])
     },1000)
     })
 }
 
 /*
 getUserDetails()
 .then((userDetails)=> {
     console.log(userDetails);
     return getPost(userDetails);
 })
 .then((posts)=> {
      console.log(posts);
      return getUserDetails()
 })
 .then((userDetails)=>{
     console.log(userDetails);
 })
 */
 
 // For even cleaner code, you can use async/await:
 
 async function fetchData() {
     const userDetails = await getUserDetails();
     console.log(userDetails);
 
     const post =  await getPost();
     console.log(post);
 }
 
 fetchData()