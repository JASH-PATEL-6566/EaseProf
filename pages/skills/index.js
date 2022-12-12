import classes from './skills.module.css';
import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';
import Skill from '../../Components/skill/Skill';
import { backend, core, frontend, other, software } from '../../Data/skill';
import { useData } from '../../Context/DataContext';

const Skills = () => {

    const { appendSkill, popSkill } = useData();

    const toggle = (e) => {
        const source = e.target.getAttribute('source');
        const img = e.target.getAttribute('src');
        const title = e.target.getAttribute('id');
        const item = {
            title,
            img,
            ref: source
        }
        e.target.classList.toggle('light');
        if (e.target.classList.contains('light')) {
            appendSkill(item);
        }
        else {
            popSkill(title)
        }
    }

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
                    <Skill click={toggle} heading={'Core'} data={core} />
                    {/* frontEnd */}
                    <Skill click={toggle} heading={'FrontEnd'} data={frontend} />
                    {/* backEnd */}
                    <Skill click={toggle} heading={'BackEnd'} data={backend} />
                    {/* Others */}
                    <Skill click={toggle} heading={'Others'} data={other} />
                    {/* software */}
                    <Skill click={toggle} heading={'Software'} data={software} />
                </div>
            </div>
        </>
    )
}

export default Skills;