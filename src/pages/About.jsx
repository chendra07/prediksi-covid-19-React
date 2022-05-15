import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/about.styles.scss";

const About = () => {
  return (
    <div className="text_container">
      <h1 className="text_header">Tentang Website Prediksi Covid-19</h1>
      <p className="text_paragraph">
        Website ini dibuat dengan tujuan untuk menunjukkan hasil penelitian yang
        dilakukan yaitu memanfaatkan machine learning dengan metode Long
        short-term memory (LSTM) untuk memprediksi data kematian dan kasus
        positif harian akibat dari virus Covid-19 di kawasan Jakarta, Indonesia.
        Data yang digunakan sebagai bahan untuk melakukan pelatihan dan
        pengujian terhadap model dapat diakses melalui
        <em>
          <a className="text_link" href="https://corona.jakarta.go.id/id">
            {" "}
            <u>https://corona.jakarta.go.id/id</u>
          </a>
        </em>
      </p>
      <p className="text_red">
        <strong>Disclaimer:</strong> Prediksi yang dipakai menggunakan data dari
        awal tahun 2021 hingga 2022 dan hasil tidak selalu benar dan dapat
        berubah karena berbagai macam faktor seperti munculnya varian baru atau
        karena faktor lainnya.
      </p>
      <h1 className="text_header">Mekanisme penilaian level PPKM</h1>
      <p className="text_paragraph">
        PPKM dibagi menjadi 4 level dengan masing-masing memiliki kriterianya
        sendiri dan perhitungan level akan mengamati data 7 hari terbaru dan
        akan dikalkulasi dengan data jumlah penduduk jakarta pada tahun 2021
        yaitu sebanyak 10.609.681 orang.
      </p>
      <p className="text_paragraph">kriteria pada level 1:</p>
      <p className="text_paragraph">
        PPKM Level 1, daerah harus memiliki kasus konfirmasi kurang dari 20 per
        100.000 penduduk per minggu. Sementara, rawat inap RS harus berada pada
        angka kurang dari 5 per 100.000 penduduk per minggu dan kurang dari 1
        per 100.000 penduduk per minggu untuk angka kematian.
      </p>
      <p className="text_paragraph">kriteria pada level 2:</p>
      <p className="text_paragraph">
        PPKM Level 2 diterapkan jika daerah memiliki kasus konfirmasi 20 sampai
        kurang dari 50 per 100.000 penduduk per minggu. Adapun, rawat inap RS
        harus berada pada angka 5 sampai kurang dari 10 per 100.000 penduduk per
        minggu dan 1 sampai kurang dari 2 per 100.000 penduduk per minggu untuk
        angka kematian.
      </p>
      <p className="text_paragraph">kriteria pada level 3:</p>
      <p className="text_paragraph">
        PPKM Level 3 diterapkan apabila daerah memiliki kasus konfirmasi 50-150
        per 100.000 penduduk per minggu. Sementara, rawat inap RS harus berada
        pada angka 10-30 dari 10 per 100.000 penduduk per minggu dan 2-5 per
        100.000 penduduk per minggu untuk angka kematian.
      </p>
      <p></p>
      <p className="text_paragraph">kriteria pada level 4:</p>
      <p className="text_paragraph">
        PPKM Level 4 diterapkan jika daerah memiliki kasus konfirmasi lebih dari
        150 per 100.000 penduduk per minggu. Sementara, rawat inap RS harus
        berada pada angka lebih dari 30 per 100.000 penduduk per minggu dan
        lebih dari 5 per 100.000 penduduk per minggu untuk angka kematian.
      </p>
      <p className="text_paragraph">
        Sumber data penduduk jakarta:
        <a
          className="text_link"
          href="https://jakarta.bps.go.id/indicator/12/111/1/jumlah-penduduk-provinsi-dki-jakarta-menurut-kelompok-umur-dan-jenis-kelamin.html"
        >
          <u>
            {" "}
            https://jakarta.bps.go.id/indicator/12/111/1/jumlah-penduduk-provinsi-dki-jakarta-menurut-kelompok-umur-dan-jenis-kelamin.html
          </u>
        </a>
      </p>
      <p className="text_paragraph">
        Sumber kriteria level PPKM:
        <a
          className="text_link"
          href="https://www.kompas.com/tren/read/2021/10/07/170200065/beda-ppkm-level-1-hingga-level-4-ini-indikator-penentuannya-?page=all"
        >
          <u>
            {" "}
            https://www.kompas.com/tren/read/2021/10/07/170200065/beda-ppkm-level-1-hingga-level-4-ini-indikator-penentuannya-?page=all
          </u>
        </a>
      </p>
      <p className="text_paragraph">
        <a className="text_link" href="https://www.rawpixel.com/">
          Image by rawpixel.com
        </a>
      </p>
    </div>
  );
};

export default About;
