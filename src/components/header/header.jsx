import React from 'react'

export default function header() {
    return (
        <div className="header"> 
            <div className="header-main">
                <div className="box-left">Menu</div>
                <div className="box-middle">Competetion</div>
                <div className="searchBox-container">Submit your WEBSITE</div>
            </div>
            <div className="box_filter">
                <div className="box-filter-main">
                    <ul className="menu-filter">
                        <li className="item">Filter</li>
                        <li className="item">Name</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
