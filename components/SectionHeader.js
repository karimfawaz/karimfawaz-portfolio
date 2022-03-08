import styles from '../styles/SectionHeader.module.css'

const SectionHeader = ({ title, url }) => {
    return (
        <div className={styles.sectionHeader}>
            <img className={styles.headerImg} src={url} />
            <h3 className={styles.headerTitle}>{title}</h3>
        </div>

    )
}

export default SectionHeader