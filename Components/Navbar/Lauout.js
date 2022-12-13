import { Navbar } from "./nav-com/Navbar";
import ReactMarkdown from 'react-markdown';
import { useData } from '../../Context/DataContext'
import rehypeRaw from 'rehype-raw'


export default function Layout({ children }) {
    const { data } = useData();

    const markdown = `${data.name !== '' ? `<h1 align="center">👋 Hola, I'm ${data.name}</h1>` : ''}\n\n${data.subtitle !== '' ? `<h3 align="center">${data.subtitle}</h3>` : ''}\n\n${data.based !== '' ? `- 🌍 I'm based in **${data.based}**` : ''}\n${(data.portfolio !== '' && data.portfolio_link !== '') ? `- 🖥️ See my protfolio *<u><a href=${data.portfolio_link} target="_blank">${data.portfolio}</a></u>*` : ''}\n${(data.contact !== '') ? `- ✉️ Contact Me At *<u><a href=${`mailto:${data.contact}`} target="_blank">${data.contact}</a></u>*` : ''}\n${(data.currentWork !== '' && data.currentWork_link !== '') ? `- 🚀 I'm currently working on *<u><a href=${data.currentWork_link} target="_blank">${data.currentWork}</a></u>*` : ''}\n${data.collaborate !== '' ? `- 🤝 I'm open to Collaborating on **${data.collaborate}**` : ''}\n${data.else !== '' ? `- ${data.else}` : ''}\n${data.social.length > 0 ? `<h2>Social</h2>` : ''}\n${data.social.map(item => (
        `<a href=${item.link} target="_blank" ><img src=${item.img} height="40" width="40" alt=${item.title}/>\n`
    )).join('')}\n${data.skill.length > 0 ? `<h2>Skills</h2>` : ''}\n${data.skill.map(item => (
        `<a href=${item.ref} target="_blank" ><img src=${item.img} height="40" width="40" alt=${item.title}/>\n`
    )).join('')}`;

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
                        <button className="copy" onClick={() => {
                            document.getElementById('markdown').select();
                            document.execCommand("copy");
                        }}>Copy</button>
                    </div>
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