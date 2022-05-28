import React from 'react';
// import outputHeaderData from '../../Data/outputHeaderData';
// import OutputHeader from '../previewOutput/OutputHeader'

export default function IntroFormContainer(props) {

    return (
        <>
            <div className='header'>
                <p className='title'>{props.title}</p>
                {props.type === "text" && <input onChange={props.onEvent} putvalue={`${props.value}`} className='inputfield' type="text" placeholder={props.placeholder} />}
                {props.type === "textarea" && <textarea onChange={props.onEvent} putvalue={`${props.value}`} id="w3review" name="w3review" className='input' rows="4" cols="90" placeholder={props.placeholder}></textarea>}
            </div>
            {props.name === "aboutMe" &&
                <div className='aboutme'>
                    <input className='inputfield' onChange={props.onEvent} putvalue={`${props.value}`} type="text" placeholder={props.placeholder} /><br />
                    {props.link && <input className='inputfield' onChange={props.onEvent} putvalue={`${props.value}`} type="text" link='link' placeholder={props.link} />}
                </div>
            }
        </>
    );
}
