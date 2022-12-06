import React, {FC} from 'react'
import styles from './Cards.module.scss'

export const Cards: FC = () => {
    return (
        <section className={styles.main}>
            <h2 className={styles.title}>Cards</h2>
            <ul className={styles.list}>
                <li className={`${styles.card} ${styles.card_blur}`}>Blur 10px</li>
                <li className={`${styles.card} ${styles.card_brightness}`}>Brightness 60%</li>
                <li className={`${styles.card} ${styles.card_contrast}`}>Contrast 40%</li>
                <li className={`${styles.card} ${styles.card_shadow}`}>Drop Shadow</li>
                <li className={`${styles.card} ${styles.card_grayscale}`}>Grayscale 60%</li>
                <li className={`${styles.card} ${styles.card_rotate}`}>Hue Rotate 120deg</li>
                <li className={`${styles.card} ${styles.card_invert}`}>Invert 70%</li>
                <li className={`${styles.card} ${styles.card_opacity}`}>Opacity 20%</li>
                <li className={`${styles.card} ${styles.card_sepia}`}>Sepia 90%</li>
                <li className={`${styles.card} ${styles.card_saturate}`}>Saturate 40%</li>
                <li className={`${styles.card} ${styles.card_rotate_blur}`}>Hue Rotate 270deg Blur 5px</li>
            </ul>
        </section>
    )
};