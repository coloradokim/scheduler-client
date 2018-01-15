const hobbyData = JSON.parse(localStorage.getItem('data'));

// const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

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

function showActivities() {
  var columnDiv = document.getElementsByClassName('column');
  let activityList = createActivityList(hobbyData, time);
  var newSection = document.createElement('section');

  for (var i = 0; i < activityList.length; i++) {
    var newHeader = document.createTextNode(JSON.stringify(activityList[i].activity));

    newSection.appendChild(newHeader);
    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newSection, currentDiv);
  }
}
