import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

  return (
    <header>
      <div>Search OurBnB</div>
      <nav>
        {props.user===null ? <Link to="/" >Login</Link> : <Link to="/" >Logout</Link>}
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
