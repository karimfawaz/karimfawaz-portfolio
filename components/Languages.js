import styles from '../styles/Languages.module.css'

const Languages = () => {
    return (
        <section className={styles.languagesSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/languages.png' />
                <h3 className={styles.headerTitle}>Languages</h3>
            </div>

        </section>
    )
}

export default Languages
