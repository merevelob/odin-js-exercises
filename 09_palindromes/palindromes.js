const palindromes = function (str) {
    const wordsJoined = str.split(/\W+/).join('').toLowerCase();
    const reversed = wordsJoined.split('').reverse().join('');
    return (wordsJoined === reversed);
};

// Do not edit below this line
module.exports = palindromes;
