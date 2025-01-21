'use client';
import Furniture from './Furniture';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Pagination } from 'swiper/modules';

const PopularCarousel = ({ furniture }: { furniture: any[] }) => {
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
      slidesPerView={1} // Adjust based on your design
      loop={true} // Optional: Enables infinite scrolling
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


// {/* Badge */}
// {popular && (
//   <div className="absolute top-8 left-8 bg-[#2A254B] text-white px-3 text-sm uppercase font-medium">
//     Popular
//   </div>
// )}
