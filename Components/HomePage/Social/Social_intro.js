import React from 'react'
import classes from '../Intro.module.css';
import Image from 'next/image';

function Social_intro() {
    return (
        <div className="screen_home_2">
            <div className={classes.container_2}>
                <div>
                    <Image
                        src="https://res.cloudinary.com/dreamlist/image/upload/v1676710084/ease-prof/Social-collage_zzesdx.png"
                        height={300}
                        width={300}
                        priority="performance"
                        alt='social'
                    />
                </div>
                <div>
                    <h1 className={classes.h1}>Share your <span>socials</span></h1>
                    <p className={classes.p}>Add links to all of your social profiles and blogs in seconds.</p>
                </div>
            </div>
        </div>
    )
}

export default Social_intro;