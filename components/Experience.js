import styles from '../styles/Experience.module.css'

const Experience = () => {
    return (
        <section className={styles.expSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/building.png' />
                <h3 className={styles.headerTitle}>Experience</h3>
            </div>

            <div className={styles.expList}>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/citronniers.png' />
                        <h5 className={styles.cardHeadertitle}>Garderie Les Citronniers</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/lau.jfif' />
                        <h5 className={styles.cardHeadertitle}>Lebanese American University</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/cme.jfif' />
                        <h5 className={styles.cardHeadertitle}>CME Offshore Sal.</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/cme.jfif' />
                        <h5 className={styles.cardHeadertitle}>CME Offshore Sal.</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div><div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/synkers.png' />
                        <h5 className={styles.cardHeadertitle}>Ostaz (formerly Synkers)</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        <p>Hey there I use HTML CSS and JS to build websites </p>
                    </div>

                </div><div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/aub.png' />
                        <h5 className={styles.cardHeadertitle}>American University of Beirut</h5>
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
