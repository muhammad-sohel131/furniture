import styles from './Feedback.module.css'
import { RiDoubleQuotesL } from 'react-icons/ri'

const Feedback = ({feedback}) => {
    const { username, comment } = feedback
    return(
        <article className={styles.feedback}>
            <div className={styles.feedback_wrapper}>
                <div className={styles.icon}>
                    <RiDoubleQuotesL />
                </div>
                <p className={styles.comment}>{comment}</p>
                <h4 className={styles.userName}>-{username}</h4>
            </div>
        </article>
    )
}

export default Feedback