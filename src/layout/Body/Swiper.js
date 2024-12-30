import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import styles from './Swiper.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Swapper() {
    return (
        <div className={styles.Wrapper}>
             <Swiper
      spaceBetween={50} // 슬라이드 간격
      slidesPerView={1} // 한 화면에 보여질 슬라이드 수
      navigation // 네비게이션 화살표 활성화
      pagination={{ clickable: true }} // 하단 점선 페이징 활성화
      loop={true} // 무한 반복
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
        </div>
    )
}