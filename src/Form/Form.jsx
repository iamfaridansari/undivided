import React from "react";
import { NavLink } from "react-router-dom";

const Form = () => {
  return (
    <>
      <div className="container-fluid fluid bg-light bg-gradient pt-5">
        <div
          className="container p-5 bg-dark bg-gradient rounded shadow text-center text-white"
          style={{ maxWidth: "500px" }}
        >
          <h5>New user?</h5>
          <NavLink to="/form/signup">
              <button className="btn btn-primary">Sign up</button>
          </NavLink>
          <hr />
          <h5>Already have an account?</h5>
          <NavLink to="/form/login">
              <button className="btn btn-primary">Log in</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Form;
