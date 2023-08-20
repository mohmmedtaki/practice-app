import React, { useState } from "react";
import "./basicform.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <div>
      <div>
        {allEntry.map((curElem) => {
          return (
            <div className="showDataStyles">
              <h4 style={{ display: "flex", justifyContent: "end" }}>
                {curElem.email}
              </h4>
            </div>
          );
        })}
      </div>

      <div className="containe">
        <form action="" onSubmit={submitForm} className="Form">
          <h2>Login Form</h2>

          <input
            className="box"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Enter Email"
          ></input>

          <input
            className="box"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder="Enter Password"
          ></input>

          <button type="submit" className="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
