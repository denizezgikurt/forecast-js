let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
//for a number between 0 and 1000

let registeredEarly = false;

let age = 18;

if (age > 18 && registeredEarly == true) {
  console.log(registeredEarly);
  raceNumber += 1000;
  console.log(raceNumber);
}

if (age > 18 && registeredEarly == true) {
  console.log(`Runner ${raceNumber} will race at 9:30 am`)}
   else if (age > 18 && registeredEarly == false) {
    console.log(`Runner ${raceNumber} will race at 11:00 am`)};


if (age < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30 ---- Youth registrants run at 12:30 pm (regardless of registration)`)
}

else
console.log ('Please see registration desk');
