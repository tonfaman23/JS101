console.log("Combos!")

const evenOdd = (nums) =>{
    if (nums%2 == 0)
    return true;
    else {
        return false;
    }
}

const nums = 8;

const opposite = (num) =>{
    console.log(-num);
}

const num = 17;

palindrome = (word) => {
    let strLen = word.length;
    word = word.toLocaleLowerCase();

    if (strLen === 0 || strLen === 1) {
        return true;
    }
    if (word[0] === word[strLen - 1]) {
        return palindrome(word.slice(1, strLen -1) );
    }
    return false;
};

const word = (racecar);