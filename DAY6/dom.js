const tombol = document.querySelector("button");
const judul = document.getElementById("judul");

tombol.addEventListener("click", function(){
    judul.textContent = "Belajar Dom itu seru!";
});