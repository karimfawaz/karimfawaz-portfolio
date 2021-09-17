import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navbarNav}>
                <li className={styles.logo}>
                    <a href="/" className={styles.navLink}>
                        <span className={`${styles.linkText} + ${styles.logoText}`}>
                            Karim
                        </span>

                        <object className={` ${styles.logoSVG}  +  ${styles.svg}`} data="/svgs/arrows.svg" />
                    </a>

                </li>
                <li className={styles.navItem}>
                    <a target="_blank" href="https://docs.google.com/document/d/11-jbGjA2JkAblzrHfIRRPsfoy00gsVhSiIL82ca1ktM/edit?usp=sharing" className={styles.navLink}>

                        <object className={styles.svg} data="/svgs/cv.svg" />
                        <span className={styles.linkText}>
                            CV
                        </span>


                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="/" className={styles.navLink}>
                        <object className={`${styles.svg} + ${styles.homeSVG} `} data="/svgs/home.svg" />
                        <span className={styles.linkText}>
                            HOME
                        </span>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Nav
