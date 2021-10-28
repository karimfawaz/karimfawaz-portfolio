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
                        Produced 1 website using HTML, CSS, JavaScript, and PHP for my 1st year Fundamentals of Web Technology module final project, and 2 websites using React.js and Next.js. 
                    </div>

                </div>
                <div className={styles.skillcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/mobile.png' />
                        <h5 className={styles.cardHeadertitle}>Mobile App Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        Attended and completed several workshops, boot camps, and online courses. Developed 6 android applications: 5 using Java, and 1 using Kotlin on Android Studio. Developed 1 cross-platform application and 6 application prototypes using Flutter, Dart, and Firebase. 
                    </div>

                </div>
                <div className={styles.skillcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/game.png' />
                        <h5 className={styles.cardHeadertitle}>Game Development</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        Developed 12 2D arcade games on Unity2D using C#, 2 of which were published on the Google Play Store. 
                    </div>

                </div>
                <div className={styles.skillcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/settings.png' />
                        <h5 className={styles.cardHeadertitle}>Search Engine Optimization</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        Increased a company’s SEO ranking by 30% and made their website appear on the first page of the Google Search results for their designated niche.
                    </div>

                </div>
                <div className={styles.skillcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/shop.png' />
                        <h5 className={styles.cardHeadertitle}>E-Commerce</h5>
                    </div>
                    <div className={styles.cardDetails}>
                        Created and lead my own e-store, OneInStock.me. Produced the Frontend and used Shopify and ECWID for the store’s backend and stock management. Operated from 2019 until 2020 as a website. Became a profitable business after 6 months with over 100 orders. 
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Skills
