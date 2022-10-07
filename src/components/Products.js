import styles from './Products.module.css'
import ProductItem from './ProductItem'

import yellowArmchair from '../images/yellowArmchair.png'
import moderChair from '../images/modernChair.png'
import lazyArmChair from '../images/lazyArmchair.png'
import grayArmChair from '../images/grayArmchair.png'
import comportableChair from '../images/comportableChair.png'
import classicArmChair from '../images/classicArmchair.png'

const products = [
    {
        id: 1,
        title: 'Yellow Modern Armchair',
        price: 345.56,
        img: yellowArmchair
    },
    {
        id: 2,
        title: 'Modern Chair',
        price: 984.34,
        img: moderChair
    },
    {
        id: 3,
        title: 'Lazy Armchair',
        price: 263,
        img: lazyArmChair
    },
    {
        id: 4,
        title: 'Gray Armchair',
        price: 203,
        img: grayArmChair
    },
    {
        id: 5,
        title: 'Comfortable Armchair',
        price: 945,
        img: comportableChair
    },
    {
        id: 6,
        title: 'Classic Armchair',
        price: 845,
        img: classicArmChair
    }
]

const Products = () => {
    return(
        <section className={styles.products}>
            <div className='container'>
                <div className={styles.products_wrapper}>
                    {products.map((product) => <ProductItem product={product} />)}
                </div>
            </div>
        </section>
    )
}

export default Products