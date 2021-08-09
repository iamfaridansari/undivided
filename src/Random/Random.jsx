import React from "react";
import Calculator from "./Calculator/Calculator";
import Employee from "./Employee/Employee";
import Quote from "./Quote/Quote";
import Temperature from "./Temperature/Temperature";
import Weather from "./Weather/Weather";

const Random = () => {
  return (
    <div className="container-fluid fluid bg-dark bg-gradient p-0 d-flex align-items-center justify-content-center">
      <div className="container rounded shadow p-0 shadow parentContainer">
        <div className="container bg-dark bg-gradient d-flex align-items-center justify-content-center flex-column childContainer">
          <Quote />
        </div>

        <div className="container bg-dark bg-gradient d-flex align-items-center justify-content-center flex-column childContainer">
          <Employee />
        </div>

        <div className="container bg-dark bg-gradient d-flex align-items-center justify-content-center flex-column childContainer">
          <Calculator />
        </div>

        <div className="container bg-dark bg-gradient d-flex align-items-center justify-content-center flex-column childContainer">
          <Temperature />
        </div>

        <div className="container bg-dark bg-gradient d-flex align-items-center justify-content-center flex-column childContainer">
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Random;
