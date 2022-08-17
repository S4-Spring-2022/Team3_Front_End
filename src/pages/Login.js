import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //a use effect to ensure the user object is reset to null on returning to the login page
  useEffect(() => {
    props.setUser(null);
    props.setIsLoggedIn(false);
  }, []);

  // a function to handle the login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (userName === "" || password === "") {
      setError("Please enter a username and password");
      return
    }
    await fetch(`http://localhost:8080/users/userName?userName=${userName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "cors",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        } else {
          setError("User does not exist");
          return
        }
      })
      .catch((error) => {
        setError("User does not exist" );
        return;
      })
      .then((data) => {
        console.log(data);
        if (data[0].password === password) {
          props.setUser(userName);
          props.setIsLoggedIn(true);
          navigate("/search");
        } else {
          setError("Password is incorrect");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("User does not exist and exit on error");
        return;
      });

  };

  return (
    <div>
      <h1>Login</h1>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input id="submit" type="submit" value="Login" />
      </form>
      {error ? <p className="error">{error}</p> : null}
      <div>
        <p>
          Don't have an account? <Link to="/register"> Register here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
