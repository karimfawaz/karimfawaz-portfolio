import styles from '../styles/Languages.module.css'

const Languages = () => {
    return (
        <section className={styles.languagesSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/languages.png' />
                <h3 className={styles.headerTitle}>Languages</h3>
            </div>

            <div className={styles.languagesList}>
                <div className={styles.languagescard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/browser.png' />
                        <h5 className={styles.cardHeadertitle}>English</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.languagescard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/mobile.png' />
                        <h5 className={styles.cardHeadertitle}>French</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.languagescard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/ufo.png' />
                        <h5 className={styles.cardHeadertitle}>Arabic</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
               
            </div>
        </section>
    )
}

export default Languages
