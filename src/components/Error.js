import React from 'react';
import { StyledError } from './Error.styled';

export default class Error extends React.Component {
    render() {
        return (
            <StyledError>
                <h1>ERROR</h1>
            </StyledError>
        )
    }
}