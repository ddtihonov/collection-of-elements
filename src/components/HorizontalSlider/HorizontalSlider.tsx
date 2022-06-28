import React, {FC, useState, useEffect} from 'react'
import styles from './HorizontalSlider.module.scss'
import img_1 from '../../image/HorizontalSlider/image_1.jpg'
import img_2 from '../../image/HorizontalSlider/image_2.jpg'
import img_3 from '../../image/HorizontalSlider/image_3.jpg'
import img_4 from '../../image/HorizontalSlider/image_4.jpg'
import img_5 from '../../image/HorizontalSlider/image_5.jpg'
import img_6 from '../../image/HorizontalSlider/image_6.jpg'
import img_7 from '../../image/HorizontalSlider/image_7.jpg'
import img_8 from '../../image/HorizontalSlider/image_8.jpg'
import img_9 from '../../image/HorizontalSlider/image_9.jpg'
import { v4 as uuidv4 } from 'uuid'

export const HorizontalSlider: FC = () => {

const slideArr = [{image : img_1, alt : 'фото'}, {image : img_2, alt : 'фото'}, {image : img_3, alt : 'фото'}, {image : img_4, alt : 'фото'}, {image : img_5, alt : 'фото'}, {image : img_6, alt : 'фото'}, {image : img_7, alt : 'фото'}, {image : img_8, alt : 'фото'}, {image : img_9, alt : 'фото'},]

const [activeIndex, setActiveIndex] = useState<number>(0)
const [paused, setPaused] = useState<boolean>(false)

useEffect(() => {
        const interval = setInterval (() => {
            if (!paused){
            updateIndex(activeIndex + 1)
            }
        }, 3000) 
return () => {
    if (interval) {
        clearInterval(interval)
    }
}
})


const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
        newIndex = 8
    } else if (newIndex > 8) {
        newIndex = 0
    }

    setActiveIndex(newIndex)
}

    return (
        <section 
            className={styles.main}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            >
            <button className={styles.button_left} type="button" onClick={() => updateIndex(activeIndex - 1)}/>
            <button className={styles.button_right} type="button" onClick={() => updateIndex(activeIndex + 1)}/>
            <div className={styles.box}>
                <ul className={styles.slides} style ={{transform: `translateX(-${activeIndex * 100}%)`}}>
                    {slideArr.map((item, index) => {
                        return (
                            <li className={styles.item} key={index}>
                                <img className={styles.image} src={item.image} alt={item.alt}/>
                            </li>
                        )
                        })}
                </ul>
                <ul className={styles.list}>
                {slideArr.map((item, index) => {
                        const keyUid = uuidv4();
                        return (
                            <li className={styles.item_button} key={keyUid}>
                                <button className={`${activeIndex === index ? styles.button_active : styles.button}`} type="button" onClick={() => updateIndex(index)}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}