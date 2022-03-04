import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Lazy, Autoplay } from 'swiper';
import { CarouselItem } from './CarouselItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

export const Carousel: React.FC = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#FFC759',
        '--swiper-pagination-color': '#FFC759',
        '--swiper-navigation-size': '50px',
        '--swiper-pagination-bullet-size': '16px'
      }}
      modules={[Navigation, Pagination, A11y, Lazy, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      lazy={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      <SwiperSlide>
        <CarouselItem
          bgImg='/assets/bg2.jpg'
          text='África'
          description='O continente mais antigo'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem bgImg='/assets/bg.jpg' text='Europa' description='O continente mais antigo' />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem bgImg='/assets/bg2.jpg' text='Asia' description='O continente mais antigo' />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          bgImg='/assets/bg4.jpg'
          text='Américas'
          description='O continente mais antigo'
        />
      </SwiperSlide>
    </Swiper>
  );
};
