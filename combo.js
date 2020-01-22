console.log("Combos!")

const isEven = num => ((num % 2) == 0) ? true : false;

console.log(isEven(10));
console.log(isEven(11));

const negative = (number) => {
    return(-number);
}

console.log(negative(27));
console.log(negative(-2));

//const checkPalindrome = text => {
    //text = text.toLowerCase();
    //return text == text.split('').reverse().join('');
//}

//if(checkPalindrome('skyward')){
    //console.log('Palindrome');
//} else {
    //console.log('Not Palindrome');
//}

const palindromeCheck = (text) => {
    const cleanText = text.toLowerCase().replace(' ', '');
    const opp = cleanText.split('').reverse().join('');
    console.log('text', cleanText);
    console.log('opp', opp);
    if (cleanText == opp) {
        return true;
    } else {
        return false;
    }
}

console.log('palindrome', palindromeCheck('cat'));
console.log('palindrome', palindromeCheck('bear'));
console.log('palindrome', palindromeCheck('race car'));
console.log('palindrome', palindromeCheck('poop'));


const animal = (str) => {
    if(str.toLowerCase() === 'alligator'){
        return 'small';
    }
    else{
        return 'wide';
    }
};

console.log(animal('alligator'));
console.log(animal('fish'));
console.log(animal('ALLiGator'))