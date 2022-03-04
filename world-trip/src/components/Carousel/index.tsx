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
  const carouselItem = [
    {
      id: 321,
      text: 'África',
      description: 'O continente mais antigo',
      img: '/assets/carousel/africa.jpg'
    },
    {
      id: 322,
      text: 'Europa',
      description: 'O continente multicultural',
      img: '/assets/carousel/europe.jpg'
    },
    { id: 323, text: 'Asia', description: 'Culturas exóticas', img: '/assets/carousel/asia.jpg' },
    {
      id: 324,
      text: 'América do Sul',
      description: 'O continente mais caliente',
      img: '/assets/carousel/latam.jpg'
    },
    {
      id: 325,
      text: 'América do Norte',
      description: 'O continente mais cosmopolitan',
      img: '/assets/carousel/northAmerica.jpg'
    },
    {
      id: 326,
      text: 'Oceânia',
      description: 'Desbrave o Outback',
      img: '/assets/carousel/oceania.jpg'
    }
  ];
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
      {carouselItem.map((item) => (
        <SwiperSlide key={item.id}>
          <CarouselItem text={item.text} description={item.description} bgImg={item.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
