'use strict';
//tallyCorrect will hold the number of correct responses.
var tallyCorrect = 0;
//ask name of visitor
var visitorName = prompt('Would you kindly input your name?');
alert('Howdy ' + visitorName + '!');

// Five Questions for user input, followed by alerts.
function runLogic1() {
  var answer1 = prompt('Q1: Does Val care about astrology?').toLowerCase();
  console.log('answer1 is ' + answer1);
  if (answer1 === 'yes' || answer1 === 'y') {
    tallyCorrect++;
    alert('Correct! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
  }
  else {
    alert('Wrong! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
  }
}
runLogic1();

function runLogic2() {
  var answer2 = prompt('Q2: Is Val happily married to a pretzel baker?').toLowerCase();
  console.log('answer2 is ' + answer2);
  if (answer2 === 'yes' || answer2 === 'y') {
    tallyCorrect++;
    alert('Partly correct. Val is happily married, but the man cannot bake.');
  }
  else {
    alert('Wrong.');
  }
}
runLogic2();

function runLogic3() {
  var answer3 = prompt('Q3: Does Val love Country Music?').toLowerCase();
  console.log('answer3 is ' + answer3);
  if (answer3 === 'yes' || answer3 === 'y') {
    tallyCorrect++;
    alert('Yessssssss! You are correct.');
  }
  else {
    alert('Wrong! Val loves Country Music.');
  }
}
runLogic3();

function runLogic4() {
  var answer4 = prompt('Q4: Does Val have a favorite north American bat species?').toLowerCase();
  console.log('answer4 is ' + answer4);
  if (answer4 === 'yes' || answer4 === 'y') {
    tallyCorrect++;
    alert('Yes indeed! Val loves Eptesicus fuscus, the big brown bat, found all over North America.');
  }
  else {
    alert('Wrong. Val loves bats, Eptesicus fuscus, the big brown bat.');
  }
}
runLogic4();

function runLogic5() {
  var answer5 = prompt('Q1: Does Val wear brocolli?').toLowerCase();
  console.log('answer5 is ' + answer5);
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('Wrong. That would be silly.');
  }
  else {
    tallyCorrect++;
    alert('Correct answer! Humans should not wear brocolli.');
  }
}
runLogic5();

// Question 6 - prompt numeric input. Respond to user if guess is too high, too low,
// or correct. Allow user four guesses.
var counter = 0;
console.log(counter + ' guesses counted');
console.log('while loop about to start');
function runLogic6() {
  var valsAge = parseInt(prompt('How old is Val?'));
  while (counter < 3) {
    if (valsAge === 39) {
      alert('Correct answer.');
      tallyCorrect += 1;
      console.log(counter + ' guesses counted');
      break;
    }
    else if (valsAge < 39) {
      var valsAge = parseInt(prompt('Too low. Guess again.'));
      counter += 1;
      console.log(counter + ' guesses counted');
    }
    else if (valsAge > 39) {
      var valsAge = parseInt(prompt('Too high. Guess again.'));
      counter += 1;
      console.log(counter + ' guesses counted');
    }
    else if (isNaN(valsAge)){
      var valsAge = prompt('Wrong guess. Try again!');
      counter++;
      console.log(counter + ' guesses counted');
    }
  }
  if (counter === 4) {
    alert('Sorry. You ran out of guesses.');
  }
}
runLogic6();
console.log('Tally following Q6 = ' + tallyCorrect);

//Question 7: User given six tries to guess one out of several correct responses.
// function runLogic7() {
//   var formerDomicile = ['ct','nj','ny','tx','connecticut','new jersey','new york','texas'];
//   var counter = 0;
//   while (counter < 6) {
//     var myQuestion = prompt('Guess which state I have lived in.').toLowerCase();
//     counter++;
//     console.log(counter + ' guesses counted');
//     console.log('lowercase response ' + myQuestion);
//     for (var i = 0; i < formerDomicile.length; i++) {
//       if (myQuestion === formerDomicile[i]) {
//         alert('correct');
//         counter = 9;
//         tallyCorrect++;
//         break;
//       }
//     }
//     if (counter === 6) {
//       alert('Sorry. You have used all your attempts.');
//     }
//   }
// }
// runLogic7();
console.log('Tally following Q7 = ' + tallyCorrect);
alert('Congrats! You got ' + tallyCorrect + ' correct responses.');
