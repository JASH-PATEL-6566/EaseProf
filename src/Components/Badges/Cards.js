import React from 'react';

export default function Cards(props) {

    return (
        <>
            <label className='github-card-bar' htmlFor={`${props.id}`} putvalue={props.alt}>
                <input type="checkbox" className='bar' id={`${props.id}`} />
                <label className='title-name-git' onClick={props.click} htmlFor={`${props.id}`} putvalue={props.alt}>{props.title}</label>
            </label>
        </>
    );
}