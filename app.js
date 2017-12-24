const API_URL = 'https://mysterious-dawn-91753.herokuapp.com/';
const LOCAL_URL = 'http://localhost:3000';

function getData() {
  if (localStorage.getItem('data')) {
    console.log('no need for an ajax call');
  } else {
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      localStorage.setItem("data", JSON.stringify(response.data));
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }
}


function createText() {
  let div = document.querySelector('.hobbies');
  let newParagraph = document.createElement('p');
  let newText = document.createTextNode(localStorage.getItem('data'));
  newParagraph.append(newText);
  div.append(newParagraph);
}
document.onload = getData()

function submitUserInput() {
  console.log('hi!');
}
