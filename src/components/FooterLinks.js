import styles from './FooterLinks.module.css'

const FooterLinks = ({linksDiv}) => {
    const { title, links } = linksDiv
    return(
        <>
            <h4>{title}</h4>
            <ul className={styles.footer_links}>
                {
                    links.map(link => {
                        return(
                            <li className={styles.link_item}>
                                <a className={styles.link} href={link.href}>{link.label}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default FooterLinks