import React, { Component } from 'react';
import {StyledButton} from './Button.styled';


export function Button({ buttonText }) {
    return (
        <StyledButton>{buttonText}</StyledButton>
    )
}