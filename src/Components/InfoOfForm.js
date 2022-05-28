import React from 'react';

export default function InfoOfform(props) {
    return (
        <div className='form-info'>
            <h1 className='active-section'>{props.title}</h1>
            <p className='active-info'>{props.info}</p>
        </div>
    );
}