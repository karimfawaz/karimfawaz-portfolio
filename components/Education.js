import styles from '../styles/Education.module.css'

const Education = () => {
    return (
        <section className={styles.educationSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/education.png' />
                <h3 className={styles.headerTitle}>Education</h3>
            </div>

            <table className={styles.table}>

                <tr>
                <td> <img className={styles.eduImg} src='/images/cpf.png'/></td>

                    <td>2005 <span className={styles.span}>-</span> 2020</td>
                    <td>College Protestant Francais de Beyrouth</td>
                    <td>French Baccalaureate</td>
                </tr>
                <tr>
                    <td> <img className={styles.eduImg} src='/images/qmul.png'/></td>
                    <td>2020 <span className={styles.span}>-</span> 2023</td>
                    <td>Queen Mary <span className={styles.span}>,</span> University of London</td>
                    <td>Computer Science <span className={styles.span}>-</span> Bachelor of Sciences</td>
                </tr>

            </table>
        </section>
    )
}

export default Education
