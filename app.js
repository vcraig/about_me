'use strict';
// ask name of visitor
var visitorName = prompt('Would you kindly input your name?');
alert('Howdy ' + visitorName + '!');

// Five Questions for user input, followed by alerts.

var answer1 = prompt('Q1: Does Val care about astrology?').toLowerCase();
console.log(answer1);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Correct! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
}
else {
  alert('Wrong! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
}

var answer2 = prompt('Q2: Is Val happily married to a pretzel baker?').toLowerCase();
console.log(answer2);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Partly correct. Val is happily married, but the man cannot bake.');
}
else {
  alert('Wrong.');
}

var answer3 = prompt('Q3: Does Val love Country Music?').toLowerCase();
console.log(answer3);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Yessssssss! You are correct.');
}
else {
  alert('Wrong! Val loves Country Music.');
}

var answer4 = prompt('Q4: Does Val have a favorite north American bat species?').toLowerCase();
console.log(answer4);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Yes indeed! Val loves Eptesicus fuscus, the big brown bat, found all over North America.');
}
else {
  alert('You are correct. It is impossible to have a favorite bat species. They are all wonderful.');
}

var answer5 = prompt('Q1: Does Val wear brocolli?').toLowerCase();
console.log(answer5);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Not! That would be silly.');
}
else {
  alert('You are correct! Humans should not wear brocolli.');
}
