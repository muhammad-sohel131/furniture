import styles from './MobileMenu.module.css';
import DropdownMobileMenu from './DropdownMobileMenu';
import { useState } from 'react';

import {BsPlusCircleDotted } from 'react-icons/bs'
import {AiOutlineMinus} from 'react-icons/ai'
const aboutMenusItems = [
    { text: "Delivery Info", link: "/" },
    { text: "Terms & Conditions", link: "/" },
    { text: "Privacy Policy", link: "/" },
  ];

const MobileMenu = () => {
    const [height, setHeight] = useState('0px');
    const toggleDropDownMenu = () => {
        if(height === '0px'){
            setHeight('100%')
        }else {
            setHeight('0px')
        }
    }
    return(
        <>
            <ul className={styles.mobileMenu_wrapper}>
                <li className={styles.link_item}>
                    <a href='/'>Home</a>
                </li>
                <li className={styles.link_item} onClick={() => toggleDropDownMenu()}>
                    <a href='/#'>About {height === '0px' ? <BsPlusCircleDotted /> : <AiOutlineMinus />}</a>
                    <div>
                        <DropdownMobileMenu items={aboutMenusItems} height={height} />
                    </div>
                </li>
                <li className={styles.link_item}>
                    <a href='/'>FAQ</a>
                </li>
                <li className={styles.link_item}>
                    <a href='/'>Contac</a>
                </li>
                <li className={styles.link_item}>
                    <a href='/'>Blog</a>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu