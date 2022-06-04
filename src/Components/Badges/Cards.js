import React from 'react';
import checked from '../../Data/checked';

export default function Cards(props) {

    return (
        <>
            <label className='github-card-bar' htmlFor={`${props.id}`} putvalue={props.alt}>
                <input type="checkbox" className='bar' id={`${props.id}`} checked={checked[props.alt]} />
                <label className='title-name-git' onClick={props.click} htmlFor={`${props.id}`} putvalue={props.alt}>{props.title}</label>
            </label>
        </>
    );
}