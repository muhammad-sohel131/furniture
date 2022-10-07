import styles from './ProductItem.module.css'
import { VscHeart } from 'react-icons/vsc'
import { GiShoppingBag } from 'react-icons/gi'
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowRoundUp } from 'react-icons/io'


const ProductItem = ({product}) => {
    const { title, img, price } = product
    return(
        <article className={styles.productItem}>
            <div className={styles.productItem_header}>
                <img src={img} alt='' />
                <div className={styles.productItem_addToCart}>
                    <div className={styles.addToCart_quantity}>
                        <input type='text' />
                        <div className={styles.arrows}>
                            <IoIosArrowUp />
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <div className={styles.addToCart_button}>
                        <GiShoppingBag />
                        <span>add to cart</span>
                    </div>
                    <div className={styles.addToWishList}>
                        <VscHeart />
                    </div>
                </div>
            </div>
            <div className={styles.productItem_footer}>
                <h2 className={styles.productTitle}>{title}</h2>
                <span className={styles.productPrice}>${price}</span>
            </div>
        </article>
    )
}

export default ProductItem