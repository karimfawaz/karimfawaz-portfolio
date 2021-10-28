import styles from "../styles/Blog.module.css"
const Blog = () => {
    return (
        <section className={styles.blogSection}>
            <div className={styles.sectionHeader}>
                <img className={styles.headerImg} src='/images/blog.png' />
                <h3 className={styles.headerTitle}>Blog</h3>
            </div>

        </section>
    )
}

export default Blog
