import React from 'react';
import InfoOfForm from '../InfoOfForm';
import badgesData from '../../Data/badgesData';
import Stylediv from './Stylediv';
import Cards from './Cards';

export default function Badgesmain(props) {

    const styles = badgesData.main.style.map(style => {
        return (
            <Stylediv
                color={style.color}
                title={style.title}
                select={style.select}
            />
        );
    })

    const cards = badgesData.main.Card.map(card => {
        return (
            <Cards
                title={card.title}
                sub={card.sub}
                id={card.id}
                click={props.click}
            />
        );
    })

    return (
        <div className='badges-main'>
            <InfoOfForm
                title={badgesData.info.title}
                info={badgesData.info.info}
            />
            <div className='style-badges'>
                <h3 className='style-badges-name'>STYLE BADGES</h3>
                <div className='style-grid'>
                    {styles}
                </div>
            </div>
            <div className='cards-field'>
                <span className='github-name'>
                    GitHub
                </span>
                {cards}
            </div>
        </div>
    );
}