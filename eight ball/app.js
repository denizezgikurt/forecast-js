let userName = '';

// if (userName) {
//   console.log ('Hello, ' + userName + '!');
// } else {
//   console.log ('Hello!');
// }

userName ?
console.log ('Hello, ' + userName + '!') :
console.log ('Hello!');

let userQuestion = 'Am i gonna be a great coder?';
console.log (`The user ${userName} asked; ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0 :
  eightBall = 'It is certain';
  console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 1 :
  eightBall = 'It is decidedly so';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 2 :
  eightBall = 'Reply hazy try again';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 3 :
  eightBall = 'Cannot predict now';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 4 :
  eightBall = 'Do not count on it';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 5 :
  eightBall = 'My sources say no';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 6 :
  eightBall = 'Outlook not so good';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 7 :
  eightBall = 'Outlook not so good';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
  case 8 :
  eightBall = 'Signs point to yes';
   console.log(`Eight Ball responds ${eightBall}`);
    break;
}

//same code in if else statments:

if (randomNumber = 0) {
  eightBall = 'It is certain';
  console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 1) {
  eightBall = 'It is decidedly so';
   console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 2) {
  eightBall = 'Reply hazy try again';
   console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 3) {
  eightBall = 'Cannot predict now';
   console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 4) {
  eightBall = 'Do not count on it';
   console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 5) {
  eightBall = 'My sources say no';
   console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 6) {
  eightBall = 'Outlook not so good';
   console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 7) {
  eightBall = 'Outlook not so good';
   console.log(`Eight Ball responds ${eightBall}`) }
    else if (randomNumber = 8) {
  eightBall = 'Signs point to yes';
   console.log(`Eight Ball responds ${eightBall}`) } ;
