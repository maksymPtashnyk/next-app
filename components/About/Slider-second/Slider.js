"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Slider.module.scss';
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className={styles.card}
      >
      <SwiperSlide className={styles.card__background__1}>
        <div className={styles.card__content}>
          <p className={styles.card__number}>01</p>
          <article className={styles.card__bottom}>
            <h3 className={styles.card__mainText}>Open Air</h3>
            <p className={styles.card__paragraph}>Единственный торговый центр с площадкой Open Air для организации мероприятий с вместимостью до
10 000 участников.</p>
          </article>

        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.card__background__2}>
        <div className={styles.card__content}>
          <p className={styles.card__number}>02</p>
          <article className={styles.card__bottom}>
            <h3 className={styles.card__mainText}>Food Court 
с терассой</h3>
            <p className={styles.card__paragraph}>Food Court вместимостью 500 человек и террасой 1000 м2 - единственный в своем роде, с таким выходом в город</p>
          </article>

        </div>
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
     
      </Swiper>
    </>
  );
}