import React from "react";
import { Table } from "antd";

import { dummy } from "../../data/dummy_data";

const CustomTable = ({ dataSource, columns }) => {
  const dummy_dataSource = dummy;
  return <Table dataSource={dataSource} columns={columns} />;
};

export default CustomTable;
