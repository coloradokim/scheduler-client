const hobbyData = JSON.parse(localStorage.getItem('data'));

var date = document.querySelector('input');
var time = document.querySelector('select');

function getUserInput() {
  date = date.value;
  time = time.value;
  console.log(time);
  console.log(addMinTime(hobbyData, time));
}

function addMinTime(hobbyArray, time) {
  return hobbyArray.reduce((total, amount, index, array) => {
    total += array[index].minTime;
    return total;
  }, 0);
}
