import styles from "../styles/Projects.module.css"
import SectionHeader from './SectionHeader'


const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <SectionHeader title='Projects' url='/images/projects.png' />

        </section>
    )
}

export default Projects

