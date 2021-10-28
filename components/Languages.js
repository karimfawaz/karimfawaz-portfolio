import styles from '../styles/Languages.module.css'

const Languages = () => {
    return (
        <section className={styles.languagesSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/languages.png' />
                <h3 className={styles.headerTitle}>Languages </h3>
            </div>
            <div className={styles.languagesList}>

            <div className={styles.language}>
                <img className={styles.languageImg} src='/images/france.png' />
                <h3 className={styles.languageTitle}>French (Native)</h3>
            </div>
            
            <div className={styles.language}>
                <img className={styles.languageImg} src='/images/uk.png' />
                <h3 className={styles.languageTitle}>English (Native)</h3>
            </div>
            
            <div className={styles.language}>
                <img className={styles.languageImg} src='/images/arabic.png' />
                <h3 className={styles.languageTitle}>Arabic (Native)</h3>
            </div>
            </div>
        </section>
    )
}

export default Languages
