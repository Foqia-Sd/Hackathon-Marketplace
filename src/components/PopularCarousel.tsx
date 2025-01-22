'use client';
import Furniture from './Furniture';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Pagination } from 'swiper/modules';

// Define a type for furniture items
interface FurnitureItem {
  _id: string;
  product_id: string | number;
  name: string;
  description: string;
  images: { url: string }[];
  price_id: string;
  price: number;
}

// Define the component prop types
interface PopularCarouselProps {
  furniture: FurnitureItem[];
}

const PopularCarousel = ({ furniture }: PopularCarouselProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      slidesPerView={1}
      loop={true}
      className='popular-fur-slider mb-8 py-10'
    >
      {furniture.map((fur: FurnitureItem) => (
        <SwiperSlide key={fur._id}>
          <Furniture fur={fur} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularCarousel;
