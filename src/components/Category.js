import styles from './Category.module.css'
import CategoryItem from './CategoryItem'

import sofa from '../images/sofa.jfif'
import lamp from '../images/lamp.jpg.jfif'
import bench from '../images/bench.jfif'
import sale from '../images/sale.png'
import accessories from '../images/accessories.png'

const categoryContents = [
    {
        id: 1,
        badge: 'sofa',
        featuresImg: sofa,
        url: ''
    },
    {
        id: 2,
        badge: 'lamp',
        featuresImg: lamp,
        url: ''
    },
    {
        id: 3,
        badge: 'desk',
        featuresImg: bench,
        url: ''
    },
    {
        id: 4,
        badge: 'sale',
        featuresImg: sale,
        url: ''
    },
    {
        id: 5,
        badge: 'accessories',
        featuresImg: accessories,
        url: ''
    }
]

const Category = () => {
    return(
        <div className={styles.category}>
            <div className='container'>
                <div className={styles.category_wrapper}>
                    {
                        categoryContents.map(category => <CategoryItem category={category} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Category