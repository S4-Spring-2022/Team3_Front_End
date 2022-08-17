import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// bcrypt is unhappy about react, there are work arounds... to be continued time allowing
//import bcrypt from "bcryptjs";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [personId, setPersonId] = useState();
  const [passConfirm, setPassConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  class User {
    constructor(userName, password, personId) {
      this.userName = userName;
      this.password = password;
      this.personId = personId
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (userName === "" || password === "" || passConfirm === "") {
      setError("Please enter a username and password");
    } else if (password !== passConfirm) {
      setError("Passwords do not match");
    } else {
      setError(null);
      let user = new User(userName, password, personId);
      // bcrypt.hash(user.password, 10, (err, hash) => {})
      // ^^ this is where i would encode the password, unless server side encryption becomes my chosen solution
      await fetch("http://finalspringboot-env.eba-psqhnabc.us-east-1.elasticbeanstalk.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "cors",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      }).catch((error) => {
        window.alert(error);
        return;
      });
      window.alert("User created, returning to login");
      setUserName("");
      setPassword("");
      setPassConfirm("");
      setPersonId(1);
      navigate("/");
    }
  };

  return (
    <div>
      <h1 id="register">Register</h1>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label id="registerinfo">Username:</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label id="registerinfo">Person Id</label>
        <input
          type="personId"
          name="personId"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
        />
        <br />
        <label id="registerinfo">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label id="registerinfo">Confirm Password:</label>
        <input
          type="password"
          name="password"
          value={passConfirm}
          onChange={(e) => setPassConfirm(e.target.value)}
        />
        <br />
        <input id="submit" type="submit" value="Register" />
      </form>
      {error ? <p className="error">{error}</p> : null}
      <div>
        <p>
          Already have an account? <Link to="/"> Login here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
