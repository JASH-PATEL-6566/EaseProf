import React from 'react';
import checked from '../../Data/checked';
import badgesPreview from '../../Data/badgesPreview';
import PreviewSocialData from '../../Data/PreviewSocialData';

export default function MarkdownCenter() {
    return (
        <>
            {checked.stats && <p>{`${badgesPreview.stats.tag_start}${badgesPreview.stats.link_start}${PreviewSocialData.github.value}${badgesPreview.stats.link_end}${badgesPreview.stats.tag_end}`}</p>}
            {checked.streak && <p>{`${badgesPreview.streak.tag_start}${badgesPreview.streak.link_start}${PreviewSocialData.github.value}${badgesPreview.streak.link_end}${badgesPreview.streak.tag_end}`}</p>}
            {checked.top_language && <p>{`${badgesPreview.top_language.tag_start}${badgesPreview.top_language.link_start}${PreviewSocialData.github.value}${badgesPreview.top_language.link_end}${badgesPreview.top_language.tag_end}`}</p>}
        </>
    )
}