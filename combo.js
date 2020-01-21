console.log("Combos!")

const isEven = num => ((num % 2) == 0) ? true : false;

console.log(isEven(10));
console.log(isEven(11));

const negative = (number) => {
    return(-number);
}

console.log(negative(27));

const checkPalindrome = str => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}

if(checkPalindrome('skyward')){
    console.log('Palindrome');
} else {
    console.log('Not Palindrome');
}