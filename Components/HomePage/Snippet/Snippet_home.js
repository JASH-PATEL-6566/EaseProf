import React from 'react'
import classes from '../Intro.module.css';
import Image from 'next/image';

function Snippet_home() {
    return (
        <div className="screen_home_2">
            <div className={classes.container_3}>
                <div>
                    <h1 className={classes.h1}>Copy your <span>snippet</span></h1>
                    <p className={classes.p}>When you're done, copy your profile code and you're ready to go!</p>
                </div>
                <div>
                    <Image
                        src="https://res.cloudinary.com/dreamlist/image/upload/v1676716339/ease-prof/Screenshot_2023-02-18_160154_elq9du.png"
                        height={300}
                        width={900}
                        priority="performance"
                        className={classes.img}
                        alt='example'
                    />
                </div>
            </div>
        </div>
    )
}

export default Snippet_home; 