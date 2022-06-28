import React, {FC, useCallback} from 'react'
import styles from './VerticalSlider.module.scss'
import img_1 from '../../image/VerticalSlider/image_1.jpg'
import img_2 from '../../image/VerticalSlider/image_2.jpg'
import img_3 from '../../image/VerticalSlider/image_3.jpg'
import img_4 from '../../image/VerticalSlider/image_4.jpg'
import img_5 from '../../image/VerticalSlider/image_5.jpg'
import img_6 from '../../image/VerticalSlider/image_6.jpg'
import img_7 from '../../image/VerticalSlider/image_7.jpg'
import img_8 from '../../image/VerticalSlider/image_8.jpg'
import img_9 from '../../image/VerticalSlider/image_9.jpg'

export const VerticalSlider: FC = () => {

const slideArr = [{image : img_1, alt : 'фото'}, {image : img_2, alt : 'фото'}, {image : img_3, alt : 'фото'}, {image : img_4, alt : 'фото'}, {image : img_5, alt : 'фото'}, {image : img_6, alt : 'фото'}, {image : img_7, alt : 'фото'}, {image : img_8, alt : 'фото'}, {image : img_9, alt : 'фото'},]

const slideCount: number = slideArr.length;
const slideHeight: number = 720;
const marginTop: number = 16;
const slideGallery = document.querySelector('.slides');
const slides = document.querySelectorAll('.item');
const scrollbarThumb = document.querySelector('.thumb');


/*const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};*/

/*const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};*/

/*document.querySelector('.thumbnails').innerHTML += [...slides]
  .map(
    (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
  )
  .join('');*/

/*document.querySelectorAll('.thumbnails img').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});*/


//scrollThumb();

const handleClick = useCallback(() => {
   
  },[]);

const handleScroll = useCallback(
        (evt) => {

        },
        []
)

    return (
        <section className={styles.main}>
            <div className={styles.box}>
                <ul className={styles.thumbnails}>
                    {slideArr.map((item, index) => {
                            return (
                                <li className={styles.item} key={index}>
                                    <img className={styles.image} src={item.image} alt={item.alt} onClick={handleClick}/>
                                </li>
                            )
                            })}
                </ul>
                <div className={styles.scrollbar}>
                    <div className={styles.thumb}></div>
                </div>
                <ul className={styles.slides} onScroll={handleScroll}>
                    {slideArr.map((item, index) => {
                        return (
                            <li className={styles.item} key={index}>
                                <img className={styles.image} src={item.image} alt={item.alt}/>
                            </li>
                        )
                        })}
                </ul>
            </div>
        </section>
    )
}