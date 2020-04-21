let good = 'twenty percent';
let fair = 'fifthteen percent';
let bad = 'ten percent';


function tipAmount(service) {
    
    if ((service === good)) {
        return ( 100 * .2);
    }
    else if ((service === fair)) {
        return ( 100 * .15);
    }
    else if ((service === bad)) {
        return ( 100 * .1);
    }
}
console.log (tipAmount(good));