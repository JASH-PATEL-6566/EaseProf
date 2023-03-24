import { Navbar } from "./nav-com/Navbar";
import React from 'react'

function ContactLayout({ children }) {
    return (
        <>
            <>
                <Navbar />
            </>
            <>
                {children}
            </>
        </>
    )
}

export default ContactLayout;