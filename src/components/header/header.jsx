import React from "react";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";
import Submission from "../upload/submission"
export default function header() {
  return (
    <div className="header">
      <div className="header-main">
        <div className="box-left">
          <Navbar></Navbar>
        </div>
        <div className="box-middle">Competetion</div>
        <div className="searchBox-container" href="/submission">
            <button onClick={() => <Submission></Submission>}>Submit your WEBSITE</button>
          
        </div>
      </div>
      {/* <div className="box_filter">
                <div className="box-filter-main">
                    <ul className="menu-filter">
                        <li className="item">Filter :  </li>
                        <li className="item">Name</li>
                    </ul>
                </div>
            </div> */}
    </div>
  );
}
