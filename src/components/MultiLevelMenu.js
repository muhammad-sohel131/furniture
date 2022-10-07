import { IoMdArrowDropright } from 'react-icons/io'
import styles from './MultiLevelMenu.module.css'

const MultiLevelMenu = ({items}) => {
    return(
        <ul className={styles.multiLevelMenu}>
            {items.map(item => {
                if(item.subMenu){
                    return(
                        <li className={styles.multiLevelMenu_item}>
                            <a href={item.link}>
                                {item.text}
                                <IoMdArrowDropright />
                            </a>
                            <ul className={styles.subMenu}>
                                {item.subMenu.map(subItem => {
                                    return (
                                        <li className={styles.subMenu_item}>
                                            <a href={subItem.link}>{subItem.text}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                }else {
                    return(
                        <li className={styles.multiLevelMenu_item}>
                            <a href={item.link}>{item.text}</a>
                        </li>
                    )
                }
                
            })}
        </ul>
    )
}
export default MultiLevelMenu