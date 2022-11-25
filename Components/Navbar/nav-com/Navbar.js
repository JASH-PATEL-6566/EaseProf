import classes from './navbar.module.css';
import Link from 'next/link';

export const Navbar = () => {
    const items = ['introduction', 'skills', 'socials', 'badges', 'support', 'contact-us']
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <h1><span>Ease</span>Prof</h1>
            </div>
            <ul>
                {items.map(item => (
                    <Link href={`/${item}`} key={item}>
                        <li className='li' onClick={(e) => {
                            const all = document.querySelectorAll('li');
                            all.forEach(one => one.classList.remove('active'));
                            e.target.classList.add('active');
                        }}>{item.replace('-', " ")}</li>
                    </Link>
                ))}
            </ul >
        </nav >
    )
}