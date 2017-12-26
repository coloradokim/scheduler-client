// const hobbyData = JSON.parse(localStorage.getItem('data'));
//
// const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)
//
// console.log(shuffleArray(hobbyData));
//
// var columnDiv = document.getElementsByClassName('column');
//
// function createActivityList(hobbyArray, time) {
//   let totalTime = 0;
//   let activities = [];
//   for (var i = 0; i < hobbyArray.length; i++) {
//     if (totalTime <= time) {
//       totalTime += hobbyArray[i].minTime;
//       activities.push(hobbyArray[i]);
//     } else {
//       break;
//     }
//   }
//   activities.pop();
//   return activities;
// }
//
// function showActivities() {
//   let activityList = createActivityList(hobbyData, time);
//   var newSection = document.createElement("section");
//   var newContent = document.createTextNode('hi');
//   newSection.appendChild(newContent);
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newSection, currentDiv);
// }
