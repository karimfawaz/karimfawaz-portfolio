import Tilt from 'react-tilt'
import styles from '../styles/Education.module.css'
import SectionHeader from './SectionHeader'


const Education = () => {
    return (
        <section className={styles.educationSection}>

            <SectionHeader title='Education' url='/images/education.png' />
            <div className={styles.eduDiv}>
                <Tilt className={styles.eduCard}>
                    <img className={styles.eduImg} src='/images/cpf.png' />
                    <div className={styles.eduDetails}>
                        <h3 className={styles.eduTitle}>
                            College Protestant Francais
                        </h3>
                        <p className={styles.eduText}>
                            French Baccalaureate Scientific Path, Emphasis in Mathematics
                        </p>
                    </div>

                </Tilt>
                <Tilt className={styles.eduCard}>
                    <img className={styles.eduImg} src='/images/qmul.png' />
                    <div className={styles.eduDetails}>
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
