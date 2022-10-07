import { useState, useRef } from 'react'
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs'

import imgOne from '../images/slideOne.jfif'
import imgTwo from '../images/slideTwo.jfif'
import imgThree from '../images/slideThree.jfif'

import styles from './Slider.module.css'
const contentOfSlider = [
    {   
        index: 0,
        title: 'New Collection',
        subtitle: 'Interior',
        img: imgOne,
        background: '#DBE8F2',
        isDark: false
    },
    {
        index: 1,
        title: 'Modern Lamps',
        subtitle: 'Lighiting',
        img: imgThree,
        background: '#2C3640',
        isDark: true   
    },
    {
        index: 2,
        title: 'Essential Comfort',
        subtitle: 'Relaxing',
        img: imgTwo ,
        background: '#ECECEC',
        isDark: false  
    }
]

const Silder = () => {
   let [currentIndex, setCurrentIndex] = useState(0)

    const goForward = () => {
        if(currentIndex === contentOfSlider.length-1){
            clearInterval(changeSlider)
            setCurrentIndex(0)
        }else {
            clearInterval(changeSlider)
            let updateIndex = currentIndex + 1
            setCurrentIndex(updateIndex)
        }
    }
    const goBack = () => {
        if(currentIndex === 0){
            clearInterval(changeSlider)
            setCurrentIndex(contentOfSlider.length-1)
        }else {
            clearInterval(changeSlider)
            let updateIndex = currentIndex - 1
            setCurrentIndex(updateIndex)
        }
    }

    let changeSlider = setTimeout(goForward, 6000)
    return(
        <div className={styles.homeSlider}>
            <div 
            className={styles.slides}
            >
                {contentOfSlider.map(item => {
                    return(
                        <div 
                            className={styles.slide}
                            style={ item.index === currentIndex ?
                                {background:item.background, opacity: 1} :
                                {background:item.background}
                            }
                            key={item.index}
                        >
                            <div className={styles.slide_container}>
                            <div className={styles.slide_wrapper}>
                                <div className={styles.col}>
                                    <span 
                                        className={styles.slider_subtitle}
                                        style={{color: item.isDark && '#fff'}}
                                    >
                                        {item.subtitle}
                                    </span>
                                    <h1 
                                        className={styles.slider_title}
                                        style={{color: item.isDark && '#fff'}}
                                    >
                                        {item.title}
                                    </h1>
                                </div>
                                <div className={styles.col}>
                                    <img src={item.img} alt='' />
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.navigations}>
                <button className={styles.rightBth} onClick={goForward}><BsArrowRight /></button>
                <button className={styles.leftBtn} onClick={goBack}><BsArrowLeft /></button>
            </div>
        </div>
    )
}

export default Silder