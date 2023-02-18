import classes from './navbarhome.module.css';
import Button from '@mui/material/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';


const NavbarHome = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>EaseProf</title>
            </Head>
            <div className={classes.nav_home}>
                <div className={classes.logo}>
                    <h1><span>Ease</span>Prof</h1>
                </div>
                <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={() => router.replace('/introduction')}
                >
                    Create Profile
                </Button>
            </div>
        </>
    )
}

export default NavbarHome;