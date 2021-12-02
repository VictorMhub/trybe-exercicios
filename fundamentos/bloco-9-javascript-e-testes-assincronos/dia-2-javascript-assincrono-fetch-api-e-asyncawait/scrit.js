// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };
  const joke = document.querySelector('h2')
  
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => joke.innerText = data.joke)
};
window.onload = () => fetchJoke();
