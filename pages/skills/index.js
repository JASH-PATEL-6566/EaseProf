import classes from './skills.module.css';
import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';
import Skill from '../../Components/skill/Skill';
import { backend, core, frontend, other, software } from '../../Data/skill';

const Skills = () => {
    return (
        <>
            <Head>
                <title>EaseProf | Skills</title>
            </Head>
            <div>
                <Upper
                    head="Skills"
                    desc="Show off the languages, frameworks, software and tech that you use."
                />
                <div className="main_container">
                    {/* core */}
                    <Skill click={(e) => console.log(e.target.getAttribute('source'))} heading={'Core'} data={core} />
                    {/* frontEnd */}
                    <Skill click={(e) => console.log(e.target.getAttribute('source'))} heading={'FrontEnd'} data={frontend} />
                    {/* backEnd */}
                    <Skill click={(e) => console.log(e.target.getAttribute('source'))} heading={'BackEnd'} data={backend} />
                    {/* Others */}
                    <Skill click={(e) => console.log(e.target.getAttribute('source'))} heading={'Others'} data={other} />
                    {/* software */}
                    <Skill click={(e) => console.log(e.target.getAttribute('source'))} heading={'Software'} data={software} />
                </div>
            </div>
        </>
    )
}

export default Skills;