import React from 'react';
import InfoOfform from '../InfoOfForm';
import IntroFormContainer from './IntroFormContainer';
import IntroData from '../../Data/IntroData';
// import outputHeaderData from '../../Data/outputHeaderData';

export default function Form(props) {

    const inputs = IntroData.header.map(item => {
        return (
            <IntroFormContainer
                type={item.type}
                title={item.title}
                placeholder={item.placeholder}
                value={item.value}
                onEvent={props.onEvent}
            />
        )
    })
    const inputsabout = IntroData.aboutMe.map(item => {
        return (
            <IntroFormContainer
                name={item.name}
                type={item.type}
                title={item.title}
                placeholder={item.placeholder}
                link={item.link}
                value={item.value}
                onEvent={props.onEvent}
            />
        )
    })

    return (
        <>
            {/* Intro part */}
            <InfoOfform
                title={IntroData.info.title}
                info={IntroData.info.info}
            />
            {inputs}
            <p className='aboutme-name'>AboutMe</p>
            {inputsabout}
        </>
    );
}