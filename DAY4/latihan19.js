

const word = "car";
let hasil = [];

for (let i = 0; i < word.length; i++) {
  let temp = "";

  for (let j = i; j < word.length; j++) {
    temp += word[j];
    hasil.push(temp);
  }
}

console.log(hasil);


let word1 = "car";
const hasil1 = [];
for (let i=0; i< word.length; i++){
    console.log("perulangan ke ${i+1} (i = ${i}) ========");
    for(let j = i; j<word.length; j++){
        hasil1.push(word1.substring(1, j+1));
        console.log('j = ${j}');
        consolole.log('hasil1')
    }
}
