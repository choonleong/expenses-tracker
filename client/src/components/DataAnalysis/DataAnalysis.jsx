import React from "react";
import { Progress } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context";
import "./DataAnalysis.css";

const DataAnalysis = () => {
  const { getData } = useContext(UserContext);

  const records = getData;

  const categories = [
    "salary",
    "investments",
    "dividends",
    "capital",
    "deposits",
    "hustles",
    "housing",
    "transportation",
    "food",
    "utilities",
    "insurance",
    "medical",
    "personal",
    "recreation",
    "travel",
    "misc",
  ];

  // total overall records
  const totalRecords = records.length;

  // total number of income records
  const totalIncomeRecords = records.filter(
    (transaction) => transaction.category === "income"
  );
  const totalIncomeNum = totalIncomeRecords.length;

  //total number of expense records
  const totalExpenseRecords = records.filter(
    (transaction) => transaction.category === "expense"
  );
  const totalExpenseNum = totalExpenseRecords.length;

  // derive each category's percentage
  const totalIncomeRecordsPercentage = (totalIncomeNum / totalRecords) * 100;
  const totalExpenseRecordsPercentage = (totalExpenseNum / totalRecords) * 100;

  // total overall turnover
  const totalTurnover = records.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  // derive category vs overall turnover
  const totalIncomeTurnover = records
    .filter((transaction) => transaction.category === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnover = records
    .filter((transaction) => transaction.category === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // derive each category's turnover percentage
  const totalIncomeTurnoverPercentage =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercentage =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <>
      <div className="data-analysis">
        <div className="row">
          <div className="records-count">
            <h4>Total Records : {totalRecords}</h4>
            <hr />
            <h5>Income : {totalIncomeNum}</h5>
            <h5>Expense : {totalExpenseNum}</h5>

            <div className="progress-bars">
              <Progress
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeRecordsPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenseRecordsPercentage.toFixed(0)}
              />
            </div>
          </div>

          <div className="records-count">
            <h4>Total Turnover : {totalTurnover}</h4>
            <hr />
            <h5>Income : {totalIncomeTurnover}</h5>
            <h5>Expense : {totalExpenseTurnover}</h5>

            <div className="progress-bars">
              <Progress
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeTurnoverPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenseTurnoverPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
        <div className="line-breaks">
          <br />
          <br />
        </div>
        <div className="row">
          <div className="category-analysis">
            <h4>Category - Income</h4>
            {categories.map((category) => {
              const amount = records
                .filter((t) => t.category === "income" && t.type === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#0B5AD9"
                      percent={((amount / totalIncomeTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>

          <div className="category-analysis">
            <h4>Category - Expenses</h4>
            {categories.map((category) => {
              const amount = records
                .filter((t) => t.category === "expense" && t.type === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#0B5AD9"
                      percent={((amount / totalExpenseTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalysis;
