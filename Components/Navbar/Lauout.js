import { Navbar } from "./nav-com/Navbar";
import ReactMarkdown from 'react-markdown';
import { useState } from "react";

export default function Layout({ children }) {
    const [text, setText] = useState("");
    return (
        <section>
            <Navbar />
            <main className="main">
                <div className="main-part sub sub1">{children}</div>
                <div className="sub sub2">
                    <div className="btn">
                        <div className="btn-container">
                            <button className="prev">Preview</button>
                            <button className="mark">Markdown</button>
                        </div>
                        <button className="copy">Copy</button>
                    </div>
                    <h1>Display</h1>
                    <ReactMarkdown children={text} />
                </div>
                <div className="area">
                    <textarea name="area" id="area" cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
            </main>
        </section>
    )
}