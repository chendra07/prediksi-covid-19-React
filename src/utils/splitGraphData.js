import React from "react";
import { dummy } from "../data/dummy_data";

const splitGraphData = (data) => {
  let meninggal = [];
  let positifHarian = [];
  let meninggal_prediction = [];
  let positifHarian_prediction = [];

  // console.log("heyyy: ", data);

  if (data.length) {
    data.forEach((element) => {
      if (element.isPredicted == true) {
        meninggal_prediction.push([
          parseInt(element.unix),
          parseInt(element.Meninggal),
        ]);
        positifHarian_prediction.push([
          parseInt(element.unix),
          parseInt(element.Positif_Harian),
        ]);
      } else {
        meninggal.push([parseInt(element.unix), parseInt(element.Meninggal)]);
        positifHarian.push([
          parseInt(element.unix),
          parseInt(element.Positif_Harian),
        ]);
      }
    });

    // console.log("meninggal: ", meninggal);
    // console.log("positifHarian: ", positifHarian);
    // console.log("pred_meninggal: ", meninggal_prediction);
    // console.log("pred_positif: ", positifHarian_prediction);

    return [
      // [...meninggal, meninggal_prediction[0]],
      // [...positifHarian, positifHarian_prediction[0]],
      meninggal,
      positifHarian,
      meninggal_prediction,
      positifHarian_prediction,
    ];
  }
};

export default splitGraphData;
