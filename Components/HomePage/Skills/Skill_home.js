import Image from 'next/image';
import React from 'react'
import classes from '../Intro.module.css';

function Skill_home() {
    return (
        <div className="screen_home_2">
            <div className={classes.container}>
                <div>
                    <h1 className={classes.h1}>Show Off your <span>skills</span></h1>
                    <p className={classes.p}>Select from core languages, frameworks, backend technologies and web tech.</p>
                </div>
                <div>
                    <Image
                        src="https://res.cloudinary.com/dreamlist/image/upload/v1676711543/ease-prof/Untitled_design__1_-removebg-preview_1_edzfew.png"
                        height={300}
                        width={400}
                        priority="performance"
                        alt='skills'
                    />
                </div>
            </div>
        </div>
    )
}

export default Skill_home;