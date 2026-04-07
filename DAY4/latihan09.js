let sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javarscript";

let jumlah = sentence.length;

console.log(jumlah);

if (jumlah < 10) {
    console.log("Pendek");
} else if (jumlah >= 10 && jumlah <= 30) {
    console.log("Sedang");
} else {
    console.log("Panjang");
}

// if (sentence.length < 10){
//     console.log("pendek");
// } else if (sentence.length > 30 ){
//     console.log("panjang");
// } else {
//     console.log("sedang");
// }