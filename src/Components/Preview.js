import React from 'react';
import OutputHeader from './previewOutput/OutputHeader';
import SkillbadgesPreview from './previewOutput/SkillbadgesPreview';
import PrevSkillData from '../Data/PrevSkillData';
import PreviewSocialData from '../Data/PreviewSocialData';
import SocialPreview from './previewOutput/SocialPreview';
import SupportPreview from './previewOutput/SupportPreview';
import previewSupportData from '../Data/previewSupportData';
import badgesPreview from '../Data/badgesPreview';
import PreviewBadges from './previewOutput/PreviewBadges';

export default function Preview() {
    return (
        <div className='preview_container'>
            <OutputHeader />
            <div className="output-count-trophy">

            </div>
            <div className='output-skill'>
                {PrevSkillData.count !== 0 && <h2 className='skill-name-output'>Skills</h2>}
                <SkillbadgesPreview />
            </div>
            <div className='output-social'>
                {PreviewSocialData.count !== 0 && <h2 className='social-name-output'>Social</h2>}
                <SocialPreview />
            </div>
            <div className="output-badges">
                {badgesPreview.count !== 0 && <h2 className='social-name-output'>Badges</h2>}
                <PreviewBadges />
            </div>
            <div className='output-support'>
                {previewSupportData.count !== 0 && <h2 className='social-name-output'>Support</h2>}
                <SupportPreview />
            </div>
        </div>
    );
}