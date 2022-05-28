import React from 'react';
import skillData from '../../Data/skillData';

export default function Frontend(props) {

    const frontSkill = skillData.main.frontend.map(skill => {
        return (
            <img onClick={props.onEvent} className='img-skill core-img gray-scale' src={`${skill.img}`} alt={`${skill.title}`} />
        );
    })

    return (
        <>
            {frontSkill}
        </>

    );
}