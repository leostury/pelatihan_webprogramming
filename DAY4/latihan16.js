var sentence = "Fullstack Developer";
var hasil = "";


for (let i = 0; i < sentence.length; i++) {
  let huruf = sentence[i].toLowerCase();

  if (!"aiueo".includes(huruf) && huruf !== " ") {
    hasil += huruf;
  }
}

console.log(hasil);