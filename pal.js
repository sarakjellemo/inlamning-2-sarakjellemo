let isPalindrome = (word) => {
    let reverseWord = word.split('').reverse().join('');
    return reverseWord === word;
}

module.exports = isPalindrome; 