import React, { useEffect, useState } from "react";

const ToDo = () => {
  let getLocal = () => {
    let myList = localStorage.getItem("myList");

    if (myList) {
      return JSON.parse(localStorage.getItem("myList"));
    } else {
      return [];
    }
  };
  const [myInput, setMyInput] = useState("");
  const [list, setList] = useState(getLocal());
  const [empty, setEmpty] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [edited, setEdited] = useState(null);

  let submit = (e) => {
    e.preventDefault();
    if (!myInput) {
      alert("Enter something");
    } else if (myInput && toggle) {
      setList(
        list.map((item) => {
          if (item.id === edited) {
            return { ...item, text: myInput };
          }
          return item;
        })
      );
      setToggle(false);
      setMyInput("");
      setEdited(null);
    } else {
      let allInput = {
        id: new Date().getTime().toString(),
        text: myInput,
      };
      setList([...list, allInput]);
      setMyInput("");
    }
  };

  let deleteBtn = (index) => {
    let updated = list.filter((item) => {
      return index !== item.id;
    });
    setList(updated);
  };

  let editBtn = (index) => {
    setToggle(true);
    let updated = list.find((item) => {
      return item.id === index;
    });
    setMyInput(updated.text);
    setEdited(index);
  };

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(list));
    if (list.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [list]);

  let clearTodo = () => {
    let confirmBox = window.confirm("Delete all todo's?");
    if (confirmBox === true) {
      let myList = JSON.parse(localStorage.getItem("myList"));
      myList = [];
      localStorage.setItem("myList", JSON.stringify(myList));
      window.location.reload();
    } else {
      return null;
    }
  };

  return (
    <div className="container-fluid p-2 bg-light fluid">
      <div className="container bg-dark bg-gradient text-white p-2 rounded shadow todo-container">
        <form className="row m-0 p-0" onSubmit={submit}>
          <div className="part1 d-flex col-md-12 p-0">
            <input
              type="text"
              value={myInput}
              onChange={(e) => setMyInput(e.target.value)}
              placeholder="Enter something here..."
              className="form-control"
              maxLength="30"
            />
            {toggle ? (
              <button className="btn btn-warning text-white bg-gradient ms-2">
                <i className="fas fa-pen"></i>
              </button>
            ) : (
              <button className="btn btn-primary bg-gradient ms-2">
                <i className="fas fa-plus"></i>
              </button>
            )}
          </div>
        </form>
        <hr />
        {empty ? (
          <h5 className="text-center mt-3">Your ToDo list is empty</h5>
        ) : (
          <>
            <ul className="list-group mt-3">
              {list.map((item, index) => {
                return (
                  <li
                    className="list-group-item bg-dark borderless rounded text-white bg-gradient mb-2 p-1 d-flex align-items-center justify-content-between"
                    key={item.id}
                  >
                    <p className="m-0">
                      {index + 1}. {item.text}
                    </p>
                    <div className="btn-group">
                      <button
                        className="btn btn-warning text-white bg-gradient"
                        onClick={() => editBtn(item.id)}
                      >
                        <i className="fas fa-pen"></i>
                      </button>
                      <button
                        className="btn btn-danger bg-gradient"
                        onClick={() => deleteBtn(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-danger bg-gradient"
                onClick={clearTodo}
              >
                Clear ToDo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ToDo;
