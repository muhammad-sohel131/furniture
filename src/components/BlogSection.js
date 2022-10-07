import styles from './BlogSection.module.css'
import Blog from './Blog'

// images
import img1 from '../images/journal.jfif'
import img2 from '../images/bag.jfif'
import img3 from '../images/greec.jfif'

const blogs = [
    {
        id: 1,
        title: 'Journal Blog is Here',
        img: img1,
        text: 'The Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, including custom drop-cap support as well as optional newspaper-like fluid columns.',
        author: 'admin',
        watched: 202,
        comments: 234
    },
    {
        id: 1,
        title: 'Best Leather Bags',
        img: img2,
        text: 'The Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, including custom drop-cap support as well as optional newspaper-like fluid columns.',
        author: 'admin',
        watched: 452,
        comments: 204
    },
    {
        id: 1,
        title: 'Traveling to Greece',
        img: img3,
        text: 'The Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, including custom drop-cap support as well as optional newspaper-like fluid columns.',
        author: 'admin',
        watched: 442,
        comments: 2334
    }
]

const BlogSection = () => {
    return(
        <section className={styles.blogSection}>
            <div className='container'>
                <h2 className={styles.section_title}>From the Blog</h2>
                <span className={styles.underline}></span>
                <div className={styles.blogSection_wrapper}>
                    {
                        blogs.map(blog => <Blog blog={blog} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogSection