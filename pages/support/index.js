import classes from './support.module.css';
import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';

const Support = () => {
    const data = {
        img: 'https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-1.svg',
        title: 'BUY ME A COFFEE',
        alt: 'bmc',
        def: 'https://www.buymeacoffee.com/'
    }
    const { img, alt, title, def } = data;
    return (
        <>
            <Head>
                <title>EaseProf | Support</title>
            </Head>
            <div>
                <Upper
                    head="Support"
                    desc="Make it easy for people using your products to support you or give donations."
                />
                <div className="support-container">
                    <h1>Support</h1>
                    <div key={alt}>
                        <div className='title-social'>
                            <img
                                src={img}
                                height={20}
                                width={20}
                                alt={alt}
                            />
                            <h3>{title}</h3>
                        </div>
                        <div className='span-container'>
                            <span className='pre-span'>{def}</span>
                            <input className='normal-input input-social' type="text" placeholder="YourUsername" def={def} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support;