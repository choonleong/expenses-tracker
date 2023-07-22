import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context";
import FetchAllData from "../Functions/FetchAllData/fetchAllData";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import DeleteData from "../Functions/DeleteData/deleteData";
import { Table } from "antd";
import moment from "moment";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import "./DataTable.css";

const DataTable = () => {
  const { getData, setGetData } = useContext(UserContext);

  useEffect(() => {
    const transactionTable = async () => {
      const result = await FetchAllData();
      setGetData(result);
    };
    transactionTable();
  }, [setGetData]);

  if (getData === null) {
    return <LoadSpinner />;
  }

  // Callback function for DeleteData.jsx. Upon data deletion, refresh the DataTable by fetching it again
  const handleDeleteSuccess = async () => {
    try {
      const data = await FetchAllData();
      setGetData(data);
    } catch (error) {
      console.log(error);
    }
  };

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
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div className="wrapper-edit-delete">
            <EditFilled className="edit-button" />
            <DeleteFilled
              className="delete-button"
              onClick={() => {
                DeleteData(record, handleDeleteSuccess());
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={getData} />
    </>
  );
};

export default DataTable;
