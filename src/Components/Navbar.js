import React from 'react';

export default function Navbar(props) {
    return (
        <nav className='navbar'>
            <div className='name'>
                EaseProf
            </div>
            <div className='list'>
                <ul className='list-container'>
                    <li className='list-item np' onClick={props.onEvent}><a className='link active-list-item' href='https://www.EaseProf.com/information' value="intro">INTRODUCTION</a></li>
                    <li className='list-item' onClick={props.onEvent}><a className='link active-list-item' href='https://www.EaseProf.com/skill' value="Skills">SKILL</a></li>
                    <li className='list-item' onClick={props.onEvent}><a className='link active-list-item' href='https://www.EaseProf.com/social' value="Social">SOCIALS</a></li>
                    <li className='list-item' onClick={props.onEvent}><a className='link active-list-item' href='https://www.EaseProf.com/badges' value="Badges">BADGES</a></li>
                    <li className='list-item' onClick={props.onEvent}><a className='link active-list-item' href='https://www.EaseProf.com/Support' value="Support">SUPPORT</a></li>
                    <li className='list-item' onClick={props.onEvent}><a className='link active-list-item' href='https://www.EaseProf.com/AboutMe' value="AboutMe">CONTACT US</a></li>
                </ul>
            </div>
            <div className='theme'>
                <input type="checkbox" name="" id="check" className="toggle" />
                <label htmlFor="check"></label>
            </div>
        </nav>
    );
}