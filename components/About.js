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
                    *draft*  Hey there! I’m Karim Fawaz. I am a second year student at Queen Mary, University of London studying Computer Science BSc. I am an ambitious software developer and my dream is to start my own technology firm, Brain 2.0. Finding solutions really motivates me and I always try to improve my problem solving skills to one day be able to help society at large. I enjoy playing and watching sports. I also enjoy cooking, as it is, just like software development, a form of art. *draft*
                </article>
                <img src='/me.jpg' className={styles.aboutImg} />

            </div>
        </section>
    )
}

export default About
