import React from "react";
import "./navbar.css";
import { Helmet } from "react-helmet";

function navbar() {
  return (
    <div>
      <Helmet>
        <script src="https://kit.fontawesome.com/f7f53408e6.js"></script>
      </Helmet>
      <input type="checkbox" id="check" />
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>My Website</header>
        <ul>
          <li>
            <a href="#">Register/Login</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Winners</a>
          </li>
          <li>
            <a href="#">Nominees</a>
          </li>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Academy</a>
          </li>
          <li>
            <a href="#">Professional Directory</a>
          </li>
          <li>
            <a href="#">Jobs &amp; Talent</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">eBooks & Publications</a>
          </li>
          <li>
            <a href="#">Jury 2021</a>
          </li>
          <li>
            <a href="#">Conferences</a>
          </li>
        </ul>
      </div>
      <section></section>
    </div>
  );
}

export default navbar;
