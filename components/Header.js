import styles from '../styles/Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <table className={styles.table}>
                <tr>
                    <td colSpan="2">
                        <h1 className={`${styles.name} ${styles.first}`}>KARIM</h1>
                    </td>
                    <td>
                        <img className={`  ${styles.smallIcon} ${styles.scale}`} src='/images/cloud.png' />

                    </td>
                    <td>

                    </td>
                    <td className={styles.alignCenter}>
                        <img className={`  ${styles.smallIcon} ${styles.spin}`} src='/images/check.png' />


                    </td>
                </tr>



                <tr>
                    <td >
                        <img className={`  ${styles.smallIcon} ${styles.scale}`} src='/images/code.png' />
                    </td>

                    <td className={styles.alignEnd}>
                        <img className={`  ${styles.smallIcon} ${styles.spin}`} src='/images/bitcoin.png' />
                    </td>

                    <td >
                        <h1 className={`${styles.name} ${styles.last}`}>FAWAZ</h1>
                    </td>

                    <td >
                        <img className={` ${styles.smallIcon} ${styles.scale}`} src='/images/chart.png' />
                    </td>


                </tr>
            </table>

        </header>
    )
}

export default Header
