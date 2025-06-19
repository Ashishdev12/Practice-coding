const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");
const jokeInput = document.getElementById("jokeInput");
const jokeList = document.getElementById("jokeList");



const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token"
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    let count = parseInt(localStorage.getItem("Api Count")) || 0
    count = count + 1
    localStorage.setItem("Api Count", count.toString())
    return config;
  });

  // Add a response interceptor
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 401){
        console.log("user needs to login again");
        
    }
    return Promise.reject(error);
  });

const getJokes = async () => {
  try {
    const response = await instance.get("/test");
    console.log(response);
    updateJokes(response.data.data);
  } catch (err) {
    alert("something went wrong");
    console.log(err);
  }
};

const postJokes = async () => {
  try {
    const response = await instance.post("/jokes-post", {
      joke: jokeInput.value,
    });
    console.log(response);
    updateJokes(response.data.data);
  } catch (err) {
    alert("something went wrong");
    console.log(err);
  } finally {
    jokeInput.value = "";
  }
};

const deleteJokes = async (id) => {
  try {
    const response = await instance.delete(`/jokes/${id}`);
    console.log(response);
    updateJokes(response.data.data);
  } catch (err) {
    alert("something went wrong");
    console.log(err);
  }
};

const updateJokes = (jokes) => {
  const jokeListHtml = jokes
    .map((item, index) => {
      return `<li>${item.joke}<button class="deleteButton" onclick="deleteJokes(${item.id})">x</button></li>`;
    })
    .join("");
  jokeList.innerHTML = jokeListHtml;
//   console.log(jokeList.innerHTML);
  
 
  
};

getButton.addEventListener("click", () => {
  // console.log("got Jokes");
  getJokes();
});

postButton.addEventListener("click", () => {
  // console.log('posted jokes');
  postJokes();
});
