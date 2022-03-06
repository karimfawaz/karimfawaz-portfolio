import Tilt from 'react-tilt'
import styles from '../styles/Education.module.css'


const Education = () => {
    return (
        <section className={styles.educationSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/education.png' />
                <h3 className={styles.headerTitle}>Education</h3>
            </div>

         <div className={styles.eduDiv}>
                <Tilt className={styles.eduCard}>
                    <div className={styles.eduDetails}>
                    <img className={styles.eduImg} src='/images/cpf.png' />
                        <h3 className={styles.eduTitle}>
                            College Protestant Francais
                        </h3>
                        <p className={styles.eduText}>
                        French Baccalaureate Scientific Path, Emphasis in Mathematics
                        </p>
                    </div>

                </Tilt>
                <Tilt className={styles.eduCard}>
                    <div className={styles.eduDetails}>
                    <img className={styles.eduImg} src='/images/qmul.png' />
                        <h3 className={styles.eduTitle}>
                            Queen Mary University of London
                        </h3>
                        <p className={styles.eduText}>
                        Computer Science, Bachelor of Sciences
                        </p>
                    </div>

                </Tilt>
                
            </div>

        </section>
    )
}

export default Education
