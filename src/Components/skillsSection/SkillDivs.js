import React from 'react';
import skillData from '../../Data/skillData';
import InfoOfForm from '../InfoOfForm';
import Core from './Core';
import Frontend from './Frontend';
import Backend from './Backend';
import Other from './Other';
import Software from './Software';

export default function SkillDivs(props) {
    return (
        <div className='skill-main'>
            <InfoOfForm
                title={skillData.info.title}
                info={skillData.info.info}
            />
            <div className='core-div'>
                <h3 className='core-name'>💻 CORE</h3>
                <Core
                    onEvent={props.onEvent}
                />
            </div>
            < div className='core-div' >
                <h3 className='core-name'>💻 FRONTEND</h3>
                <Frontend
                    onEvent={props.onEvent}
                />
            </div >
            < div className='core-div' >
                <h3 className='core-name'>💻 BACKEND AND DATABASE</h3>
                <Backend
                    onEvent={props.onEvent}
                />
            </div >
            < div className='core-div' >
                <h3 className='core-name'>💻 OTHER</h3>
                <Other
                    onEvent={props.onEvent}
                />
            </div >
            < div className='core-div' >
                <h3 className='core-name'>💻 SOFTWARE</h3>
                <Software
                    onEvent={props.onEvent}
                />
            </div >


        </div>
    );
}