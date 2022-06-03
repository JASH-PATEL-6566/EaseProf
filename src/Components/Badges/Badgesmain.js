import React from 'react';
import InfoOfForm from '../InfoOfForm';
import badgesData from '../../Data/badgesData';
import Cards from './Cards';

export default function Badgesmain(props) {


    const cards = badgesData.main.Card.map(card => {
        return (
            <Cards
                title={card.title}
                sub={card.sub}
                id={card.id}
                click={props.click}
                alt={card.alt}
            />
        );
    })

    return (
        <div className='badges-main'>
            <InfoOfForm
                title={badgesData.info.title}
                info={badgesData.info.info}
            />
            <div className='cards-field'>
                <span className='github-name'>
                    GitHub
                </span>
                {cards}
            </div>
        </div>
    );
}