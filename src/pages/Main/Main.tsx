import React, {FC} from 'react'
import { Link } from 'react-router-dom';
import styles from './Main.module.scss'

export const Main: FC = () => {
    return (
        <section className={styles.main}>
            <div className={styles.preloader}>
                <div className={styles.preloader__container}>
                    <span className={styles.preloader__round}></span>
                </div>
            </div>
            <h2 className={styles.title}>collection of elements</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} to={'/preloaders'}>Preloaders</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to={'/buttons'}>Buttons</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to={'/sliders'}>Sliders</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to={'/headings'}>Headings</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to={'/cards'}>Cards</Link>
                </li>
            </ul>
        </section>
    )
}