import React from 'react';
import Output from './Output';
import Form from './introsection/Form';
import SkillDivs from './skillsSection/SkillDivs';
import Socialmain from './social/Socialmain';
import Supportmain from './Support/Supportmain';
import Badgesmain from './Badges/Badgesmain';
import About from './AboutMe/About';
import AboutImg from './AboutMe/AboutImg';
import outputHeaderData from '../Data/outputHeaderData';
import PrevSkillData from '../Data/PrevSkillData';
import skillName from '../Data/skillName';
import PreviewSocialData from '../Data/PreviewSocialData';
import previewSupportData from '../Data/previewSupportData';
import checked from '../Data/checked';
import badgesPreview from '../Data/badgesPreview';

export default function MainContainer(props) {

    const [inner, setinner] = React.useState('')
    const [toggle, settoggle] = React.useState(skillName)
    const [user, setuser] = React.useState('');
    const [check, setCheck] = React.useState(false);

    let element;
    let count = 0;
    function headerChange(e) {
        const putvalue = e.target.getAttribute('putvalue');
        const linkPresent = e.target.hasAttribute('link')
        const link = '';
        const value = '';
        element = putvalue;
        setinner(prev => {
            if (linkPresent) {
                outputHeaderData[putvalue].link = e.target.value
                return (e.target.value)
            }
            outputHeaderData[putvalue].value = e.target.value
            return (e.target.value)
        })
    }
    function imageToggle(e) {
        e.target.classList.toggle('gray-scale')
        const toggle = e.target.getAttribute('alt')
        let ans;
        if (e.target.classList.contains('gray-scale')) {
            ans = false
            PrevSkillData.count--;
        }
        else {
            PrevSkillData.count++;
            ans = true
        }
        settoggle(prev => {
            skillName[toggle] = ans
            return ({
                ...prev,
                [prev[toggle]]: ans
            })
        })
    }

    function socialChange(e) {
        const putvalue = e.target.getAttribute('putvalue');
        element = putvalue
        setuser(prev => {
            PreviewSocialData[putvalue].value = e.target.value
            return (e.target.value)
        })
        PreviewSocialData.count = e.target.value.length;
    }

    function supportChange(e) {
        const putvalue = e.target.getAttribute('putvalue');
        element = putvalue
        setuser(prev => {
            previewSupportData[putvalue].value = e.target.value
            return (e.target.value)
        })
        previewSupportData.count = e.target.value.length;
    }

    let i = 0;
    function addBadges(e) {
        const putvalue = e.target.getAttribute('putvalue');
        const contain = e.target.classList.contains('display');
        // console.log(e.target.checked)
        console.log(contain);
        let ans;
        if (contain) {
            ans = false
            e.target.classList.remove('display');
            badgesPreview.count--;
        }
        else {
            ans = true
            e.target.classList.add('display');
            badgesPreview.count++;
        }

        if (!(checked.stats && checked.streak && checked.top_language)) {
            count = 0;
        }

        setCheck(prev => {
            checked[putvalue] = ans;
            return !prev;
        })
        console.log(checked)
    }

    return (
        <main className='main-container'>
            {!props.active.AboutMe && <div className='form-group'>
                {props.active.intro && < Form
                    onEvent={headerChange}
                />}
                {props.active.Skills && <SkillDivs
                    onEvent={imageToggle}
                />}
                {props.active.Social && <Socialmain
                    onEvent={socialChange}
                />}
                {props.active.Support && <Supportmain
                    onEvent={supportChange}
                />}
                {props.active.Badges && <Badgesmain
                    click={addBadges}
                />}
            </div>}
            {!props.active.AboutMe && <Output />}
            {props.active.AboutMe && <About />}
            {props.active.AboutMe && <AboutImg />}
        </main>
    );
}