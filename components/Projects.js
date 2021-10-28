import styles from "../styles/Projects.module.css"
const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/projects.png' />
                <h3 className={styles.headerTitle}>Projects</h3>
            </div>

        </section>
    )
}

export default Projects

