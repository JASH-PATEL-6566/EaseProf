import React from 'react';
import skillData from '../../Data/skillData';
import skillName from '../../Data/skillName';

export default function Other(props) {

    const otherSkill = skillData.main.other.map(skill => {
        return (
            <img onClick={props.onEvent} className={`img-skill core-img ${skillName[skill.title] ? '' : 'gray-scale'}`} src={`${skill.img}`} alt={`${skill.title}`} />
        );
    })

    return (
        <>
            {otherSkill}
        </>
    );
}