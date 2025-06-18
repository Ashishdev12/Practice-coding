const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");
const input = document.getElementById("jokeInput");
const jokeList = document.getElementById("jokeList");


// Re-useable Code
async function makeHttpRequest(route, method, data = null) {
    const options = {
        method: method
    }
    if(data){
        options.headers ={
            "Content-Type": "application/json"
        }
        options.body = JSON.stringify(data)
    }
    try {
        const response = await fetch(`http://localhost:5000${route}`,options)
        if(response.status >= 400){
            throw new Error("Network response was not ok")
        }
        return await response.json()
    } catch(err){
        throw err
    }
}



// Get Data
const getJokes = async () => {
    try{
        const result = await makeHttpRequest('/jokes', "GET")
        // console.log(result);
        updateJokes(result.data)
    } catch(err){
        alert("something went wrong")
    }
};


// post data
const getPost = async () => {
    try{
         const result = await makeHttpRequest('/jokes-post',"POST",{joke: input.value})
        //   console.log(result);
          updateJokes(result.data)
    } catch(err){
        alert("something went wrong")
    } finally{
        input.value = ''
    }
};

// delete data
const deleteJokes = async (id) => {
   try{
    const result = await makeHttpRequest(`/jokes/${id}`, 'DELETE')
    console.log(result);
    updateJokes(result.data) 
    console.log("successfully deleted");
    
   } catch(err){
    alert("something went wrong")
   }
};


// update Jokes

const updateJokes = (jokes) =>{
    const jokeListHtml = jokes.map((item, index)=>{
        return `<li>${item.joke}<button className="deleteButton" onClick="deleteJokes(${item.id})">x</li>`
    }).join('')
    jokeList.innerHTML = jokeListHtml
}

// add events
getButton.addEventListener("click", () => {
  getJokes();
});

postButton.addEventListener("click", () => {
  getPost();
});
