import React from 'react'
import classes from '../Intro.module.css';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

function Intro() {
    const router = useRouter();
    return (
        <div className='screen_home'>
            <h1 className={classes.h1}>Create an amazing</h1>
            <h1 className={classes.h1}><span>GitHub profile</span> in minutes</h1>
            <p className={classes.p}>Show off your skills, experience and projects. Generate markdown for your profile with just a few clicks!</p>
            <div className={classes.btn_container}>
                <Button
                    variant="outlined"
                >
                    <a href="https://github.com/JASH-PATEL-6566/EaseProf" target="_blank">visit repo(developers)</a>
                </Button>
                <Button
                    variant="contained"
                    onClick={() => router.replace('/introduction')}
                >
                    create profile
                </Button>
            </div>
        </div>
    )
}

export default Intro;