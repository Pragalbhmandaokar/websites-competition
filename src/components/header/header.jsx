import React from 'react'


export default function header() {

    function handleClick() {
         window.alert("Menu Open from left side");
      }
    return (
        <div className="header"> 
            <div className="header-main">
                <div className="box-left" onClick={handleClick}>Menu</div>
                <div className="box-middle">Competetion</div>
                <div className="searchBox-container" href="/submission"> 
                    <button href="/submission">Submit your WEBSITE</button>
                
                </div>
            </div>
            <div className="box_filter">
                <div className="box-filter-main">
                    <ul className="menu-filter">
                        <li className="item">Filter :  </li>
                        <li className="item">Name</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
