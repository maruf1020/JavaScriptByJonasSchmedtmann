'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 5;
console.log(document.querySelector('.guess').value);
*/

let SectetNumber  = Math.trunc(Math.random()*20) +1 ;
let score = 20; 
let highscore = 0;
let lastGuessNumber = " ";
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = null;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //console.log(typeof guess);

  // when player guess 0
  if (guess == " ") {
    // document.querySelector('.message').textContent = 'No number 📛';
    displayMessage('No number 📛');
  }
  // when player guess more than 20
  else if(guess > 20){
    // document.querySelector('.message').textContent = 'you have to enter number between 1 to 20 💨';  
    displayMessage('you have to enter number between 1 to 20 💨');
  }
  // when player guess more than 20
  else if(guess < 0){
    // document.querySelector('.message').textContent = 'you have to enter number between 1 to 20 💨'; 
    displayMessage('you have to enter number between 1 to 20 💨'); 
  }  
  //when player is win
  else if(guess == SectetNumber){
    // document.querySelector('.message').textContent = 'Currect Number 🎉';  
    displayMessage('Currect Number 🎉'); 
    document.querySelector('.number').textContent = SectetNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    const message = document.querySelector('.message').textContent; 
    if (score > highscore  && message == 'Currect Number 🎉') {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    } 
  }
  // when player call the same number 
  else if(guess == lastGuessNumber){
    // document.querySelector('.message').textContent = 'You enter the same number 🛑';
    displayMessage('You enter the same number 🛑');     
  }
  //when guess worng number between 1-20
  else if(guess > SectetNumber ||  guess < SectetNumber){
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > SectetNumber ? 'Your gussing number is too high 🔺' : 'Your gussing number is too low 🔻';
      displayMessage(guess > SectetNumber ? 'Your gussing number is too high 🔺' : 'Your gussing number is too low 🔻'); 
    score--;
    document.querySelector('.score').textContent = score;
    }
    // when player lose the game
    else{
      // document.querySelector('.message').textContent = 'You lost the game 💥';    
      displayMessage('You lost the game 💥'); 
    document.querySelector('.score').textContent = 0;
    }
  }
  // // when player guess higher
  // else if(guess > SectetNumber){

  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Your gussing number is too high 🔺';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   }
  //   // when player lose the game
  //   else{
  //     document.querySelector('.message').textContent = 'You lost the game 💥';    
  //   document.querySelector('.score').textContent = 0;

  //   }
    
  // }
  // // when player guess lower
  // else if(guess < SectetNumber){
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Your gussing number is too low 🔻';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   }
  //   // when player lose the game
  //   else{
  //     document.querySelector('.message').textContent = 'You lost the game 💥';    
  //   document.querySelector('.score').textContent = 0;

  //   }
  // }
  else{
    // document.querySelector('.message').textContent = 'Enter a valid input';
    displayMessage('Enter a valid input');
  }

  lastGuessNumber = guess;

});


document.querySelector('.again').addEventListener('click' , function (){
  
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  SectetNumber  = Math.trunc(Math.random()*21) + 1; 
  document.querySelector('.score').textContent = 20; 
  score = 20;
  lastGuessNumber = " ";
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

})
//we done here for lectur 7 and 8 and pass the challange
