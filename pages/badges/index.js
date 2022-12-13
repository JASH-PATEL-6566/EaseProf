import classes from './badges.module.css';
import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';
import BadgesCard from '../../Components/badgesCard/BadgesCard';
import { useData } from '../../Context/DataContext';

const Badges = () => {

    const { data, changeData } = useData();

    const dataGit = {
        id: 'github',
        title: 'GITHUB PROFILE:',
        img: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png',
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
                    <div key={dataGit.alt}>
                        <div className='title-social'>
                            <img
                                src={dataGit.img}
                                height={20}
                                width={20}
                                alt={dataGit.alt}
                            />
                            <h3>{dataGit.title}</h3>
                        </div>
                        <div className='span-container'>
                            <span className='pre-span'>{dataGit.def}</span>
                            <input className='normal-input input-social' type="text" placeholder="YourUsername" def={dataGit.def} value={data.github} onChange={(e) => changeData('github', e.target.value)} />
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