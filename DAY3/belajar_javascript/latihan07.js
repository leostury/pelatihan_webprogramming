var pertama ="saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var kata1 = pertama.substring(0, 1).toUpperCase() + pertama.substring(1);
var kata2 = kedua.substring(0, 1).toUpperCase() + kedua.substring(1, 5) + kedua.substring(5).toUpperCase();
var kata3 = ketiga.substring(0, 1).toUpperCase() + ketiga.substring(1, 6) + ketiga.substring(6).toUpperCase();
var kata4 = keempat.toUpperCase();

console.log(`${pertama} ${kedua} ${ketiga} ${keempat}`);
