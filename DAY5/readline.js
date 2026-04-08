const { read } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("masukkan angka", (input) =>{
    const nilai = input;

    if(nilai<0 || nilai >100 || isNaN(nilai)){
        console.log("nilai tidak valid");
    } else if (nilai <60){
        console.log("nilai E ");
    } else if (nilai <70){
        console.log("nilai D ");
    } else if (nilai <80){
        console.log("nilai C ");
    } else if (nilai <90){
        console.log("nilai D ");
    }else {
        console.log("nilai A ");
    }

    rl.close();
});