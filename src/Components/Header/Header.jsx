import React from "react";

import logo from "../../images/favicon.ico";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div >
        <img className="imgLogo"  src={logo} alt="" />
      </div>
      <div className="link">
        <a href="/order">Order</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
