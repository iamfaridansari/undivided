import React, { useState, useReducer, useEffect } from "react";

const Expense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [empty, setEmpty] = useState(false);

  let submit = (e) => {
    e.preventDefault();
  };
  let reset = () => {
    setDescription("");
    setAmount("");
    setDate("");
  };

  let time = new Date().getTime();

  let getLocal = () => {
    let expenseList = localStorage.getItem("expenseList");
    if (expenseList) {
      return JSON.parse(localStorage.getItem("expenseList"));
    } else {
      return [];
    }
  };

  let initialState = getLocal();

  let reducer = (state, action) => {
    if (action.type === "DEPOSIT") {
      reset();
      if (description && amount && date) {
        return (state = [
          ...state,
          {
            id: time,
            description: description,
            amount: eval(amount),
            date: date,
            type: "DEPOSIT",
          },
        ]);
      } else {
        alert("Enter complete information");
        return (state = [
          ...state,
          {
            id: "",
            description: "",
            amount: 0,
            date: "",
            type: "",
          },
        ]);
      }
    }
    if (action.type === "WITHDRAW") {
      reset();
      if (description && amount && date) {
        return (state = [
          ...state,
          {
            id: time,
            description: description,
            amount: eval(amount),
            date: date,
            type: "WITHDRAW",
          },
        ]);
      } else {
        alert("Enter complete information");
        return (state = [
          ...state,
          {
            id: "",
            description: "",
            amount: 0,
            date: "",
            type: "",
          },
        ]);
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    let greenAmount = 0;
    let redAmount = 0;

    let expenseList = JSON.parse(localStorage.getItem("expenseList"));
    expenseList.forEach((item) => {
      if (item.type === "DEPOSIT") {
        greenAmount = parseInt(greenAmount) + parseInt(item.amount);
        setDeposit(greenAmount);
      }
    });
    expenseList.forEach((item) => {
      if (item.type === "WITHDRAW") {
        redAmount = parseInt(redAmount) + parseInt(item.amount);
        setWithdraw(redAmount);
      }
    });

    setBalance(greenAmount - redAmount);
  }, [state]);

  useEffect(() => {
    let expenseList = JSON.parse(localStorage.getItem("expenseList"));
    if (expenseList.length === 0) {
      setEmpty(true)
    } else if (expenseList.length !== 0) {
      setEmpty(false)
    }
  },[state])

  let clear = () => {
    let confirmBox = window.confirm("Clear your transaction history?");
    if (confirmBox === true) {
      let expenseList = JSON.parse(localStorage.getItem("expenseList"));
      expenseList = [];
      localStorage.setItem("expenseList", JSON.stringify(expenseList));
      window.location.reload();
    } else {
      return null;
    }
  };

  let deleteBtn = (id) => {
    let expenseList = JSON.parse(localStorage.getItem("expenseList"));
    let updatedList = expenseList.filter((item) => item.id !== id);
    expenseList = updatedList;
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
    window.location.reload();
  };

  return (
    <div className="container-fluid fluid pt-2">
      <div className="container bg-dark bg-gradient text-white p-2 rounded shadow">
        <header className="d-flex align-items-center justify-content-between">
          <h5 className="m-0">Expense Tracker</h5>
          <h5 className="m-0">
            Balance
            <span className="badge bg-gradient bg-secondary ms-2">
              <i className="fas fa-rupee-sign"></i> {balance}
            </span>
          </h5>
        </header>
        <div className="container mt-3 text-center">
          <div className="row mx-auto">
            <div className="col-md">
              <h5>
                Deposit
                <span className="badge bg-gradient bg-success ms-2">
                  <i className="fas fa-rupee-sign"></i> {deposit}
                </span>
              </h5>
            </div>
            <div className="col-md">
              <h5>
                Withdraw
                <span className="badge bg-gradient bg-danger ms-2">
                  <i className="fas fa-rupee-sign"></i> {withdraw}
                </span>
              </h5>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <form className="mt-2 row" onSubmit={submit}>
            <div className="form-group col-md">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control expense-input mb-2"
                placeholder="Description"
                maxLength="20"
              />
            </div>
            <div className="form-group col-md">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control expense-input mb-2"
                placeholder="Amount"
              />
            </div>
            <div className="form-group col-md">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-control expense-input mb-2"
                placeholder="Date"
              />
            </div>
            <div className="btn-group mt-2">
              <button
                className="btn btn-success bg-gradient"
                onClick={() => dispatch({ type: "DEPOSIT" })}
              >
                Deposit
              </button>
              <button
                className="btn btn-danger bg-gradient"
                onClick={() => dispatch({ type: "WITHDRAW" })}
              >
                Withdraw
              </button>
            </div>
          </form>
          <hr />
          {/* transactions */}

          {empty ? (
            <h5 className="text-center">No transaction to show</h5>
          ) : (
            <>
              <h5 className="text-center mt-2">Transactions</h5>
              <div className="container" id="transactionContainer">
                {state.map((transaction) => {
                  {
                    if (transaction.type === "DEPOSIT") {
                      return (
                        <div
                          className="transaction p-2 row border-start border-5 border-success rounded shadow mb-2"
                          key={transaction.id}
                          onDoubleClick={() => deleteBtn(transaction.id)}
                        >
                          <p className="m-0 col-md">
                            <b>Description: </b>
                            {transaction.description}
                          </p>
                          <p className="m-0 col-md">
                            <b>Amount: </b>
                            <i className="fas fa-rupee-sign"></i>{" "}
                            {transaction.amount}
                          </p>
                          <p className="m-0 col-md">
                            <b>Date: </b>
                            {transaction.date}
                          </p>
                        </div>
                      );
                    } else if (transaction.type === "WITHDRAW") {
                      return (
                        <div
                          className="transaction p-2 row border-start border-5 border-danger rounded shadow mb-2"
                          key={transaction.id}
                          onDoubleClick={() => deleteBtn(transaction.id)}
                        >
                          <p className="m-0 col-md">
                            <b>Description: </b>
                            {transaction.description}
                          </p>
                          <p className="m-0 col-md">
                            <b>Amount: </b>
                            <i className="fas fa-rupee-sign"></i>{" "}
                            {transaction.amount}
                          </p>
                          <p className="m-0 col-md">
                            <b>Date: </b>
                            {transaction.date}
                          </p>
                        </div>
                      );
                    }
                  }
                  return null;
                })}
              </div>
              <small>*Double click on transaction to delete it.</small>
              <div className="text-center">
                <button
                  className="btn btn-warning bg-gradient text-white"
                  onClick={clear}
                >
                  Clear transactions
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expense;
