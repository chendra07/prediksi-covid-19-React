import React from "react";
import { dummy } from "../data/dummy_data";

const scaleDownData = (value, population) => {
  //100.000 didapat dari persyaratan level PPKM (src: https://www.kompas.com/tren/read/2021/10/07/170200065/beda-ppkm-level-1-hingga-level-4-ini-indikator-penentuannya-?page=all)
  let x = (value / population) * 100000;

  //    value         x               value
  //  -------- =  -------- ==> x = ----------- * 100.000
  //  populasi    100.000           populasi

  return x;
};

const findLevelPPKM = (data) => {
  let baseDays = 7;
  //   let data = dummy;
  let temp = [];
  let totalMeninggal = 0; //didapat dari nilai tertinggi dalam 7 hari terahkir dikurangi nilai terendah
  let totalPositifHarian = 0; //didapat dari penjumlahan semua positif harian dalam 7 hari terakhir
  //populasi penduduk JKT tahun 2021 https://jakarta.bps.go.id/indicator/12/111/1/jumlah-penduduk-provinsi-dki-jakarta-menurut-kelompok-umur-dan-jenis-kelamin.html
  let totalPopulasi = 10609681;
  //nilai dalam waktu 7 hari

  let lastWeekData = data.slice(Math.max(data.length - baseDays, 0));

  // console.log("lastWeek: ", lastWeekData);

  lastWeekData.forEach((element) => {
    totalPositifHarian += element.Positif_Harian;
    temp.push(element.Meninggal);
  });

  totalMeninggal = Math.max(...temp) - Math.min(...temp);

  // console.log("max: ", Math.max(...temp));
  // console.log("min: ", Math.min(...temp));

  // console.log("Meninggal: ", totalMeninggal);
  // console.log("Positif: ", totalPositifHarian);

  totalMeninggal = scaleDownData(totalMeninggal, totalPopulasi);
  totalPositifHarian = scaleDownData(totalPositifHarian, totalPopulasi);

  // console.log("Meninggal: ", totalMeninggal);
  // console.log("Positif: ", totalPositifHarian);

  if (totalPositifHarian < 20 && totalMeninggal < 1) {
    return " 1 ";
  } else if (
    totalPositifHarian >= 20 &&
    totalPositifHarian < 50 &&
    totalMeninggal >= 1 &&
    totalMeninggal < 2
  ) {
    return " 2 ";
  } else if (
    totalPositifHarian >= 50 &&
    totalPositifHarian < 150 &&
    totalMeninggal >= 2 &&
    totalMeninggal < 5
  ) {
    return " 3 ";
  } else if (totalPositifHarian >= 150 && totalMeninggal >= 5) {
    return " 4 ";
  }
};

export default findLevelPPKM;
