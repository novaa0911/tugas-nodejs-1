// biodata.js

const biodata = {
  nama: "Nova Nurachman",
  tempatLahir: "Bekasi",
  tanggalLahir: "09 November 1998",
  alamat: "Kp. Jatimulya Gg. Sawo RT003/008 Jatimulya Tambun Selatan Bekasi",
};

function getNama() {
  return biodata.nama;
}

function getTempatLahir() {
  return biodata.tempatLahir;
}

function getTanggalLahir() {
  return biodata.tanggalLahir;
}

function getAlamat() {
  return biodata.alamat;
}

module.exports = {
  getNama,
  getTempatLahir,
  getTanggalLahir,
  getAlamat,
};
