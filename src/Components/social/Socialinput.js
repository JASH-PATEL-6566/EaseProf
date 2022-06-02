import React from 'react';
import PreviewSocialData from '../../Data/PreviewSocialData';

export default function Socialinput(props) {
    return (
        <div className='social-form'>
            <div className='title-social'>
                <img className='social-img' src={`${props.img}`} putvalue={`${props.putvalue}`} alt={`${props.alt}`}></img>
                <h3>{props.title}</h3>
            </div>
            <div className='span-container'>
                <span className='pre-span'>{props.default}</span>
                <input onChange={props.onEvent} className='input input-social' type="text" placeholder="YourUsername" putvalue={`${props.alt}`} value={PreviewSocialData[props.alt].value} />
            </div>
        </div>
    );
}