import React from 'react';

export default function Substatuscard(props) {
    return (
        <div className='sub-item'>
            <input id={`${props.id}`} type="checkbox" defaultChecked />
            <label className='sub-name' htmlFor={`${props.id}`}>{props.title}</label>
        </div>
    );
}