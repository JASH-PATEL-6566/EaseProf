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
    return (
        <div className='markdown-container'>
            {/* Header Part */}
            <MarkdownHeader />
            <div className='output-badges-up'>
                {/* Skill part */}
                <MarkdownUp />
            </div>
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
            <div className='output-badges-center'>
                {/* Social Part*/}
                {badgesPreview.count !== 0 && <p>{`<h2>`}Badges{`</h2>`}</p>}
                <MarkdownCenter />
            </div>
            <div className='output-support'>
                {/* Output Part */}
                {previewSupportData.count !== 0 && <p>{`<h2>`}Support{`</h2>`}</p>}
                {<MarkdownSupport />}
            </div>
        </div>
    )
}