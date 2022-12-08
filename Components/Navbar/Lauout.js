import { Navbar } from "./nav-com/Navbar";
import ReactMarkdown from 'react-markdown';
import { useState } from "react";
import { useData } from '../../Context/DataContext'
import rehypeRaw from 'rehype-raw'


export default function Layout({ children }) {
    const { data } = useData();

    const [text, setText] = useState("");

    const markdown = `# jash\n# jash`;

    const changeView = (e, value) => {
        const changeAll = document.querySelectorAll('.change');
        changeAll.forEach(change => {
            change.classList.remove('active_btn');
        })
        e.target.classList.add('active_btn');

        const allBtn = document.querySelectorAll('.toggle');

        allBtn.forEach(btn => {
            btn.classList.add('display_none');
        })
        document.getElementById(`${value}`).classList.remove('display_none');

    }
    return (
        <section>
            <Navbar />
            <main className="main">
                <div className="main-part sub sub1">{children}</div>
                <div className="sub sub2">
                    <div className="btn">
                        <div className="btn-container">
                            <button className="prev change active_btn" value='preview' onClick={(e) => {
                                const value = e.target.value;
                                changeView(e, value);
                            }}>Preview</button>
                            <button className="mark change" value='markdown' onClick={(e) => {
                                const value = e.target.value;
                                changeView(e, value);
                            }}>Markdown</button>
                        </div>
                        <button className="copy">Copy</button>
                    </div>
                    {/* s */}
                    <div className="toggle mark-div" id='preview'>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />
                    </div>
                    <div className="markdown">
                        <textarea readOnly name="area" id="markdown" className="area toggle display_none" value={markdown} onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                </div>
            </main>
        </section>
    )
}