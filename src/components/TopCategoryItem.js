import styles from './TopCategoryItem.module.css'

const TopCategoryItem = ({categoryInfo}) => {
    return(
        <a href={categoryInfo.href} className={styles.topCategory_item}>
            <img src={categoryInfo.featuresImage} alt='' className={styles.topCategory_item_bg} />
            <span>{categoryInfo.badge}</span>
        </a>
    )
}

export default TopCategoryItem