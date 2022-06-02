import React from 'react';
import activeBtn from '../Data/active-btn';
import Preview from './Preview';
import Markdown from './Markdown';

export default function Output(props) {
    const [active, setactive] = React.useState(activeBtn);

    function output_toggle(e) {
        e.preventDefault();
        document.querySelectorAll('.btn').forEach(item => {
            item.classList.remove('active-btn');
        })
        e.target.classList.add('active-btn');
        const value = e.target.getAttribute('value');
        const ans = false;
        if (value === 'preview') {
            activeBtn.preview = true;
            activeBtn.markdown = false;
        }
        else {
            activeBtn.preview = false;
            activeBtn.markdown = true;
        }
        setactive(prev => {
            return (
                {
                    ...prev
                }
            )
        })
    }


    return (
        <div className='output-container'>
            <div className='btn-section'>
                <button className='btn preview active-btn' onClick={output_toggle} value='preview'>PREVIEW</button>
                <button className='btn code ' onClick={output_toggle} value='markdown'>MARKDOWN</button>
                <button className='btn copy'>COPY</button>
            </div>
            {activeBtn.preview &&
                <Preview />
            }
            {activeBtn.markdown &&
                <Markdown />
            }
        </div>
    );
}