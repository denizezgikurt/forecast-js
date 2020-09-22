//returns any sleep hour per day, with 'day' parameter
const getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 6;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 9;
  }
}



//calculates total sleep hours
const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
// using an implicit return

console.log(getSleepHours('sunday'));


// a function to set the ideal sleep hours per night
const getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours * 7;
  //getting total hours of sleep needed per week
};


console.log(getActualSleepHours());
//sum of sleep hours per week
console.log(getIdealSleepHours());

//calculating the sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep!');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You slept ' + (idealSleepHours - actualSleepHours) + 'more than you need!');
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log('You should get more rest because you slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you need!');
  }
};


calculateSleepDebt();
