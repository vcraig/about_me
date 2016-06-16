'use strict';
//ask name of visitor
var visitorName = prompt('Would you kindly input your name?');
alert('Howdy ' + visitorName + '!');

// Five Questions for user input, followed by alerts.
function runLogic1() {
  var answer1 = prompt('Q1: Does Val care about astrology?').toLowerCase();
  console.log(answer1);
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Correct! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
  }
  else {
    alert('Wrong! Val is an Early Cambrian Astrologer. She was born under the sign of the Trilobite.');
  }
}
runLogic1();

function runLogic2() {
  var answer2 = prompt('Q2: Is Val happily married to a pretzel baker?').toLowerCase();
  console.log(answer2);
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Partly correct. Val is happily married, but the man cannot bake.');
  }
  else {
    alert('Wrong.');
  }
}
runLogic2();

function runLogic3() {
  var answer3 = prompt('Q3: Does Val love Country Music?').toLowerCase();
  console.log(answer3);
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Yessssssss! You are correct.');
  }
  else {
    alert('Wrong! Val loves Country Music.');
  }
}
runLogic3();

function runLogic4() {
  var answer4 = prompt('Q4: Does Val have a favorite north American bat species?').toLowerCase();
  console.log(answer4);
  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Yes indeed! Val loves Eptesicus fuscus, the big brown bat, found all over North America.');
  }
  else {
    alert('You are correct. It is impossible to have a favorite bat species. They are all wonderful.');
  }
}
runLogic4();

function runLogic5() {
  var answer5 = prompt('Q1: Does Val wear brocolli?').toLowerCase();
  console.log(answer5);
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('Not! That would be silly.');
  }
  else {
    alert('You are correct! Humans should not wear brocolli.');
  }
}
runLogic5();

// Q6 - prompt numeric input. Respond to user if guess is too high, too low,
// or correct. Allow user four guesses.
var tallyCorrect = 0;
var counter = 0;
// var valsAge = 0;
console.log('while loop about to start');
console.log(counter);
function runLogic6() {
  var valsAge = parseInt(prompt('How old is Val?'));
// console.log(valsAge);
  while (counter < 3) {
    if (valsAge === 39) {
      console.log('is this happening?');
      alert('Correct answer.');
      tallyCorrect += 1;
      break;
    }
    else if (valsAge < 39) {
      var valsAge = parseInt(prompt('Too low. Guess again.'));
      counter += 1;
      console.log(counter);
    }
    else if (valsAge > 39) {
      var valsAge = parseInt(prompt('Too high. Guess again.'));
      counter += 1;
      console.log(counter);
    }
    else if (isNaN(valsAge)){
      var valsAge = prompt('Wrong guess. Try again!');
      counter++;
      console.log(counter);
    }
  }
  if (counter > 3) {
    alert('Sorry. You ran out of guesses.');
  }
}
runLogic6();
console.log('Tally following Q6 = ' + tallyCorrect);

//Q7: User given six tries to guess one out of several correct responses.
// var tallyCorrect = 0;
function runLogic7() {
  var formerDomicile = ['ct','nj','ny','tx','connecticut','new jersey','new york','texas'];
  var counter = 0;
  while (counter < 6) {

    var myQuestion = prompt('Guess which state I have lived in.').toLowerCase();
    counter++;
    console.log('lowercase response ' + myQuestion);
    for (var i = 0; i < formerDomicile.length; i++) {
      if (myQuestion === formerDomicile[i]) {
        alert('correct');
        counter = 9;
        tallyCorrect++;
        console.log(i);
        break;
      }
    }
    if (counter === 6) {
      alert('Sorry. You have used all your attempts.');
    }
  }
}
runLogic7();

console.log('Tally following Q7 = ' + tallyCorrect);
document.write('Congrats! You submitted ' + tallyCorrect + ' correct responses.');
