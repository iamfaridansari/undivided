import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorBox, setErrorBox] = useState(false);
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);

  const showBtn = useRef(null);
  let showCurrent = showBtn.current;

  let submit = (e) => {
    e.preventDefault();
  };

  let login = () => {
    if (!username && !password) {
      setErrorBox(true);
      setError("Enter complete information");
    } else {
      setSuccess(true);
      setErrorBox(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="container-fluid fluid bg-light bg-gradient pt-2">
      <div
        className="container bg-dark bg-gradient text-white p-2 rounded shadow"
        style={{ maxWidth: "500px" }}
      >
        <h5 className="text-center text-white">Log in</h5>
        {errorBox ? (
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="alert alert-success mb-0" role="alert">
            Login successfull
          </div>
        ) : null}
        <form className="text-dark my-2" onSubmit={submit}>
          <div className="form-floating mb-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="required"
            />
            <label className="form-label">Username</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="required"
              id="showBtn"
              ref={showBtn}
            />
            <label className="form-label">Password</label>
          </div>
          <div className="text-center">
            <button className="btn btn-success bg-gradient" onClick={login}>
              Log in
            </button>
          </div>
        </form>
        <hr />
        <div className="text-center my-2">
          <h5>New here?</h5>
          <NavLink to="/form/signup">
            <button className="btn btn-primary bg-gradient">Sign up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
