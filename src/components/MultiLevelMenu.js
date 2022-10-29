import { IoMdArrowDropright } from 'react-icons/io'
import styles from './MultiLevelMenu.module.css'

import { Link } from 'react-router-dom'

const MultiLevelMenu = ({items}) => {
    return(
        <ul className={styles.multiLevelMenu}>
            {items.map(item => {
                if(item.subMenu){
                    return(
                        <li className={styles.multiLevelMenu_item}>
                            <Link to={item.link}>
                                {item.text}
                                <IoMdArrowDropright />
                            </Link>
                            <ul className={styles.subMenu}>
                                {item.subMenu.map(subItem => {
                                    return (
                                        <li className={styles.subMenu_item}>
                                            <Link to={subItem.link}>{subItem.text}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                }else {
                    return(
                        <li className={styles.multiLevelMenu_item}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    )
                }
                
            })}
        </ul>
    )
}
export default MultiLevelMenu