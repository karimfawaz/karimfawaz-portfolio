import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navbarNav}>
                <li className={styles.logo}>
                    <a href="#" className={styles.navLink}>
                    <span className={styles.linkText}>
                            Karim Fawaz
                        </span>

                    </a>

                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        <span className={styles.linkText}>
                            TEST
                        </span>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Nav
