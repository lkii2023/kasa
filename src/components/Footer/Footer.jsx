import React from "react";
import logo from "../../assets/Logo-footer.png";

export default function Navbar() {
  return (
    <footer id="footer-container">
      <div className="footer">
        <div id="logo-footer">
          <img src={logo} className="App-logo-footer" alt="logo" />
        </div>
        <div className="title-footer">
          <p className="logo-text">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
