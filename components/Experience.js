import styles from '../styles/Experience.module.css'

const Experience = () => {
    return (
        <section className={styles.expSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/network.png' />
                <h3 className={styles.headerTitle}>Experience</h3>
            </div>

            <div className={styles.expList}>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/browser.png' />
                        <h5 className={styles.cardHeadertitle}>Web Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/mobile.png' />
                        <h5 className={styles.cardHeadertitle}>Mobile App Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/ufo.png' />
                        <h5 className={styles.cardHeadertitle}>Game Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/settings.png' />
                        <h5 className={styles.cardHeadertitle}>Procedural Programming</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience
