import classes from './navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
    const items = ['introduction', 'skills', 'socials', 'badges', 'support', 'contact-us']
    const router = useRouter();
    const current = router.pathname

    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <h1 onClick={() => router.replace('/')}><span>Ease</span>Prof</h1>
            </div>
            <ul>
                {items.map(item => (
                    <Link href={`/${item}`} key={item}>
                        <li className={`li ${current === `/${item}` ? 'active' : ""}`}>{item.replace('-', " ")}</li>
                    </Link>
                ))}
            </ul >
        </nav >
    )
}