console.log('Starting on objects');
//returns length of word
const wordLength = (word) => {
    return word.length;
}

console.log('num of letters', wordLength('cat'));
console.log('num of letters', wordLength('SuperKaliFragelisticExpealidocius'));

const ageCheck = (age) => {
  if(age >= 21){
  console.log('PARTY!!!');
} else {
    console.log('no drinks for you');
}}


ageCheck('12');
ageCheck('22');