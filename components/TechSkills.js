import Tilt from "react-tilt"
import styles from "../styles/TechSkills.module.css"
import SectionHeader from './SectionHeader'


const TechSkills = () => {
    return (
        <section className={styles.techSection}>
            <SectionHeader title='Technologies' url='/images/techskills.png'/>

            <div className={styles.techGrid}>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/java.png'/>
                    <h2 className={styles.gridItemTitle}>Java</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/javascript.png'/>
                    <h2 className={styles.gridItemTitle}>JavaScript</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/python.png'/>
                    <h2 className={styles.gridItemTitle}>Python</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/sql.png'/>
                    <h2 className={styles.gridItemTitle}>SQL - DBMS</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/nextjs.png'/>
                    <h2 className={styles.gridItemTitle}>Next.js</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/react.png'/>
                    <h2 className={styles.gridItemTitle}>React.js</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/flutter.png'/>
                    <h2 className={styles.gridItemTitle}>Flutter</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/dart.png'/>
                    <h2 className={styles.gridItemTitle}>Dart</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/kotlin.png'/>
                    <h2 className={styles.gridItemTitle}>Kotlin</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/csharp.png'/>
                    <h2 className={styles.gridItemTitle}>C#</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/unity.png'/>
                    <h2 className={styles.gridItemTitle}>Unity2D</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/css.png'/>
                    <h2 className={styles.gridItemTitle}>CSS</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/html.png'/>
                    <h2 className={styles.gridItemTitle}>HTML</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/php.svg'/>
                    <h2 className={styles.gridItemTitle}>PHP</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/framer.jpg'/>
                    <h2 className={styles.gridItemTitle}>Framer Motion</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/github.jpg'/>
                    <h2 className={styles.gridItemTitle}>GitHub</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/shopify.jpg'/>
                    <h2 className={styles.gridItemTitle}>Shopify</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/wordpress.png'/>
                    <h2 className={styles.gridItemTitle}>WordPress</h2>
                </Tilt>
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/firebase.jpg'/>
                    <h2 className={styles.gridItemTitle}>Firebase</h2>
                </Tilt>
                
                <Tilt className={styles.gridItem}>
                    <img className={styles.gridItemImg} src='/images/mips.png'/>
                    <h2 className={styles.gridItemTitle}>MIPS Assembly</h2>
                </Tilt>
            </div>
        </section>
    )
}

export default TechSkills

// /Dart, Flutter, Java, Kotlin, C#, Python, MIPS Assembly, HTML, CSS, PHP, JavaScript, Next.JS, React.JS, SQL, Framer Motion, WordPress (and its plugins), Firebase, Netlify, Unity2D.