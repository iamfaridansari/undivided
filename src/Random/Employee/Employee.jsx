import React, { useState, useEffect } from "react";

const Employee = () => {
  let url = `https://jsonplaceholder.typicode.com/users`;

  const [employee, setEmployee] = useState(0);
  const [loading, setloading] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [tag, setTag] = useState("");

  let getEmployee = async () => {
    setloading(true);
    let response = await fetch(url);
    let data = await response.json();

    setName(data[employee].name);
    setUsername(data[employee].username);
    setEmail(data[employee].email);
    setPhone(data[employee].phone);
    setCompany(data[employee].company.name);
    setTag(data[employee].company.bs);
    setloading(false);
  };

  useEffect(() => {
    getEmployee();
  }, [employee]);

  let next = () => {
    let nextEmployee = employee + 1;
    if (nextEmployee <= 9) {
      setEmployee(nextEmployee);
    } else {
      alert("Limit reached");
    }
  };
  return (
    <>
    <h5 className="text-center text-white">Employee database</h5>
      <div
        className="container bg-dark bg-gradient text-white p-2 rounded shadow"
        style={{ maxWidth: "500px" }}
      >
        {loading ? (
          <h5 className="text-center mt-3">
            <div className="spinner-border text-light me-2" role="status"></div>
            Loading...
          </h5>
        ) : (
          <>
            <ul className="list-group">
              <li className="list-group-item bg-dark bg-gradient border border-dark text-white">
                <b>Name: </b>
                {name}
              </li>
              <li className="list-group-item bg-dark bg-gradient border border-dark text-white">
                <b>Username: </b>
                {username}
              </li>
              <li className="list-group-item bg-dark bg-gradient border border-dark text-white">
                <b>Email address: </b>
                {email}
              </li>
              <li className="list-group-item bg-dark bg-gradient border border-dark text-white">
                <b>Phone number: </b>
                {phone}
              </li>
              <li className="list-group-item bg-dark bg-gradient border border-dark text-white">
                <b>Company name: </b>
                {company}
              </li>
              <li className="list-group-item bg-dark bg-gradient border border-dark text-white">
                <b>Work overwiew: </b>
                {tag}
              </li>
            </ul>
            <button
              className="btn btn-primary bg-gradient mt-2"
              style={{ width: "100%" }}
              onClick={next}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Employee;
