import styles from '../styles/Education.module.css'

const Education = () => {
    return (
        <section className={styles.educationSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/education.png' />
                <h3 className={styles.headerTitle}>Education</h3>
            </div>

         <div className={styles.eduDiv}>
                <div className={styles.eduCard}>
                    <img className={styles.eduImg} src='/images/cpf.png' />
                    <div className={styles.eduDetails}>
                        <h3 className={styles.eduTitle}>
                            College Protestant Francais
                        </h3>
                        <p className={styles.eduText}>
                        French Baccalaureate<br/>Scientific Path, Emphasis in Mathematics
                        </p>
                    </div>

                </div>
                <div className={styles.eduCard}>
                    <img className={styles.eduImg} src='/images/qmul.png' />
                    <div className={styles.eduDetails}>
                        <h3 className={styles.eduTitle}>
                            Queen Mary University of London
                        </h3>
                        <p className={styles.eduText}>
                        Computer Science, Bachelor of Sciences
                        </p>
                    </div>

                </div>
                
            </div>

        </section>
    )
}

export default Education
