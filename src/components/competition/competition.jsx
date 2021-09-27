import React, { Component } from 'react'
import './competition.css';
import styled from 'styled-components';
import Websiteholder from '../websiteHolder/websiteholder';
import Header from '../header/header';
const Holder =  styled.div`
    height:20px;
    padding:2px;
    font-size:20px;
`;

export class competition extends Component {

    competition_name = "name of contest";
    render() {
   
        return (
            <div className="competitionPage">
                 <Header></Header>
                <div className="compettionPage_container">
                    <Holder>{this.competition_name}</Holder>    
                </div>
                <div className="CPage_Body">
                {Array.from({ length: 10 }, (_, i) =>  <Websiteholder></Websiteholder>)}
                   
                </div>
            </div>
        )
    }
}

export default competition
