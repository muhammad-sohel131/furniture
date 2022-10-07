import styles from './DropdownMobileMenu.module.css';

const DropdownMobileMenu = ({items, height}) => {
    return(
        <ul className={styles.dropdownMobileMenu} style={{height: height}} >
            {items.map(item => {
                return(
                    <li className={styles.dropdownMobileMenu_item}>
                        <a href={item.link} className={styles.menu_link}>{item.text}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default DropdownMobileMenu