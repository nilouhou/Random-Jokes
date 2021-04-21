const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline = "";


punchlineBtn.addEventListener("click", getPunchline);
newJokeBtn.addEventListener('click', getJoke);


function getPunchline() {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add("pbubble");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}


async function getJoke() {
  const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
  const jokes = await jokePromise.json();

  jokes.forEach(joke => {
    setupDiv.innerHTML = joke.setup;
    punchline = joke.punchline;
  });

  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");

  punchlineDiv.innerHTML = "";
  punchlineDiv.classList.remove("pbubble");

};



getJoke();