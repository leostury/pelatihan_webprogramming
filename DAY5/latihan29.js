const dataFilm = [];

function tambahdataFilm(nama, durasi, genre, tahun){
     let film = {
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    };

    dataFilm.push(film);
}

tambahdataFilm("LOTR", "2 jam", "action", "1999");
tambahdataFilm("avenger", "2 jam", "action", "2019");
tambahdataFilm("spiderman", "2 jam", "action", "2004");
tambahdataFilm("juon", "2 jam", "horror", "2004");


console.log(dataFilm);