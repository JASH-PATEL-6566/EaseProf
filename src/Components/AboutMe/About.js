import React from 'react';
import emailjs from 'emailjs-com';

export default function About() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_r303b9b', e.target, 'fLPGwHB1FRsrCxeCk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className='about-container'>
            <form onSubmit={sendEmail}>
                <h3 className='about-name'>GET IN TOUCH</h3>
                <div className='form-group-about'>
                    <label htmlFor='subject'>Subject :</label>
                    <input type="text" className='about-input' id="subject" name="subject" required />

                    <label htmlFor='user-name'>Fullname Name :</label>
                    <input type="text" className='about-input' id="user-name" name="user-name" required />

                    <label htmlFor='user-email'>Email :</label>
                    <input type="email" className='about-input' id="user-email" name="user-email" required />

                    <label htmlFor='user-message'>Message :</label>
                    <textarea id="user-message" className='about-inputarea' name="user-message" required rows='5' cols='40' />

                    <button type='submit' className='about-submit'>Send</button>
                </div>
            </form>
        </div>
    );
}
