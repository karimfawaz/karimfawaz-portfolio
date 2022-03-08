import styles from '../styles/Languages.module.css'
import Tilt from 'react-tilt'
import SectionHeader from './SectionHeader'

const Languages = () => {
    return (
        <section className={styles.languagesSection}>
            <SectionHeader title='Languages' url='/images/languages.png' />

            <div className={styles.languagesList}>

                <Tilt className={styles.language}>
                    <img className={styles.languageImg} src='/images/france.png' />
                    <h3 className={styles.languageTitle}>French</h3>
                </Tilt>

                <Tilt className={styles.language}>
                    <img className={styles.languageImg} src='/images/uk.png' />
                    <h3 className={styles.languageTitle}>English</h3>
                </Tilt>

                <Tilt className={styles.language}>
                    <img className={styles.languageImg} src='/images/arabic.png' />
                    <h3 className={styles.languageTitle}>Arabic</h3>
                </Tilt>
            </div>
        </section>
    )
}

export default Languages
