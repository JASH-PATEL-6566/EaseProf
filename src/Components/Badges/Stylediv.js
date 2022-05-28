import React from 'react';
import badgesData from '../../Data/badgesData';

const colors = badgesData.main.color.map(color => {
    return (
        <div className='style-color sub-color' style={{ backgroundColor: `${color.code}` }} value={color.code}>&nbsp;</div>
    );
})

export default function Stylediv(props) {
    return (
        <div className='with-color'>
            <div className='item-container'>
                <div className='style-color' style={{ backgroundColor: `${props.color}` }}>&nbsp;</div>
                <p className='style-name'>{props.title}</p>
                <p className='style-edit'>EDIT</p>
            </div>
            {props.select &&
                <div className='color'>
                    {colors}
                </div>
            }
        </div>
    );
}