import styles from "../styles/Blog.module.css"
import SectionHeader from './SectionHeader'


const Blog = () => {
    return (
        <section className={styles.blogSection}>
            
            <SectionHeader title='Blog' url='/images/blog.png'/>


        </section>
    )
}

export default Blog
