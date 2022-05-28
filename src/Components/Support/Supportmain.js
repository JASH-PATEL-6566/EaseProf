import React from 'react';
import Supportform from './Supportform';
import InfoOfform from '../InfoOfForm';
import supportData from '../../Data/supportData';

export default function Supportmain(props) {

    const onefield = supportData.main.map(one => {
        return (
            <Supportform
                title={one.title}
                img={one.img}
                value={one.value}
                default={one.default}
                alt={one.alt}
                onEvent={props.onEvent}
            />
        );
    })

    return (
        <div className='Support-main'>
            <InfoOfform
                title={supportData.info.title}
                info={supportData.info.info}
            />
            {onefield}
        </div>
    );
}