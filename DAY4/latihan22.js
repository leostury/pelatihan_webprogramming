// function introduce (nama, gender, pekerjaan, umur){

//     let panggilan = "";

//     if (gender === "laki-laki"){
//         panggilan = "Bapak";

//     } else if (gender === "perempuan"){
//         panggilan = "Ibu";
//     }

 
// }

//    let john = introduce("Sarah", "perempuan", "model", "28");
//     console.log(john);

//    let sarah = introduce("Sarah", "perempuan", "model", "28");
//     console.log(sarah);

function introduce(nama, gender, pekerjaan, umur) {
  let panggilan = "";

  if (gender === "laki-laki") {
    panggilan = "Bapak";
  } else if (gender === "perempuan") {
    panggilan = "Ibu";
  }

  return `${panggilan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
}

let john = introduce("John", "laki-laki", "penulis", "30");
console.log(john);

let sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah);