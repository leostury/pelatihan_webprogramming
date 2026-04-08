function palindrome(kata){
    const balik = kata.split("").reverse().join("");
    return kata == balik;
}

console.log(palindrome("katak"));
console.log(palindrome("halo"));