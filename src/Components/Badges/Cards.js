import React from 'react';
import subdata from '../../Data/subdata';
import Substatuscard from './Substatuscard';

export default function Cards(props) {

    const items = subdata.data.map(item => {
        return (
            <Substatuscard
                title={item.title}
                id={item.id}
                select={item.select}
            />
        );
    })
    return (
        <>
            <label className='github-card-bar' htmlFor={`${props.id}`}>
                <input type="checkbox" className='bar' id={`${props.id}`} />
                <label className='title-name-git' htmlFor={`${props.id}`}>{props.title}</label>
            </label>
            {/* <div className='stats-sup'>
                {props.select && (props.sub === 'stats' && { items })}
                {props.select ? props.sub === 'stats' ? { items } : '' : ''}
            </div> */}
        </>
    );
}