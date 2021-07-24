import styles from '../styles/Skills.module.css'

const Skills = () => {
    return (
        <section className={styles.skillSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/rocket.png' />
                <h3 className={styles.headerTitle}>Skills</h3>
            </div>
        </section>
    )
}

export default Skills
