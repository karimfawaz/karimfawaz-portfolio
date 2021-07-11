import styles from '../styles/Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>

            <h1 className={`${styles.name} ${styles.first}`}>KARIM</h1>
            <h1 className={`${styles.name} ${styles.last}`}>FAWAZ</h1>
            <img className={` ${styles.code}  ${styles.smallIcon} ${styles.scale}`} src='/images/code.png' />
            <img className={` ${styles.bitcoin}  ${styles.smallIcon} ${styles.spin}`} src='/images/bitcoin.png' />
            <img className={` ${styles.cloud}  ${styles.smallIcon} ${styles.scale}`} src='/images/cloud.png' />
            <img className={` ${styles.check}  ${styles.smallIcon} ${styles.spin}`} src='/images/check.png' />
            <img className={` ${styles.browser}  ${styles.smallIcon} ${styles.scale}`} src='/images/browser.png' />

        </header>
    )
}

export default Header
