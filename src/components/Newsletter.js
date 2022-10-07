import styles from './Newsletter.module.css'
import { BiEnvelope } from 'react-icons/bi'

const Newsleter = () => {
    return(
        <>
            <h4>Newsletter</h4>
            <div className={styles.newsletter}>
                <p>Don't miss any updates or promotions by signing up to our newsletter.</p>
                <form>
                    <div className={styles.form_controll}>
                        <input type='email' className={styles.form_input} placeholder='Your Email'/>
                        <button type='submit' className={styles.submit_btn}>
                            <BiEnvelope />
                            send
                        </button>
                    </div>
                    <div className={styles.checkbox}>
                        <input type='checkbox' />
                        <label>I have read and aggry to the <a href='/'> privacy policy</a></label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Newsleter