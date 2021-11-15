import React, { useState, useContext, useEffect } from "react";
import logo from "../assets/Foster ConnectLOGO.png";

import AuthContext from "../context/Auth/authContext";

function Signup(props) {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      clearErrors();
    }
  }, [error, isAuthenticated, props.history, clearErrors]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { firstName, lastName, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || email === "" || password === "") {
      //   setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      alert("passwords do not match, please try again. ");
      //   setAlert('Passwords do not match', 'danger');
    } else {
      register({
        firstName,
        lastName,
        email,
        password,
      });
      console.log("register submit");
      props.history.push("/profile");
    }
  };

  return (
    <div className="mb-5">
      <form
        onSubmit={onSubmit}
        style={{
          width: "22rem",
          margin: "auto",
        }}
      >
        <img className="mb-4" src={logo} alt="" width="200" height="200" />
        <h1 className="h3 mb-3 fw-normal text-white">
          Please Enter information below{" "}
        </h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-2"
            id="floatingInput"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control mt-2"
            id="floatingPassword"
            name='password'
          value={password}
          onChange={onChange}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control mt-2"
            name='password2'
          value={password2}
          onChange={onChange}
            id="floatingPasswordconfirm"
            placeholder="Confirm Password"
          />
          <label htmlFor="floatingPasswordconfirm">Confirm Passoword</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mt-2"
            id="floatingFirstName"
            name='firstName'
          value={firstName}
          onChange={onChange}
            placeholder="First Name"
          />
          <label htmlFor="floatingFirstName"> First Name</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mt-2"
            name='lastName'
            value={lastName}
            onChange={onChange}
            id="floatingLastName"
            placeholder="Last Name"
          />
          <label htmlFor="floatingLastName">Last Name</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control mt-2"
            id="floatingAge"
            placeholder="age"
          />
          <label htmlFor="floatingAge">Age</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
