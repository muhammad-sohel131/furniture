import styles from './Blog.module.css'
import { FaUserCircle, FaRegCommentDots, FaEye } from 'react-icons/fa' 

const Blog = ({blog}) => {
    const { title, img, text, comments, watched, author } = blog
    return(
        <article className={styles.blog}>
            <div className={styles.blog_wrapper}>
                <div className={styles.blog_header}>
                    <img src={img} alt={title} />
                    <div className={styles.blog_breadcumb}>
                        <div className={styles.blog_breadcumb_wrapper}>
                            <div className={styles.author}>
                                <FaUserCircle />
                                <span>{author}</span>
                            </div>
                            <div className={styles.comments}>
                                <FaRegCommentDots />
                                <span>{comments}</span>
                            </div>
                            <div className={styles.watched}>
                                <FaEye />
                                <span>{watched}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.blog_body}>
                    <div className={styles.blog_body_wrapper}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <button>read more</button>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Blog