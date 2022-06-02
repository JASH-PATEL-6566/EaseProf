import React from 'react';
import previewSupportData from '../../Data/previewSupportData';

export default function Supportform(props) {
    return (
        <div className='sup-form'>
            <div className='sup-title'>
                <img className='sup-img' src={`${props.img}`} alt={`${props.title}`} />
                <h3>{props.title}</h3>
            </div>
            <div className='span-container'>
                <span className='pre-span'>{props.default}</span>
                <input onChange={props.onEvent} className='input input-social' type="text" placeholder="YourUsername" putvalue={`${props.alt}`} value={previewSupportData.bmc.value} />
            </div>
        </div>
    )
}
// https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg
{/* <div className='span-container'>
    <span className='pre-span'>{props.default}</span>
    <input onChange={props.onEvent} className='input input-social' type="text" placeholder="YourUsername" putvalue={`${props.alt}`} />
</div>  */}