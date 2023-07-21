import React, { useContext } from "react";
import { UserContext } from "../../context";
import { Table } from "antd";
import moment from "moment";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

const DataTable = () => {
  const { getData } = useContext(UserContext);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    // {
    //   title: "Actions",
    // },
  ];

  console.log(getData);

  return (
    <>
      <Table columns={columns} dataSource={getData} />
    </>
  );
};

export default DataTable;
