import React, { Component } from 'react'
import styled from 'styled-components';
import './websiteholder.css';
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
const StyledView = styled.div`
    padding: 10px 15px;
    width: 400px;
    height: 300px;
`;

const Holder =  styled.div`
    width: 400px;
    height: 300px;
    background-color: blue;
`;
export class websiteholder extends Component {
    render() {
        return (
            <StyledView>
                <Holder>
                    <div className="webHolder">
                        <div className="optionHolder">
                                
                        </div>
                        <div className="options"></div>
                    </div>
                </Holder>
            </StyledView>
        )
    }
}

export default websiteholder
