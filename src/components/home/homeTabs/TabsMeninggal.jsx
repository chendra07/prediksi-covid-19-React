import React from "react";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import CustomChart from "../CustomChart";
import CustomTable from "../CustomTable";

import { dummy } from "../../../data/dummy_data";

import "../../../styling/component/tabsMeninggal.styles.scss";
import splitGraphData from "../../../utils/splitGraphData";

const TabsMeninggal = () => {
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
      title: "Meninggal",
      dataIndex: "Meninggal",
      key: "Meninggal",
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
          title="Prediksi kasus Meninggal akibat Covid-19 di kawasan Jakarta"
          dataActual={meninggal.length !== 0 ? meninggal : []}
          dataPredicted={
            meninggal_prediction.length !== 0 ? meninggal_prediction : []
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

export default TabsMeninggal;
