import styles from '../styles/About.module.css'


const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/about.png' />
                <h3 className={styles.headerTitle}>About</h3>
            </div>
            <div className={styles.container}>
                <article className={styles.aboutText}>
                Software developer with a constant desire to learn new skills and technologies. Self-taught in 18 languages, libraries, and interfaces, I am goal driven, inquisitive, as demonstrated by my regular participation in coding boot camps and competitions. Motivated team player, worked with different teams and companies during my 5 years of experience in software development while applying the foundations of agile methodology project management. Lead several research coursework group projects during my 1st year in Computer Science. Strong analytical and problem-solving skills, as shown by my election to participate in entrepreneurial competitions and apprenticeships, and keen to tackle new challenges, manifested by my projects in different fields like commerce as I operated my own store which became a profitable business in 6 months.</article>
                <img src='/me.jpg' className={styles.aboutImg} />

            </div>
        </section>
    )
}

export default About
