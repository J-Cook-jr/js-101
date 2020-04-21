function madlib(){
const p = 'Susan favorite school subject is reading';
const regex = /Susan/gi;

console.log(p.replace(regex, 'Jeff'));

const g= 'Jeff favorite school subject is reading';
console.log(g.replace('reading', 'front end web development'));
} 
madlib()