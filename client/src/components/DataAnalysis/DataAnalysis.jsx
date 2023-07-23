import React from "react";
import { Progress } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context";

const DataAnalysis = () => {
  const { getData } = useContext(UserContext);

  const transactions = getData;
  console.log(transactions);

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

  // total transaction
  const totalTransactions = transactions.length;

  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.category === "income"
  );
  const totalIncomeNum = totalIncomeTransactions.length;

  const totalExpenseTransactions = transactions.filter(
    (transaction) => transaction.category === "expense"
  );
  const totalExpenseNum = totalExpenseTransactions.length;

  const totalIncomeTransactionsPercentage =
    (totalIncomeNum / totalTransactions) * 100;
  const totalExpenseTransactionsPercentage =
    (totalExpenseNum / totalTransactions) * 100;

  const totalTurnover = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.category === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnover = transactions
    .filter((transaction) => transaction.category === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercentage =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercentage =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <>
      <div className="analytics">
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="transactions-count">
              <h4>Total Transactions : {totalTransactions}</h4>
              <hr />
              <h5>Income : {totalIncomeNum}</h5>
              <h5>Expense : {totalExpenseNum}</h5>

              <div className="progress-bars">
                <Progress
                  className="mx-5"
                  strokeColor="#5DD64F"
                  type="circle"
                  percent={totalIncomeTransactionsPercentage.toFixed(0)}
                />
                <Progress
                  strokeColor="#E5572F"
                  type="circle"
                  percent={totalExpenseTransactionsPercentage.toFixed(0)}
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="transactions-count">
              <h4>Total Turnover : {totalTurnover}</h4>
              <hr />
              <h5>Income : {totalIncomeTurnover}</h5>
              <h5>Expense : {totalExpenseTurnover}</h5>

              <div className="progress-bars">
                <Progress
                  className="mx-5"
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
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="category-analysis">
              <h4>Category - Income</h4>
              {categories.map((category) => {
                const amount = transactions
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
          </div>

          <div className="col-md-6">
            <div className="category-analysis">
              <h4>Category - Expenses</h4>
              {categories.map((category) => {
                const amount = transactions
                  .filter(
                    (t) => t.category === "expense" && t.type === category
                  )
                  .reduce((acc, t) => acc + t.amount, 0);
                return (
                  amount > 0 && (
                    <div className="category-card">
                      <h5>{category}</h5>
                      <Progress
                        strokeColor="#0B5AD9"
                        percent={(
                          (amount / totalExpenseTurnover) *
                          100
                        ).toFixed(0)}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>Hello World</div>
    </>
  );
};

export default DataAnalysis;
