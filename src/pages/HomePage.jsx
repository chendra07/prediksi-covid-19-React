import React, { useEffect, useState } from "react";
import { Tabs, DatePicker, Spin } from "antd";
import moment from "moment";
import { RetweetOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import "../styling/homePage.styles.scss";
import CustomContainer from "../components/CustomContainer";
import CustomDatePicker from "../components/home/CustomDatePicker";
import TabsPositifHarian from "../components/home/homeTabs/TabsPositifHarian";
import TabsMeninggal from "../components/home/homeTabs/TabsMeninggal";
import { dummy } from "../data/dummy_data";
import { loadingActions, predictionActions } from "../redux/actions";

let timeDiff = 1;

const HomePage = () => {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;
  const [pickedDate, setpickedDate] = useState([]);
  const { dismissLoading, showLoading } = loadingActions;
  const { postPredictionData } = predictionActions;
  const { loading } = useSelector((state) => state.loading);
const { levelPPKM } = useSelector((state) => state.prediction);

  useEffect(() => {
    console.log("hello there");
    dispatch(postPredictionData(timeDiff, showLoading, dismissLoading));
  }, []);

  useEffect(() => {
    console.log("picked: ", pickedDate);
    if (pickedDate[1] == null) {
      return;
    } else {
      timeDiff = pickedDate[1].diff(pickedDate[0], "days") + 1;
    }
  }, [pickedDate]);

  return (
    <div className="home_page_container">
      <div className="option_container">
        <div className="date_picker_container">
          <div className="date_title">Tanggal Prediksi:</div>
          <CustomDatePicker pickedDate={setpickedDate} />
          <div className="refresh_icon">
            <RetweetOutlined
              onClick={() => {
                // console.log("bonjour: ", timeDiff);
                dispatch(
                  postPredictionData(timeDiff, showLoading, dismissLoading)
                );
              }}
            />
          </div>
        </div>
        <div className="level_ppkm">{`Level PPKM yang disarankan: ${levelPPKM}`}</div>
      </div>
      <div className="tabs_container">
        <CustomContainer>
          <Spin spinning={loading}>
            <Tabs
              className="tabs_border"
              defaultActiveKey="1"
              tabPosition="top"
            >
              <TabPane tab={`Positif Harian`} key={1}>
                <TabsPositifHarian />
              </TabPane>
              <TabPane tab={`Meninggal`} key={2}>
                <TabsMeninggal />
              </TabPane>
            </Tabs>
          </Spin>
        </CustomContainer>
      </div>
    </div>
  );
};

export default HomePage;
