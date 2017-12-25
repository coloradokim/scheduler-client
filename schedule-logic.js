const hobbyData = JSON.parse(localStorage.getItem('data'));

var date = document.querySelector('input');
var time = document.querySelector('select');

function getUserInput() {
  date = date.value;
  time = time.value;
  console.log(createActivityList(hobbyData, time));
}

function createActivityList(hobbyArray, time) {
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
