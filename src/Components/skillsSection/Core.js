import React from 'react';
import skillData from '../../Data/skillData';
import skillName from '../../Data/skillName';

export default function core(props) {

    const coreSkill = skillData.main.core.map(skill => {
        return (
            <img onMouseDown={props.onEvent} className={`img-skill core-img ${skillName[skill.title] ? '' : 'gray-scale'}`} src={`${skill.img}`} alt={`${skill.title}`} />
        );
    })

    return (
        <>
            {coreSkill}
        </>
    )
}