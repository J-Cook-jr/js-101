function splitAmount (bill, service, people) {
    if (service === 'good') {
      split = (bill + (bill * .2))/ Number(people);
      return('The split amount for ' + people + ' people is $ ' + split);
    }
    else if (service === 'fair') {
      split = (bill + (bill * .15))/ Number(people);
      return('The split amount for ' + people + ' people is $ ' + split);
    }
    else if (service === 'bad') {
      split = (bill + (bill * .1))/ Number(people);
      return('The split amount for ' + people + ' people is $ ' + split);
    }
  }
  
  console.log(splitAmount(100, 'good', 5));
  console.log(splitAmount(40, 'fair', 2));
  console.log(splitAmount(300,'bad', 3))