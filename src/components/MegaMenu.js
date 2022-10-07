import styles from './MegaMenu.module.css'
import { IoIosArrowForward } from 'react-icons/io'

import img1 from '../images/beauty-150x150.jpg.jfif'
import img2 from '../images/demo09-150x150.jpg.jfif'
import img3 from '../images/elec-150x150.jpg.jfif'
import img4 from '../images/f6-150x150.jpg.jfif'
import img5 from '../images/acceso-150x150.jpg.jfif'
import img6 from '../images/app-150x150.jpg.jfif'
import img7 from '../images/bagcat-150x150.jpg.jfif'

const megaMenuContent = [
    {
        title: 'Home Decor',
        img: img2,
        links: [
            {text: 'Airmchair', link: '/'},
            {text: 'Decor', link: '/'},
            {text: 'Lambs', link: '/'},
            {text: 'Sofa', link: '/'},
        ]
    },
    {
        title: 'Health & Beauty',
        img: img1,
        links: [
            {text: 'Accessories', link: '/'},
            {text: 'Body', link: '/'},
            {text: 'LipStick', link: '/'},
            {text: 'Makeuo', link: '/'},
        ]
    },
    {
        title: 'Bags',
        img: img7,
        links: [
            {text: 'BackPacks', link: '/'},
            {text: 'Clucthes', link: '/'},
            {text: 'Formal', link: '/'},
            {text: 'Purces', link: '/'},
        ]
    },
    {
        title: 'Fashion',
        img: img6,
        links: [
            {text: 'Accessories', link: '/'},
            {text: 'Dresses', link: '/'},
            {text: 'Pants', link: '/'},
            {text: 'T-shirt', link: '/'},
        ]
    },
    {
        title: 'Footwear',
        img: img4,
        links: [
            {text: 'Flats', link: '/'},
            {text: 'Flip Flops', link: '/'},
            {text: 'Heels', link: '/'},
            {text: 'Running', link: '/'},
        ]
    },
    {
        title: 'Health & Beauty',
        img: img1,
        links: [
            {text: 'Accessories', link: '/'},
            {text: 'Body', link: '/'},
            {text: 'LipStick', link: '/'},
            {text: 'Makeuo', link: '/'},
        ]
    }
]

const MegaMenu = () => {
    return (
        <div className={styles.megaMenu}>
            <ul className={styles.megaMenu_wrapper}>
                {megaMenuContent.map(megaMenu => {
                    return(
                        <li className={styles.megaMenu_item}>
                            <a href='/'>
                                <h4>{megaMenu.title}</h4>
                                <img src={megaMenu.img} alt='' />
                            </a>
                            <ul className={styles.mega_menu_links}>
                                {
                                    megaMenu.links.map(link => {
                                        return(
                                            <li className={styles.mega_menu_link_item}>
                                                <a href={link.link}>
                                                <IoIosArrowForward className={styles.link_icon} />
                                                    {link.text}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default MegaMenu