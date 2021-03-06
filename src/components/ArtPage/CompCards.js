import React from 'react';

export const CompCards = ({ artCards }) => {
    return (
        <ul>
            {artCards.map(
                piece => 
                <li>
                    {piece}
                </li>
            )}
        </ul>
    )
}