import React from 'react';
import { StyledFloatingButton } from './FloatingButton.styled.js';
import github from '../images/GitHub.svg';

export default class FloatingButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <StyledFloatingButton>
                <div className="button">
                    <a href={this.props.link} target="_blank">
                        <svg width="80" height="40"
                            xmlns="http://www.w3.org/2000/svg">
                            <image href={github} height="40" width="80" />
                        </svg>
                    </a>
                </div>
            </StyledFloatingButton>
        )
    }
}