import React from 'react'
import data from '../../Data/PreviewSocialData';

export default function MarkdownSocial() {
    return (
        <>
            {data.github.value && <p>{data.github.start_tag}{data.github.default}{data.github.value}{data.github.mid_tag}{data.github.img}{data.github.end_tsg}{data.github.alt}{data.github.ended_tag}</p>}
            {data.twitter.value && <p>{data.twitter.start_tag}{data.twitter.default}{data.twitter.value}{data.twitter.mid_tag}{data.twitter.img}{data.twitter.end_tsg}{data.twitter.alt}{data.twitter.ended_tag}</p>}
            {data.hashnode.value && <p>{data.hashnode.start_tag}{data.hashnode.default}{data.hashnode.value}{data.hashnode.post}{data.hashnode.mid_tag}{data.hashnode.img}{data.hashnode.end_tsg}{data.hashnode.alt}{data.hashnode.ended_tag}</p>}
            {data.medium.value && <p>{data.medium.start_tag}{data.medium.default}{data.medium.value}{data.medium.mid_tag}{data.medium.img}{data.medium.end_tsg}{data.medium.alt}{data.medium.ended_tag}</p>}
            {data.dev.value && <p>{data.dev.start_tag}{data.dev.default}{data.dev.value}{data.dev.mid_tag}{data.dev.img}{data.dev.end_tsg}{data.dev.alt}{data.dev.ended_tag}</p>}
            {data.linkedin.value && <p>{data.linkedin.start_tag}{data.linkedin.default}{data.linkedin.value}{data.linkedin.mid_tag}{data.linkedin.img}{data.linkedin.end_tsg}{data.linkedin.alt}{data.linkedin.ended_tag}</p>}
            {data.polywork.value && <p>{data.polywork.start_tag}{data.polywork.default}{data.polywork.value}{data.polywork.mid_tag}{data.polywork.img}{data.polywork.end_tsg}{data.polywork.alt}{data.polywork.ended_tag}</p>}
            {data.twitch.value && <p>{data.twitch.start_tag}{data.twitch.default}{data.twitch.value}{data.twitch.mid_tag}{data.twitch.img}{data.twitch.end_tsg}{data.twitch.alt}{data.twitch.ended_tag}</p>}
            {data.youtube.value && <p>{data.youtube.start_tag}{data.youtube.default}{data.youtube.value}{data.youtube.mid_tag}{data.youtube.img}{data.youtube.end_tsg}{data.youtube.alt}{data.youtube.ended_tag}</p>}
            {data.discord.value && <p>{data.discord.start_tag}{data.discord.default}{data.discord.value}{data.discord.mid_tag}{data.discord.img}{data.discord.end_tsg}{data.discord.alt}{data.discord.ended_tag}</p>}
            {data.instagram.value && <p>{data.instagram.start_tag}{data.instagram.default}{data.instagram.value}{data.instagram.mid_tag}{data.instagram.img}{data.instagram.end_tsg}{data.instagram.alt}{data.instagram.ended_tag}</p>}
            {data.facebook.value && <p>{data.facebook.start_tag}{data.facebook.default}{data.facebook.value}{data.facebook.mid_tag}{data.facebook.img}{data.facebook.end_tsg}{data.facebook.alt}{data.facebook.ended_tag}</p>}
            {data.dribbble.value && <p>{data.dribbble.start_tag}{data.dribbble.default}{data.dribbble.value}{data.dribbble.mid_tag}{data.dribbble.img}{data.dribbble.end_tsg}{data.dribbble.alt}{data.dribbble.ended_tag}</p>}
            {data.behance.value && <p>{data.behance.start_tag}{data.behance.default}{data.behance.value}{data.behance.mid_tag}{data.behance.img}{data.behance.end_tsg}{data.behance.alt}{data.behance.ended_tag}</p>}
            {data.codesandbox.value && <p>{data.codesandbox.start_tag}{data.codesandbox.default}{data.codesandbox.value}{data.codesandbox.mid_tag}{data.codesandbox.img}{data.codesandbox.end_tsg}{data.codesandbox.alt}{data.codesandbox.ended_tag}</p>}
            {data.codepen.value && <p>{data.codepen.start_tag}{data.codepen.default}{data.codepen.value}{data.codepen.mid_tag}{data.codepen.img}{data.codepen.end_tsg}{data.codepen.alt}{data.codepen.ended_tag}</p>}
            {data.stackoverflow.value && <p>{data.stackoverflow.start_tag}{data.stackoverflow.default}{data.stackoverflow.value}{data.stackoverflow.mid_tag}{data.stackoverflow.img}{data.stackoverflow.end_tsg}{data.stackoverflow.alt}{data.stackoverflow.ended_tag}</p>}
            {data.rss.value && <p>{data.rss.start_tag}{data.rss.default}{data.rss.value}{data.rss.mid_tag}{data.rss.img}{data.rss.end_tsg}{data.rss.alt}{data.rss.ended_tag}</p>}
        </>
    );
}