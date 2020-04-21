function tipAmount (bill, service) {
    if (service == 'good') {
      tip = bill * .2;
      return('The tip for good service is $ ' + tip);
    }
    else if (service == 'fair') {
      tip = bill * .15;
      return('The tip for fair service is $ ' + tip);
    }
    else if (service == 'bad') {
      tip = bill * .1;
      return('The tip for bad service is $ ' +_tip);
    }
  }
  
  console.log(tipAmount(100, 'good'));
  console.log(tipAmount(40, 'fair'));