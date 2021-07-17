import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navbarNav}>
                <li className={styles.logo}>
                    <a target="_blank" href="https://docs.google.com/document/d/13_zOmZkl9dbCe95k1qPlEF38IczTEu7tnUK5Wgu3hgQ" className={styles.navLink}>
                        <span className={styles.linkText}>
                            Karim Fawaz
                        </span>

                        <object className={` ${styles.logoSVG}  +  ${styles.svg}`} data="/arrows.svg" />
                    </a>

                </li>
                <li className={styles.navItem}>
                    <a href="/" className={styles.navLink}>
                        <object className={styles.svg} data="/home.svg" />
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
