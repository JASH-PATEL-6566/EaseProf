import React from 'react'
import classes from '../Intro.module.css';
import Image from 'next/image';

function Stats_home() {
    return (
        <div className="screen_home_2">
            <div className={classes.container}>
                <div>
                    <h1 className={classes.h1}>Add some <span>stats</span></h1>
                    <p className={classes.p}>Show visitors some key facts through charts, graphs and badges.</p>
                </div>
                <div>
                    <Image
                        src="https://res.cloudinary.com/dreamlist/image/upload/v1676715767/ease-prof/stats-illustration-dark_sysz57.svg"
                        height={300}
                        width={400}
                        priority="performance"
                        alt='stats'
                    />
                </div>
            </div>
        </div>
    )
}

export default Stats_home   