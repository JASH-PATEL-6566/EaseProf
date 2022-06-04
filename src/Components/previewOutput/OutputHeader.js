import React, { useEffect, useState } from 'react';
import outputHeaderData from '../../Data/outputHeaderData';
import PreviewTrophyAndFollower from './PreviewTrophyAndFollower';

export default function OutputHeader(props) {
    return (
        <div className='output-header'>
            {outputHeaderData.hello.value && <h1 className='hello'>{`${outputHeaderData.hello.prev}${outputHeaderData.hello.value}`}</h1>}
            {outputHeaderData.sub.value && <h2 className='subtitle-output'>{`${outputHeaderData.sub.value}`}</h2>}
            {outputHeaderData.long.value && <p className='long-output'>{`${outputHeaderData.long.value}`}</p>}

            <div className="follower-trophy">
                <PreviewTrophyAndFollower />
            </div>

            <ul className='list-output'>
                {outputHeaderData.based.value && <li>{`${outputHeaderData.based.prev}${outputHeaderData.based.value}`}</li>}

                {outputHeaderData.port.value && outputHeaderData.port.link ? <li>{`${outputHeaderData.port.prev}`}<a href={`${outputHeaderData.port.link}`}>{`${outputHeaderData.port.value}`}</a></li> : ''}

                {outputHeaderData.contact.value && <li>{`${outputHeaderData.contact.prev}`}<a href={`mailto:${outputHeaderData.contact.email}`}>{`${outputHeaderData.contact.value}`}</a></li>}

                {outputHeaderData.current.value && outputHeaderData.current.link ? <li>{`${outputHeaderData.current.prev}`}<a href={`${outputHeaderData.current.link}`}>{`${outputHeaderData.current.value}`}</a></li> : ''}

                {outputHeaderData.learn.value && <li>{`${outputHeaderData.learn.prev}${outputHeaderData.learn.value}`}</li>}

                {outputHeaderData.open.value && <li>{`${outputHeaderData.open.prev}${outputHeaderData.open.value}`}</li>}

                {outputHeaderData.else.value && <li>{`${outputHeaderData.else.prev}${outputHeaderData.else.value}`}</li>}
            </ul>
        </div>
    )
}