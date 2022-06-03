import React from 'react';
import badgesPreview from '../../Data/badgesPreview';
import PreviewSocialData from '../../Data/PreviewSocialData';
import checked from '../../Data/checked';

export default function PreviewBadges() {
    return (
        <div className="output-badges-preview">
            {!checked.stats && <img src={`${badgesPreview.stats.link_start}${PreviewSocialData.github.value}${badgesPreview.stats.link_end}`} alt={badgesPreview.stats.alt} />}

            {!checked.streak && <img src={`${badgesPreview.streak.link_start}${PreviewSocialData.github.value}${badgesPreview.streak.link_end}`} alt={badgesPreview.streak.alt} />}

            {!checked.top_language && <img src={`${badgesPreview.top_language.link_start}${PreviewSocialData.github.value}${badgesPreview.top_language.link_end}`} alt={badgesPreview.top_language.alt} />}
        </div>
    )
}