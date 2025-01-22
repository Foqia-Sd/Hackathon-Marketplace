'use client';
import Furniture from './Furniture';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Pagination } from 'swiper/modules';

const PopularCarousel = ({ furniture }: any) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      breakpoints={{
        640: {slidesPerView: 1},
        768: {slidesPerView: 2},
        960: {slidesPerView: 3},
        1440: {slidesPerView: 4},
    }}
      slidesPerView={1} 
      loop={true} 
      className='popular-fur-slider mb-8 py-10'
    >
      {furniture.map((fur: any) => (
        <SwiperSlide key={fur._id}>
          <Furniture fur={fur} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularCarousel;


