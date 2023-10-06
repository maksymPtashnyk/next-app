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
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.image}
      >
      <SwiperSlide><Image src='/third.jpg' width={335} height={184} alt='elevator'/></SwiperSlide>
      <SwiperSlide><Image src='/first.jpg' width={335} height={184} alt='elevator'/></SwiperSlide>
      <SwiperSlide><Image src='/second.jpg' width={335} height={184} alt='elevator'/></SwiperSlide>
      <SwiperSlide><Image src='/third.jpg' width={335} height={184} alt='elevator'/></SwiperSlide>
      <SwiperSlide><Image src='/first.jpg' width={335} height={184} alt='elevator'/></SwiperSlide>
      </Swiper>
    </>
  );
}