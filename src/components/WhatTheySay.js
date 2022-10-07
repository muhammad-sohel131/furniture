import Feedback from './Feedback'
import styles from './WhatTheySay.module.css'

const comments = [
    {
        id: 1,
        username: 'Emon',
        comment: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    },
    {
        id: 2,
        username: 'Rayhan',
        comment: `The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.`
    },
    {
        id: 3,
        username: 'Kawser',
        comment: `The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.`
    }
]

const WhatTheySay = () => {
    return(
        <section className={styles.whatTheySay}>
            <div className='container'>
                <h2>What are people saying</h2>
                <span className={styles.underline}></span>
                <p>Super flexible Testimonials module, just one out of more than 30 extensions included in Journal 3.</p>
                <div className={styles.whatTheySay_wrapper}>
                    {comments.map((comment) => <Feedback feedback={comment} />)}
                </div>
            </div>
        </section>
    )
}

export default WhatTheySay