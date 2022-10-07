import styles from './CategoryItem.module.css'

const CategoryItem = ({category}) => {
    return(
        <a href='/' className={styles.category_item}>
                <img className={styles.background_img} src={category.featuresImg} alt='' />
                <span>{category.badge}</span>
                <div className={styles.overlay}></div>
        </a>
    )
}
export default CategoryItem