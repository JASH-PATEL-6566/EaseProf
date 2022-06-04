import React from 'react';
import checked from '../../Data/checked';
import badgesPreview from '../../Data/badgesPreview';
import PreviewSocialData from '../../Data/PreviewSocialData';

export default function MarkdownUp() {
    return (
        <>
            {checked.follower_count && <p>{`${badgesPreview.follower_count.tag_start}${badgesPreview.follower_count.link_start}${PreviewSocialData.github.value}${badgesPreview.follower_count.link_end}${badgesPreview.follower_count.tag_end}`}</p>}
            {checked.profile_trophy && <p>{`${badgesPreview.profile_trophy.tag_start}${badgesPreview.profile_trophy.link_start}${PreviewSocialData.github.value}${badgesPreview.profile_trophy.link_end}${badgesPreview.profile_trophy.tag_end}`}</p>}
        </>
    )
}