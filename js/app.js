//https://icanhazdadjoke.com/api

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

// calling data with async_await api
async function generateJoke() {
 const config = { //postman.com
  headers: {
   Accept: 'application/json',
  },
 }

 const res = await fetch('https://icanhazdadjoke.com', config)

 const data = await res.json();

 jokeEl.innerHTML = data.joke;
}



//calling data with .then
// function generateJoke() {
//  const config = { //postman.com
//   headers: {
//    Accept: 'application/json',
//   },
//  }

//  fetch('https://icanhazdadjoke.com', config)
//   .then(res => res.json())
//   .then(data => {
//    jokeEl.innerHTML = data.joke
//   })
//   .catch(error => console.log(error))
// }