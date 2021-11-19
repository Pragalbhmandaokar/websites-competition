import React from 'react'
import WebsiteHolder from '../websiteHolder/websiteholder';
import './body.css';
export default function body() {
    return (
      <section className="bodycontainer">
            <div className="banner">
              <p>something</p>
            </div>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sapiente maxime! Officia fuga natus obcaecati? Reprehenderit laborum quo eveniet tempore veritatis velit distinctio repellendus dolores ratione adipisci, similique in nesciunt.</p>
                <div className="websiteHolder-container">
                    <WebsiteHolder></WebsiteHolder>
                    <WebsiteHolder></WebsiteHolder>
                </div>
            </div>
      </section>
    )
}
