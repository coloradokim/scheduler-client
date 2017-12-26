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
  window.location.href = "schedule.html";
  showActivities()
}

const hobbyData = JSON.parse(localStorage.getItem('data'));

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

var shuffledArray = shuffleArray(hobbyData)

var columnDiv = document.getElementsByClassName('column');

function createActivityList(shuffledArray, time) {
  let totalTime = 0;
  let activities = [];
  for (var i = 0; i < hobbyArray.length; i++) {
    if (totalTime <= time) {
      totalTime += hobbyArray[i].minTime;
      activities.push(hobbyArray[i]);
    } else {
      break;
    }
  }
  activities.pop();
  return activities;
}

function showActivities() {
  let activityList = createActivityList(hobbyData, time);
  var newSection = document.createElement("section");
  var newContent = document.createTextNode('hi');
  newSection.appendChild(newContent);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newSection, currentDiv);
}
