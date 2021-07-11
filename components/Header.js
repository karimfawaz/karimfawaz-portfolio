import styles from '../styles/Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>

            <h1 className={styles.name}>KARIM FAWAZ </h1>
            <img className={` ${styles.code}  ${styles.smallIcon}`} src='/images/code.png' />
            <img className={` ${styles.bitcoin}  ${styles.smallIcon}`} src='/images/bitcoin.png' />
            <img className={` ${styles.cloud}  ${styles.smallIcon}`} src='/images/cloud.png' />

        </header>
    )
}

export default Header
