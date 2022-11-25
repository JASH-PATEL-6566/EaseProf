import classes from './badges.module.css';
import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';
import BadgesCard from '../../Components/badgesCard/BadgesCard';

const Badges = () => {
    const data = {
        title: 'GITHUB PROFILE:',
        img: 'https://www.profileme.dev/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdanielcranney%2Freadme-generator%2Fmain%2Fpublic%2Ficons%2Fsocials%2Fgithub-dark.svg&w=32&q=75',
        def: 'https://www.github.com/',
        alt: 'github',
    }
    return (
        <>
            <Head>
                <title>EaseProf | Badges</title>
            </Head>
            <div>
                <Upper
                    head="Badges"
                    desc="Add some badges and stats to your profile."
                />
                <div className="badges_container">
                    <div key={data.alt}>
                        <div className='title-social'>
                            <img
                                src={data.img}
                                height={20}
                                width={20}
                                alt={data.alt}
                            />
                            <h3>{data.title}</h3>
                        </div>
                        <div className='span-container'>
                            <span className='pre-span'>{data.def}</span>
                            <input className='normal-input input-social' type="text" placeholder="YourUsername" def={data.def} />
                        </div>
                    </div>
                    <div className="badges">
                        <h1>Badges</h1>
                        <BadgesCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Badges;