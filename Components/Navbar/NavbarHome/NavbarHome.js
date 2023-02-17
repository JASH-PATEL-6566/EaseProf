import classes from './navbarhome.module.css';

const NavbarHome = () => {
    return (
        <>
            <div className={classes.nav_home}>
                <div className={classes.logo}>
                    <h1><span>Ease</span>Prof</h1>
                </div>
            </div>
        </>
    )
}

export default NavbarHome;