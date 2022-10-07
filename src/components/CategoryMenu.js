import styles from './CategoryMenu.module.css'
const CategoryMenu = () => {
    const categoryItems = ['Fasion', 'Bags', 'Health & Beauty', 'footware', 'food', 'home', 'Electronics', 'baby and kids', 'followers','Health & Beauty', 'footware', 'food', 'home', 'Electronics', 'baby and kids','Fasion', 'Bags', 'Health & Beauty', 'footware']
    return(
        <div className={styles.category_menu}>
            <ul className={styles.mega_menu}>
                {categoryItems.map(item => {
                    return(
                        <li className={styles.menu_item}>
                            <a href='/' className={styles.menu_link}>{item}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default CategoryMenu