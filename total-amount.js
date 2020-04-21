function totalAmount (bill, service) {
    if (service == 'good') {
      total = bill + (bill * .2);
      return('The total including tip is $ ' + total);
    }
    else if (service === 'fair') {
      total = bill + (bill * .15);
      return('The total including tip is $ ' + total);
    }
    else if (service === 'bad') {
      total = bill + (bill * .1);
      return('The total including tip is $ ' + total);
    }
  }
  
  console.log(totalAmount(200, 'good'));
  console.log(totalAmount(60, 'fair'));
  console.log(totalAmount(100,'bad'));