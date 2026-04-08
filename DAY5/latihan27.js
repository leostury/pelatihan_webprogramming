function cekPermutasi(str1, str2){
    if (str1.length !== str2.length){
        return false;
    } else {
        let a = str1.split('').sort().join('');
        let b = str2.split('').sort().join('');

        return a === b;
    }
}

console.log(cekPermutasi('abah', 'haba'))