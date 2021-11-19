import React, { Component } from 'react'
import styled from 'styled-components';
import './websiteholder.css';
import {Link, BrowserRouter as Router,} from 'react-router-dom';

const StyledView = styled.div`
    padding: 10px 15px;
    width: 370px;
    height: 400px;
`;

const Holder =  styled.div`
    width: 370px;
    height: 400px;
`;


export class websiteholder extends Component {
    render() {
        const website = "https:google.com";

        return (
            <StyledView>
                <Router>
                <Holder>
                <a target="_blank" href={website}>
                    <div className="webHolder">
                        <div className="optionHolder">    
                        </div>
                        <div className="options"></div>
                    </div>
                </a>
                    <div className="InfoContainer">
                        <p>name of the website</p>
                        <div className="From">
                            <p>from content</p>
                            <p>date</p>
                        </div>
                        <div className="ProductStatus">
                            <p>In purchase</p>
                        </div>
                    </div>
                </Holder>
                </Router>
            </StyledView>
        )
    }
}

export default websiteholder
