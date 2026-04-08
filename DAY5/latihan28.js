let buah = [
    {
        nama : "nanas",
        warna : "kuning",
        adaBiji : "tidak",
        harga : 9000
    },
    {
        nama : "jeruk",
        warna : "kuning",
        adaBiji : "ada",
        harga : 8000
    },
    {
        nama : "Semangka",
        warna : "Hijau & merah",
        adaBiji : "ada",
        harga : 10000
    },
    {
        nama : "Pisang",
        warna : "kuning",
        adaBiji : "tidak",
        harga : 5000
    }
]

let hasil = buah.filter(item => item.adaBiji === "tidak").map(item => item.nama);

console.log(`hasil buah buah ada tidak ada biji nya ${hasil}`);

