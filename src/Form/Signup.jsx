import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [success, setSuccess] = useState(false);

  let submit = (e) => {
    e.preventDefault();
  };

  let validation = () => {
    if (!fname || !lname || !email || !phone || !password1 || !password2) {
      setError(true);
      setErrorMsg("Enter complete information");
    } else if (phone.length != 10) {
      setError(true);
      setErrorMsg("Enter valid 10 digit mobile number");
    } else if (password1.length < 8) {
      setError(true);
      setErrorMsg("Password must be 8 characters long");
    } else if (password2 !== password1) {
      setError(true);
      setErrorMsg("Passwords does not match");
    } else {
      setError(false);
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setPassword1("");
      setPassword2("");
      setSuccess(true);
    }
  };

  return (
    <div className="container-fluid fluid bg-light pt-2">
      <div className="container bg-dark bg-gradient text-white p-2 mb-2 shadow rounded">
        {error ? (
          <div className="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        ) : null}
        {success ? (
          <div className="alert alert-success" role="alert">
            Your account have been created successfully, now please login to
            continue
          </div>
        ) : null}

        <h5 className="text-center">Sign up</h5>
        <form className="row mx-auto text-dark" onSubmit={submit}>
          <div className="col-md-6 form-floating p-2">
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="form-control"
              placeholder="required"
            />
            <label className="form-label">First name</label>
          </div>
          <div className="col-md-6 form-floating p-2">
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="form-control"
              placeholder="required"
            />
            <label className="form-label">Last name</label>
          </div>
          <div className="col-md-6 form-floating p-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="required"
            />
            <label className="form-label">Email address</label>
          </div>
          <div className="col-md-6 form-floating p-2">
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="required"
            />
            <label className="form-label">Phone number</label>
          </div>
          <div className="col-md-6 form-floating p-2">
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              className="form-control"
              placeholder="required"
            />
            <label className="form-label">Password</label>
          </div>
          <div className="col-md-6 form-floating p-2">
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="form-control"
              placeholder="required"
            />
            <label className="form-label">Confirm password</label>
          </div>
          <div className="text-center">
            <button
              className="btn btn-success bg-gradient my-2"
              onClick={validation}
            >
              Sign up
            </button>
          </div>
        </form>
        <hr />
        <div className="text-center">
          <h5>Already have an account?</h5>
          <NavLink to="/form/login">
            <button className="btn btn-primary bg-gradient">Log in</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
