const API_URL = 'https://mysterious-dawn-91753.herokuapp.com/';
const LOCAL_URL = 'http://localhost:3000';

document.onload = getData();

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
