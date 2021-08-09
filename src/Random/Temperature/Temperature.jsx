import React, { useEffect, useReducer, useRef, useState } from "react";

const Temperature = () => {
  const badgeColor = useRef(null);

  const [description, setDescription] = useState("");

  let initialState = 21;
  let reducer = (state, action) => {
    if (action.type === "increase") {
      return (state = state + 1);
    }
    if (action.type === "decrease") {
      return (state = state - 1);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    let bgColor = badgeColor.current;
    if (state < 21) {
      bgColor.style.background = `#0d6efd`;
      setDescription("It is getting cold");
    }
    if (state > 24) {
      bgColor.style.background = `#dc3545`;
      setDescription("It is getting hot");
    }
    if (state >= 21 && state <= 24) {
      bgColor.style.background = "#198754";
      setDescription("Room temperature");
    }
    if (state < 15) {
      setDescription("Too cold");
    }
    if (state > 30) {
      setDescription("Too hot");
    }
    if (state < 10) {
      setDescription("Its freezing");
    }
    if (state > 35) {
      setDescription("Unbearable heat");
    }
    if (state < 1) {
      bgColor.style.background = "#00e8dc";
      setDescription("Avoid going out");
    }
    if (state > 40) {
      bgColor.style.background = "#ff0000";
      setDescription("Avoid going out");
    }
    if (state < -5) {
      setDescription("Stay home stay safe");
    }
    if (state > 45) {
      setDescription("Stay home stay safe");
    }
  }, [state]);
  return (
    <>
    <h5 className="text-center text-white">Temperature control system</h5>
    <div
      className="container p-2 bg-dark bg-gradient rounded shadow text-center"
      style={{ maxWidth: "500px" }}
    >
      <div className="row mx-auto">
        <div className="col-12 my-3">
          <h1 className="display-1">
            <span
              className="badge bg-gradient rounded-pill"
              id="badgeColor"
              ref={badgeColor}
            >
              {state}&deg;C
            </span>
          </h1>
          <p className="m-0 text-white">{description}</p>
        </div>
        <div className="col-12 my-3">
          <div className="btn-group">
            <button
              className="btn btn-danger bg-gradient"
              onClick={() => dispatch({ type: "increase" })}
            >
              Increase
            </button>
            <button
              className="btn btn-success bg-gradient"
              onClick={() => dispatch({ type: "decrease" })}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Temperature;
