// function unik (text){
//     let hasil = "";
//     for (let i = 0; text.length; i++){
//         if (!hasil.includes(text[i]) && text[i] !== " "){
//             hasil += text[i];
//         }
//     }
    
//     return hasil;
// }
// let text = "Super Bootcamp Fullstack Dev 2022";
// console.log(hasil);

function unik(text) {
let kalimat = text.toLowerCase();
  let hasil = "";


  for (let i = 0; i < text.length; i++) {
    let huruf = kalimat[i];

    // untuk liat jumlah kemunculan huruff

    let jumlah = (kalimat.split(kalimat[i]).length -1);

    if (jumlah == 1){
        hasil += huruf;
    }

  }
  return hasil;
}

// testing
let text = "Super Bootcamp Fullstack Dev 2022";
console.log(unik(text));