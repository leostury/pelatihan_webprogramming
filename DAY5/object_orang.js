console.log("=== Object literal ===")
let orang = {
    nama : "Nida",
    energi : 70,
    makanan : function(porsi){
        this.energi += porsi * 5;
        console.log(`Selamat Makan ${this.nama}, energi kamu bertambah menjadi ${this.energi}`);
    },

    kerja : function(jam){
        this.energi -= jam * 8;
        console.log(`selamat bekerja ${this.nama}, energi kamu berkurang jadi ${this.energi}`)
        console.log()
    }

}

console.log(`Energi kamu saat ini adalah : ${orang.energi}`);
orang.makanan(2);
orang.kerja(3);

console.log("=== function deciration")

function buatOrang(nama, energi){
    let orang = {};
    orang.nama = nama;
    orang.energi = energi;
    orang.makan = function(porsi){
        this.energi += porsi * 5;
         console.log(`Selamat Makan ${this.nama}, energi kamu bertambah menjadi ${this.energi}`);
    };
    orang.kerja = function(jam){
        this.energi -= jam * 8;
         console.log(`selamat bekerja ${this.nama}, energi kamu berkurang jadi ${this.energi}`)
     
    };
    return orang;
}

let nida = buatOrang("Nida", 70);
nida.makan(1);

function Orang(nama, energi){
    this.nama = nama;
    this.energi = energi;
}

Orang.prototype.makan = function(porsi){
    this.energi += porsi * 5;
     console.log(`Selamat Makan ${this.nama}, energi kamu bertambah menjadi ${this.energi}`);
};
Orang.prototype.kerja = function(jam){
    this.energi -= jam * 8;
     console.log(`selamat bekerja ${this.nama}, energi kamu berkurang jadi ${this.energi}`);
};

let budi = new Orang("Budi", 50);
budi.makan(2);
budi.kerja(4);