const palindromes = function (str) {
    // Remove all non-word characters (punctuation, spaces, underscores), convert to lowercase
    const cleanString = str.replace(/[^\w]|_/g, "").toLowerCase();
    // Compare with its reverse
    return cleanString === cleanString.split('').reverse().join('');
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
