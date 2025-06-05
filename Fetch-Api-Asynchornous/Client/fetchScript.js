const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");
const input = document.getElementById("jokeInput");
const deleteButton = document.getElementsByClassName("deleteButton");

const getJokes = async () => {
  const res = await fetch("http://localhost:5000/jokes", {
    method: "GET",
  });
  const result = await res.json();
  console.log(result);
};

const postJokes = async () => {
    const res = await fetch("http://localhost:5000/jokes-post", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({joke: 'I am new Joke'})
        
      })
      const result = await res.json();
      console.log(result);
};

const deleteJokes = () => {};


// const updateJokeList = (jokes) => {
//  const jokeListHtml = jokes.map((item, index)=>{
//      return`
//      <li>${item.joke}
//      <button class= "deleteButton" onclick="deleteJoke(${item.id})">x</button>
//      </li>
//      `     
//  }).join('');
//  jokeListHtml.innerHtml = jokeListHtml;
// }

getButton.addEventListener('click', getJokes)
postButton.addEventListener('click', postJokes)