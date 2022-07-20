import React from 'react';
import PrevSkillData from '../Data/PrevSkillData';
import PreviewSocialData from '../Data/PreviewSocialData';
import previewSupportData from '../Data/previewSupportData';
import badgesPreview from '../Data/badgesPreview';
import MarkdownHeader from './MarkdownOutput/MarkdownHeader';
import MarkdownSkill from './MarkdownOutput/MarkdownSkill';
import MarkdownSocial from './MarkdownOutput/MarkdownSocial';
import MarkdownSupport from './MarkdownOutput/MarkdownSupport';
import MarkdownCenter from './MarkdownOutput/MarkdownCenter';
import MarkdownUp from './MarkdownOutput/MarkdownUp';

export default function Markdown() {
    // console.log(document.querySelector(".markdown-contastatiner").innerHTML);
    return (
        <div className='markdown-container'>
            {/* Header Part */}
            <MarkdownHeader />

            {/* Skill part */}
            <MarkdownUp />


            {/* Skill part */}
            {PrevSkillData.count !== 0 && <p>{`<h2>`}Skills{`</h2>`}</p>}
            <MarkdownSkill />


            {/* Social Part*/}
            {PreviewSocialData.count !== 0 && <p>{`<h2>`}Social{`</h2>`}</p>}
            <MarkdownSocial />


            {/* Social Part*/}
            {badgesPreview.count !== 0 && <p>{`<h2>`}Badges{`</h2>`}</p>}
            <MarkdownCenter />

            {/* Output Part */}
            {previewSupportData.count !== 0 && <p>{`<h2>`}Support{`</h2>`}</p>}
            {<MarkdownSupport />}

        </div>
    )
}