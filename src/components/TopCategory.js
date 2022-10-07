import styles from './TopCategory.module.css'
import TopCategoryItem from './TopCategoryItem'

import sofa from '../images/sofa2.jfif'
import decor from '../images/decor.jfif'
import lamps from '../images/lamps.jfif'
import armchair from '../images/armChair.jfif'
import tables from '../images/tables.jfif'

const topCategoryInformations = [
    {
        id: 1,
        badge: 'sofa',
        href: '/',
        featuresImage: sofa
    },
    {
        id: 2,
        badge: 'decor',
        href: '/',
        featuresImage: decor
    },
    {
        id: 3,
        badge: 'lamps',
        href: '/',
        featuresImage: lamps
    },
    {
        id: 4,
        badge: 'armchair',
        href: '/',
        featuresImage: armchair
    },
    {
        id: 5,
        badge: 'tables',
        href: '/',
        featuresImage: tables
    }
]

const TopCategory = () => {
    return(
        <div className={styles.topCategory}>
            <div className='container'>
                <h4 className={styles.topCategory_title}>Top Categories</h4>
                <div className={styles.topCategory_wrapper}>
                    {topCategoryInformations.map(info => <TopCategoryItem categoryInfo={info} />)}
                </div>
            </div>
        </div>
    )
}

export default TopCategory