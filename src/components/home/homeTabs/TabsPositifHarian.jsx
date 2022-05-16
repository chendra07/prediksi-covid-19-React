import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import CustomChart from "../CustomChart";
import CustomTable from "../CustomTable";
import splitGraphData from "../../../utils/splitGraphData";

import "../../../styling/component/tabsPositifHarian.styles.scss";

const TabsPositifHarian = () => {
  const { dataCovid } = useSelector((state) => state.prediction);
  let meninggal = [];
  let positifHarian = [];
  let meninggal_prediction = [];
  let positifHarian_prediction = [];

  if (dataCovid.length !== 0) {
    [meninggal, positifHarian, meninggal_prediction, positifHarian_prediction] =
      splitGraphData(dataCovid);
  }

  const columns = [
    {
      title: "Tanggal",
      dataIndex: "Tanggal",
      key: "Tanggal",
      render(item, record) {
        return {
          props: {
            style: { background: record.isPredicted ? "#96C3CE" : "white" },
          },
          children: <div>{moment(item).format("DD-MM-YYYY")}</div>,
        };
      },
    },
    {
      title: "Positif Harian",
      dataIndex: "Positif_Harian",
      key: "Positif_Harian",
      render(item, record) {
        return {
          props: {
            style: { background: record.isPredicted ? "#96C3CE" : "white" },
          },
          children: (
            <div>
              {record.isPredicted ? `${item} (Prediction value)` : item}
            </div>
          ),
        };
      },
    },
  ];

  return (
    <div>
      <div className="itemContainer">
        <CustomChart
          title="Prediksi kasus Positif Harian akibat Covid-19 di kawasan Jakarta"
          dataActual={positifHarian.length !== 0 ? positifHarian : []}
          dataPredicted={
            positifHarian_prediction.length !== 0
              ? positifHarian_prediction
              : []
          }
        />
      </div>
      <div className="itemContainer">
        <CustomTable
          columns={columns}
          dataSource={dataCovid.length !== 0 ? dataCovid : []}
        />
      </div>
    </div>
  );
};

export default TabsPositifHarian;
