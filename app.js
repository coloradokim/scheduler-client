const API_URL = 'https://mysterious-dawn-91753.herokuapp.com/';

document.body.onload = getData();

var date = document.querySelector('input');
var time = document.querySelector('select');

function getData() {
  if (localStorage.getItem('data')) {
    console.log('no need for an ajax call');
  } else {
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      localStorage.setItem('data', JSON.stringify(response.data));
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }
}

function reset() {
  date.value = '';
  time.value = '';
}

var submitButton = document.getElementsByClassName('button is-link')[0];

submitButton.addEventListener('click', getUserInput, false);

function getUserInput(e) {
  e.preventDefault();
  date = date.value;
  time = time.value;
  // window.location.href = "schedule.html";
  showActivities()
}
