'use strict';
// ask name of visitor
// var visitorName = prompt('Would you kindly input your name?');
// alert('Howdy ' + visitorName + '!');

// Five Questions for user input, followed by alerts.
// var answer1 = prompt('Q1: Does Val care about astrology?').toLowerCase();
// console.log(answer1);
// if (answer1 === 'yes' || answer1 === 'y') {
//   alert('Correct! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
// }
// else {
//   alert('Wrong! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
// }
//
// var answer2 = prompt('Q2: Is Val happily married to a pretzel baker?').toLowerCase();
// console.log(answer2);
// if (answer1 === 'yes' || answer1 === 'y') {
//   alert('Partly correct. Val is happily married, but the man cannot bake.');
// }
// else {
//   alert('Wrong.');
// }
//
// var answer3 = prompt('Q3: Does Val love Country Music?').toLowerCase();
// console.log(answer3);
// if (answer1 === 'yes' || answer1 === 'y') {
//   alert('Yessssssss! You are correct.');
// }
// else {
//   alert('Wrong! Val loves Country Music.');
// }
//
// var answer4 = prompt('Q4: Does Val have a favorite north American bat species?').toLowerCase();
// console.log(answer4);
// if (answer1 === 'yes' || answer1 === 'y') {
//   alert('Yes indeed! Val loves Eptesicus fuscus, the big brown bat, found all over North America.');
// }
// else {
//   alert('You are correct. It is impossible to have a favorite bat species. They are all wonderful.');
// }
//
// var answer5 = prompt('Q1: Does Val wear brocolli?').toLowerCase();
// console.log(answer5);
// if (answer1 === 'yes' || answer1 === 'y') {
//   alert('Not! That would be silly.');
// }
// else {
//   alert('You are correct! Humans should not wear brocolli.');
// }

// Q6 - prompt numeric input. Respond to user if guess is too high, too low,
//or correct. Allow user four guesses.
var counter = 0;
var valsAge = 0;
var valsAge = parseInt(prompt('How old is Val?'));
while ((valsAge !== 39) && (counter < 4)) {
  if (valsAge < 39) {
    var valsAge = parseInt(prompt('Too low. Guess again.'));
    counter += 1;
    console.log(counter);
  }
  if (valsAge > 39) {
    var valsAge = parseInt(prompt('Too high. Guess again.'));
    counter += 1;
    console.log(counter);
  }
  if (valsAge === 39){
    alert('Correct answer.');
  }
  if (counter > 3) {
    alert('Sorry. You ran out of guesses.');
  }
}


// var answer6 = prompt('Q6: How old is Val?');
// console.log(answer6);
// if (answer6 > 47) {
//   prompt('Too high. Guess again.');
//   //prompt();
// }
// else if (answer6 < 47) {
//   prompt('Too low. Guess again.');
// }
// else {
//   alert('Correct!');
// }
