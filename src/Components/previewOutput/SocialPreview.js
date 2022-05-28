import React from 'react';
import PreviewSocialData from '../../Data/PreviewSocialData';

export default function SocialPreview() {
    return (
        <>
            {PreviewSocialData.github.value &&
                <a target='_blank'  href={`${PreviewSocialData.github.default}` + `${PreviewSocialData.github.value}` + `${PreviewSocialData.github.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.github.img}`} alt={`${PreviewSocialData.github.alt}`} />
                </a>}

            {PreviewSocialData.twitter.value &&
                <a target='_blank'  href={`${PreviewSocialData.twitter.default}` + `${PreviewSocialData.twitter.value}` + `${PreviewSocialData.twitter.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.twitter.img}`} alt={`${PreviewSocialData.twitter.alt}`} />
                </a>}

            {PreviewSocialData.hashnode.value &&
                <a target='_blank'  href={`${PreviewSocialData.hashnode.default}` + `${PreviewSocialData.hashnode.value}` + `${PreviewSocialData.hashnode.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.hashnode.img}`} alt={`${PreviewSocialData.hashnode.alt}`} />
                </a>}

            {PreviewSocialData.medium.value &&
                <a target='_blank'  href={`${PreviewSocialData.medium.default}` + `${PreviewSocialData.medium.value}` + `${PreviewSocialData.medium.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.medium.img}`} alt={`${PreviewSocialData.medium.alt}`} />
                </a>}

            {PreviewSocialData.dev.value &&
                <a target='_blank'  href={`${PreviewSocialData.dev.default}` + `${PreviewSocialData.dev.value}` + `${PreviewSocialData.dev.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.dev.img}`} alt={`${PreviewSocialData.dev.alt}`} />
                </a>}
            {PreviewSocialData.linkedin.value &&
                <a target='_blank'  href={`${PreviewSocialData.linkedin.default}` + `${PreviewSocialData.linkedin.value}` + `${PreviewSocialData.linkedin.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.linkedin.img}`} alt={`${PreviewSocialData.linkedin.alt}`} />
                </a>}

            {PreviewSocialData.polywork.value &&
                <a target='_blank'  href={`${PreviewSocialData.polywork.default}` + `${PreviewSocialData.polywork.value}` + `${PreviewSocialData.polywork.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.polywork.img}`} alt={`${PreviewSocialData.polywork.alt}`} />
                </a>}

            {PreviewSocialData.twitch.value &&
                <a  target='_blank' href={`${PreviewSocialData.twitch.default}` + `${PreviewSocialData.twitch.value}` + `${PreviewSocialData.twitch.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.twitch.img}`} alt={`${PreviewSocialData.twitch.alt}`} />
                </a>}

            {PreviewSocialData.youtube.value &&
                <a  target='_blank' href={`${PreviewSocialData.youtube.default}` + `${PreviewSocialData.youtube.value}` + `${PreviewSocialData.youtube.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.youtube.img}`} alt={`${PreviewSocialData.youtube.alt}`} />
                </a>}

            {PreviewSocialData.discord.value &&
                <a target='_blank'  href={`${PreviewSocialData.discord.default}` + `${PreviewSocialData.discord.value}` + `${PreviewSocialData.discord.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.discord.img}`} alt={`${PreviewSocialData.discord.alt}`} />
                </a>}

            {PreviewSocialData.instagram.value &&
                <a target='_blank'  href={`${PreviewSocialData.instagram.default}` + `${PreviewSocialData.instagram.value}` + `${PreviewSocialData.instagram.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.instagram.img}`} alt={`${PreviewSocialData.instagram.alt}`} />
                </a>}

            {PreviewSocialData.facebook.value &&
                <a target='_blank'  href={`${PreviewSocialData.facebook.default}` + `${PreviewSocialData.facebook.value}` + `${PreviewSocialData.facebook.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.facebook.img}`} alt={`${PreviewSocialData.facebook.alt}`} />
                </a>}

            {PreviewSocialData.dribbble.value &&
                <a target='_blank'  href={`${PreviewSocialData.dribbble.default}` + `${PreviewSocialData.dribbble.value}` + `${PreviewSocialData.dribbble.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.dribbble.img}`} alt={`${PreviewSocialData.dribbble.alt}`} />
                </a>}

            {PreviewSocialData.behance.value &&
                <a target='_blank'  href={`${PreviewSocialData.behance.default}` + `${PreviewSocialData.behance.value}` + `${PreviewSocialData.behance.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.behance.img}`} alt={`${PreviewSocialData.behance.alt}`} />
                </a>}

            {PreviewSocialData.codesandbox.value &&
                <a target='_blank'  href={`${PreviewSocialData.codesandbox.default}` + `${PreviewSocialData.codesandbox.value}` + `${PreviewSocialData.codesandbox.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.codesandbox.img}`} alt={`${PreviewSocialData.codesandbox.alt}`} />
                </a>}

            {PreviewSocialData.codepen.value &&
                <a target='_blank'  href={`${PreviewSocialData.codepen.default}` + `${PreviewSocialData.codepen.value}` + `${PreviewSocialData.codepen.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.codepen.img}`} alt={`${PreviewSocialData.codepen.alt}`} />
                </a>}

            {PreviewSocialData.stackoverflow.value &&
                <a target='_blank'  href={`${PreviewSocialData.stackoverflow.default}` + `${PreviewSocialData.stackoverflow.value}` + `${PreviewSocialData.stackoverflow.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.stackoverflow.img}`} alt={`${PreviewSocialData.stackoverflow.alt}`} />
                </a>}

            {PreviewSocialData.rss.value &&
                <a target='_blank'  href={`${PreviewSocialData.rss.default}` + `${PreviewSocialData.rss.value}` + `${PreviewSocialData.rss.post}`}>
                    <img className='img-skill core-img' src={`${PreviewSocialData.rss.img}`} alt={`${PreviewSocialData.rss.alt}`} />
                </a>}
        </>
    )
}