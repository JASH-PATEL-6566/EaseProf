import classes from './contact.module.css';
import Head from 'next/head';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../Components/Input/Input';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, form.current, process.env.EMAIL_PUBLIC_KEY)
            .then((result) => { toast.success("Feedback successfully Send !") }, (error) => {
                toast.error("Something went wrong ! Please Try again ")
            })
        e.target.reset();
    };

    return (
        <>
            <Head>
                <title>EaseProf | ContactUs</title>
            </Head>
            <div className={classes.container}>
                <form ref={form} onSubmit={sendEmail} className={classes.form}>
                    <table className='contact_us' cellSpacing="10px">
                        <tr>
                            <td><label>Name : </label></td>
                            <td><Input clas="input_contact" type="text" place="Enter Your Name" name="user-name" /></td>
                        </tr>
                        <tr>
                            <td><label>Email : </label></td>
                            <td><Input clas="input_contact" type="email" name="user-email" place="Enter Your Email" /></td>
                        </tr>
                        <tr>
                            <td><label>Message : </label></td>
                            <td className='normal-input'><textarea style={{ fontSize: '1.45em', resize: 'none' }} rows={4} name="user-message" placeholder='Message.....' /></td>
                        </tr>
                    </table>
                    <input className='active_btn btn btn_new' type="submit" value="Send" />
                </form>
            </div>
            <ToastContainer
                position="bottom-right"
                hideProgressBar={false}
                autoClose={4000}
                newestOnTop={true}
                closeOnClick={false}
                draggable={false}
                rtl={false}
            />
        </>
    );
};

export default ContactUs;