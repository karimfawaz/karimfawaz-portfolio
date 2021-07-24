import styles from '../styles/Skills.module.css'

const Skills = () => {
    return (
        <section className={styles.skillSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/rocket.png' />
                <h3 className={styles.headerTitle}>Skills</h3>
            </div>

            <div className={styles.skillList}>
                <div className={styles.skillcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/browser.png' />
                        <h5 className={styles.cardHeadertitle}>Web Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.skillcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/mobile.png' />
                        <h5 className={styles.cardHeadertitle}>Mobile App Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.skillcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/ufo.png' />
                        <h5 className={styles.cardHeadertitle}>Game Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.skillcard}>
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

export default Skills
