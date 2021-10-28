import styles from "../styles/Nav.module.css"

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navItems}>

                <div className={styles.navItem}>CV</div>
                <div className={styles.navItem}>BLOG</div>

                <div className={styles.navItem}>PROJECTS</div>
                
            </div>
        </div>
    )
}

export default Nav
