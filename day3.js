// document.getElementById("demo").innerHTML = "My First Javascript";

// var nama = "Ibnu";
// var tahunLahir = 1994;
// var umur = 2021-tahunLahir;
// var suhuCelsius = umur;
// var suhuFahrenheit = (umur * 9/5) + 32;

// document.getElementById("nama").innerHTML = nama;
// document.getElementById("umur").innerHTML = umur;
// document.getElementById("suhuFahrenheit").innerHTML = suhuFahrenheit;

// var myProfile = {
//     nama: "Ibnu",
//     kota: "Bekasi",
//     umur: 27,
//     tinggi: 171,
//     mobil: ["Lamborghini", "Mustang", "Porsche", "Corvette"]
// };

// myProfile.kota = "Bandung"
// myProfile.umur = 25;

// document.getElementById("nama").innerHTML = myProfile.nama;
// document.getElementById("kota").innerHTML = myProfile.kota;
// document.getElementById("umur").innerHTML = myProfile.umur;
// document.getElementById("tinggi").innerHTML = myProfile.tinggi;
// document.getElementById("mobil1").innerHTML = myProfile.mobil[0];
// document.getElementById("mobil2").innerHTML = myProfile.mobil[1];
// document.getElementById("mobil3").innerHTML = myProfile.mobil[2];
// document.getElementById("mobil4").innerHTML = myProfile.mobil[3];

function hitungUmur(tahunIni, tahunLahir) {
    return tahunIni - tahunLahir;
}

function hitungMobil(arrayMobil) {
    return arrayMobil.length;
}

var myProfile = {
    nama    :   "Ibnu",
    kota    :   "Bekasi",
    lahir   :   1994,
    tinggi  :   171,
    mobil: ["Lamborghini", "Mustang", "Toyota", "Jeep", "BMW"]
}

document.getElementById("nama").innerHTML = myProfile.nama;
document.getElementById("kota-asal").innerHTML = myProfile.kota;
document.getElementById("usia").innerHTML = hitungUmur(2021, myProfile.lahir);
document.getElementById("tinggi-badan").innerHTML = myProfile.tinggi;
document.getElementById("jumlah-mobil").innerHTML = hitungMobil(myProfile.mobil);
