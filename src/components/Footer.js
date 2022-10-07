import styles from './Footer.module.css'
import FooterLinks from './FooterLinks'
import Newsleter from './Newsletter'

const footerlinks = [
    {
        title: 'Custom Links',
        links: [
            {
                label: 'About Us',
                href: '/aboutUs'
            },
            {
                label: 'Delivery',
                href: '/delivery'
            }
        ]
    },
    {
        title: 'My Account',
        links: [
            {
                label: 'my account',
                href: './myaccount'
            }
        ]
    },
    {
        title: 'Customer service',
        links: [
            {
                label: 'contact',
                href: '/contact'
            },
            {
                label: 'return',
                href: '/return'
            }
        ]
    }
]

const Footer = () => {
    return(
        <footer>
            <div className={styles.row_1}>
                <div className='container'>
                    <div className={styles.row_1_wrapper}>
                       {
                           footerlinks.map(linksDiv => <div className={styles.footerColumn}><FooterLinks linksDiv = {linksDiv} /> </div>)
                       }
                       <div className={styles.footerColumn}>
                           <Newsleter />
                       </div>
                    </div>
                </div>
            </div>
            <div className={styles.row_2}>
                <div className='container'>
                    <div className={styles.row_2_wrapper}>
                        <p>Copyright © 2022, Your Store, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer