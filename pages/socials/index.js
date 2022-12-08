import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';
import SocialInput from '../../Components/Input/socialInput';
const Socials = () => {
    return (
        <>
            <Head>
                <title>EaseProf | Socials</title>
            </Head>
            <div>
                <Upper
                    head="Socials"
                    desc="Connect with your visitors by adding links to your socials."
                />
                <div className="social_container">
                    <SocialInput />
                </div>
            </div>
        </>
    )
}

export default Socials;