import React, {FC} from 'react'
import styles from './Sliders.module.scss'
import { VerticalSlider } from '../../components/VerticalSlider/VerticalSlider'
import { HorizontalSlider } from '../../components/HorizontalSlider/HorizontalSlider'

export const Sliders: FC = () => {
    return (
        <section className={styles.main}>
            <h2 className={styles.title}>Sliders</h2>
            <VerticalSlider/>
            <HorizontalSlider/>
        </section>
    )
}