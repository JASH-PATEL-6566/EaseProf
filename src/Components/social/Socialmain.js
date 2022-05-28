import React from 'react';
import socialData from '../../Data/socialData';
import InfoOfform from '../InfoOfForm';
import Socialinput from './Socialinput';

export default function Socialmain(props) {

    const onefield = socialData.main.map(one => {
        return (
            <Socialinput
                title={one.title}
                img={one.img}
                value={one.value}
                default={one.default}
                post={one.post}
                onEvent={props.onEvent}
                alt={one.alt}
            />
        );
    })

    return (
        <div className='social-main'>
            <InfoOfform
                title={socialData.info.title}
                info={socialData.info.info}
            />
            {onefield}
        </div>
    );
}