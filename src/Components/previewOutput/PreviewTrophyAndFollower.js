import React from 'react';
import badgesPreview from '../../Data/badgesPreview';
import PreviewSocialData from '../../Data/PreviewSocialData';
import checked from '../../Data/checked';

export default function PreviewTrophyAndFollower() {
    return (
        <>
            {checked.follower_count && <img src={`${badgesPreview.follower_count.link_start}${PreviewSocialData.github.value}${badgesPreview.follower_count.link_end}`} alt={badgesPreview.follower_count.alt} />}

            {checked.profile_trophy && <img src={`${badgesPreview.profile_trophy.link_start}${PreviewSocialData.github.value}${badgesPreview.profile_trophy.link_end}`} alt={badgesPreview.profile_trophy.alt} />}
        </>
    )
}