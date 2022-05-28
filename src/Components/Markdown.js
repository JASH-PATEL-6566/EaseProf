import React from 'react';
import PrevSkillData from '../Data/PrevSkillData';
import PreviewSocialData from '../Data/PreviewSocialData';
import previewSupportData from '../Data/previewSupportData';
import MarkdownHeader from './MarkdownOutput/MarkdownHeader';
import MarkdownSkill from './MarkdownOutput/MarkdownSkill';
import MarkdownSocial from './MarkdownOutput/MarkdownSocial';
import MarkdownSupport from './MarkdownOutput/MarkdownSupport';

export default function Markdown() {
    return (
        <div className='markdown-container'>
            {/* Header Part */}
            <MarkdownHeader />
            <div className='output-skill'>
                {/* Skill part */}
                {PrevSkillData.count !== 0 && <p>{`<h2>`}Skills{`</h2>`}</p>}
                <MarkdownSkill />
            </div>
            <div className='output-social'>
                {/* Social Part*/}
                {PreviewSocialData.count !== 0 && <p>{`<h2>`}Social{`</h2>`}</p>}
                <MarkdownSocial />
            </div>
            <div className='output-support'>
                {/* Output Part */}
                {previewSupportData.count !== 0 && <p>{`<h2>`}Support{`</h2>`}</p>}
                {<MarkdownSupport />}
            </div>
        </div>
    )
}