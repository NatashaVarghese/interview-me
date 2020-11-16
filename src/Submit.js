import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.submit-message {
    margin: auto;
    width: 80%;
    text-align: center;
}
`;

export default class Submit extends Component {
    render() {
        return (
            <Styles>
                <div class="submit-message">
                    <br></br>
                    <label>Thank you for your submission!</label>
                    <br/>
                    <br/>
                    <label>To browse more questions, navigate to the Home page.</label>
                    <br/>
                    <br/>
                    <label>To schedule an interview, navigate to the Interview page.</label>
                </div>
            </Styles>
        )
    }
}
