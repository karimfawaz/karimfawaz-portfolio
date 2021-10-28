import styles from '../styles/Experience.module.css'

const Experience = () => {
    return (
        <section className={styles.expSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/building.png' />
                <h3 className={styles.headerTitle}>Experience</h3>
            </div>

            <div className={styles.expList}>
            <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/QMUL.png' />
                        <h5 className={styles.cardHeadertitle}>QIncubator</h5>
                        <h7 className={styles.cardHeaderDesc}>Entrepreneurship Programme</h7>
                        <h7 className={styles.cardHeaderDate}>October 2021 - November 2021</h7>

                    </div>
                    <div className={styles.cardDetails}>
                        
                        •	Elected for QMUL Enterprise’s flagship programme.<br/>
                        •	Mentored by UK Government 2021 winner Julio Alejandro. <br/>
                        •	Introduced to the foundations of entrepreneurship, lean canvas development, and start-up pitching.
                        
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/citronniers.png' />
                        <h5 className={styles.cardHeadertitle}>Garderie Les Citronniers</h5>
                        <h7 className={styles.cardHeaderDesc}>SEO - Freelancing</h7>
                        <h7 className={styles.cardHeaderDate}>July 2021 - August 2021</h7>

                    </div>
                    <div className={styles.cardDetails}>
                        •	Improved the nursery’s website SEO rating by 30% and made Garderie Les Citronniers the first result when searching for the best nursery in Beirut on Google after previously being featured on the 4th page of the search results. 
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/lau.jfif' />
                        <h5 className={styles.cardHeadertitle}>Lebanese American University</h5>
                        <h7 className={styles.cardHeaderDesc}>CCT Computing Apprenticeship</h7>
                        <h7 className={styles.cardHeaderDate}>July 2019</h7>

                    </div>
                    <div className={styles.cardDetails}>
                        •    Developed a music player, a to-do list application, and a timer application on Android Studio using Java for the final project competition.<br />•	Won 2nd Place.<br />•	Earned a 20% scholarship.
                        
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/cme.jfif' />
                        <h5 className={styles.cardHeadertitle}>CME Offshore Sal.</h5>
                        <h7 className={styles.cardHeaderDesc}>Android Developer Internship</h7>
                        <h7 className={styles.cardHeaderDate}>January 2019</h7>

                    </div>
                    <div className={styles.cardDetails}>
                        •	Assimilated RecyclerView in Android applications.<br />•	Supported the migration from a Java to Kotlin for the Subway bread management Android application.
                        
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/cme.jfif' />
                        <h5 className={styles.cardHeadertitle}>CME Offshore Sal.</h5>
                        <h7 className={styles.cardHeaderDesc}>Internship</h7>
                        <h7 className={styles.cardHeaderDate}>June 2018</h7>

                    </div>
                    <div className={styles.cardDetails}>
                        •	Liaised with the backend team who were developing software regarding pharmaceuticals using C#.
                        <br/>•	Collaborated with the Android and IOS teams who were developing mobile applications for the Subway supply chain.
                        <br/>•	Participated with the hardware team who were creating a gadget to reduce electricity consumption.
                        <br/>•	Blended with the Telekom team who showed me how they operate internationally.
                        
                    </div>

                </div><div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/synkers.png' />
                        <h5 className={styles.cardHeadertitle}>Ostaz (formerly Synkers)</h5>
                        <h7 className={styles.cardHeaderDesc}>Start-Up Contest</h7>
                        <h7 className={styles.cardHeaderDate}>April 2018 - June 2018</h7>

                    </div>
                    <div className={styles.cardDetails}>
                        •	Elected from my school to pitch my gamified learning software (using Unity2D) to teach the driving basics to younger audiences (age group: 12-18).
                        <br/>•	Finalist for the competition.
                        
                    </div>

                </div>
                <div className={styles.expcard}>
                    <div className={styles.cardHeader}>
                        <img className={styles.cardHeaderimg} src='/images/aub.png' />
                        <h5 className={styles.cardHeadertitle}>American University of Beirut</h5>
                        <h7 className={styles.cardHeaderDesc}>Apprenticeship </h7>
                        <h7 className={styles.cardHeaderDate}>July 2016</h7>

                    </div>
                    <div className={styles.cardDetails}>
                        •	Introduced to Robotics and won 1st place in the group competition. 
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience
