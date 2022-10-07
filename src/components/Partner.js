import styles from './Partner.module.css'

// images
import Palm from '../images/palm_logo.jfif'
import AwesomeBrand from '../images/awesome.jfif'
import MelissaJohnson from '../images/mellisa.jfif'
import HTC from '../images/htc_logo.jfif'
import SuperBrand from '../images/superbrand.jfif'
import FortCane from '../images/FC-fashion.jfif'
import Sony from '../images/sony_logo.jfif'
import NYFashion from '../images/ny-fashion.jfif'
import ScandinavianSunglasses from '../images/sunglasses.png'
import Canon from '../images/canon_logo.jfif'

const comapnies = [
    {
        id: 1,
        caption: 'Palm',
        img: Palm
    },
    {
        id: 2,
        caption: 'Awesome Brand',
        img: AwesomeBrand
    },
    {
        id: 3,
        caption: 'Melissa Johnson',
        img: MelissaJohnson
    },
    {
        id: 4,
        caption: 'HTC',
        img: HTC
    },
    {
        id: 5,
        caption: 'SuperBrand',
        img: SuperBrand
    },
    {
        id: 6,
        caption: 'Fort Cane',
        img: FortCane
    },
    {
        id: 7,
        caption: 'Sony',
        img: Sony
    },
    {
        id: 8,
        caption: 'NY Fashion',
        img: NYFashion
    },
    {
        id: 9,
        caption: 'Scandinavian Sunglasses',
        img: ScandinavianSunglasses
    },
    {
        id: 10,
        caption: 'Canon',
        img: Canon
    }
]

const Partner = () => {
    return(
        <section className={styles.partner}>
            <div className='container'>
                <div className={styles.partner_wrapper}>
                    {
                        comapnies.map(company => {
                            return(
                                <div className={styles.company}>
                                    <img src={company.img} alt='' />
                                    <div className={styles.caption}>
                                        <span>{company.caption}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Partner