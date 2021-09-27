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
    width: 370px;
    height: 400px;
`;

const Holder =  styled.div`
    width: 370px;
    height: 400px;
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
            </StyledView>
        )
    }
}

export default websiteholder
