import styles from '../styles/Links.module.css'
import SectionHeader from './SectionHeader'

const Links = () => {
    return (
        <section className={styles.linksSection}>
            
            <SectionHeader title='Links' url='/images/links.png'/>

            <div className={styles.linksList}>

                <a href='https://www.linkedin.com/in/karim-fawaz/' target="_blank">
                    <div className={styles.linkCard}>

                        <img className={styles.cardImg} src='/images/linkedin.png' />
                        <h3 className={styles.cardName}>LinkedIn</h3>
                    </div>

                </a>



                <a href='https://www.instagram.com/karimfawaz_/' target="_blank">
                    <div className={styles.linkCard}>

                        <img className={styles.cardImg} src='/images/instagram.png' />
                        <h3 className={styles.cardName}>Instagram</h3>
                    </div>

                </a>

                <a href='https://twitter.com/karim_fawaz_' target="_blank">
                    <div className={styles.linkCard}>

                        <img className={styles.cardImg} src='/images/twitter.png' />
                        <h3 className={styles.cardName}>Twitter</h3>
                    </div>

                </a>

                <a href='https://www.facebook.com/karimhilalfawaz/' target="_blank">
                    <div className={styles.linkCard}>

                        <img className={styles.cardImg} src='/images/facebook.png' />
                        <h3 className={styles.cardName}>Facebook</h3>
                    </div>

                </a>
            </div>

        </section>
    )
}

export default Links
