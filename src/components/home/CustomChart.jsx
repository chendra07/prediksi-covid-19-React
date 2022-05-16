import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment-timezone";

import { dummy } from "../../data/dummy_data";

const CustomChart = ({ dataActual, dataPredicted, title }) => {
  const options = {
    title: {
      text: title,
    },
    chart: {
      zoomType: "x",
    },
    xAxis: {
      type: "datetime",
      labels: {
        useHTML: true,
        formatter: function () {
          // console.log(
          //   moment(this.value).tz("Asia/Jakarta").format("YYYY-MM-DD")
          // );
          return (
            "<div>" +
            moment(this.value).tz("Asia/Jakarta").format("YYYY-MM-DD") +
            "</div>"
          );
        },
      },
    },
    yAxis: {
      title: {
        text: "Jumlah kematian",
      },
    },
    series: [
      {
        name: "Aktual",
        type: "line",
        data: dataActual.length ? dataActual : [],
      },
      {
        name: "Prediksi",
        type: "line",
        data: dataPredicted.length ? dataPredicted : [],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CustomChart;
