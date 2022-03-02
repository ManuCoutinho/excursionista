import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Keyboard, EffectFlip } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { Flex, Heading } from '@chakra-ui/react';
import { CarouselItem } from './CarouselItem';

export const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
