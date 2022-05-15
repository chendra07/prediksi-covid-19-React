import React from "react";
import moment from "moment";
import { dummy } from "../data/dummy_data";

const findUniqueDate = ({ data }) => {
  console.log("date: ", moment(dummy[0].Tanggal, "YYYY-MM-DD").format("MMMM"));

  let result = [];
  return <div>findUniqueDate</div>;
};

export default findUniqueDate;
