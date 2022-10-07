import styles from './Inspiration.module.css'
import { BsArrowRight } from 'react-icons/bs'

import img6 from '../images/inspiration6.jfif'
import img7 from '../images/inspiration7.jfif'
import img8 from '../images/inspiration8.jfif'
import img9 from '../images/inspiration9.jfif'
import img10 from '../images/inspiration10.jfif'
import img11 from '../images/inspiration11.jfif'
import img12 from '../images/inspiration12.jfif'
import img13 from '../images/inspiration13.jfif'


const images = [ img6, img7, img8, img9, img10, img11, img12, img13]

const Inspiration = () => {
    return(
        <section className={styles.inspiration}>
            <div className='container'>
                <div className={styles.inspiration_wrapper}>
                    <div className={styles.rightColumn}>
                        <h4>inspiration</h4>
                        <h2>#lookbook</h2>
                        <p>Create any imaginable grid layout combinations with rows columns and modules via the all new and powerful Journal Page Builder.</p>
                        <button>
                            see all products
                            <BsArrowRight />
                        </button>
                    </div>
                    <div className={styles.leftColumn}>
                        <div className={styles.images_wrapper}>
                        {images.map((img) => <div><img src={img} alt='' /></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inspiration