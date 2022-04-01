import Link from 'next/link';
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
      img: '/assets/carousel/africa.jpg',
      route: '/africa'
    },
    {
      id: 322,
      text: 'Europa',
      description: 'O continente multicultural',
      img: '/assets/carousel/europe.jpg',
      route: '/europe'
    },
    {
      id: 323,
      text: 'Asia',
      description: 'Culturas exóticas',
      img: '/assets/carousel/asia.jpg',
      route: '/asia'
    },
    {
      id: 324,
      text: 'América do Sul',
      description: 'O continente mais caliente',
      img: '/assets/carousel/latam.jpg',
      route: '/south-america'
    },
    {
      id: 325,
      text: 'América do Norte',
      description: 'O continente mais cosmopolitan',
      img: '/assets/carousel/northAmerica.jpg',
      route: '/north-america'
    },
    {
      id: 326,
      text: 'Oceânia',
      description: 'Desbrave o Outback',
      img: '/assets/carousel/oceania.jpg',
      route: '/oceania'
    }
  ];

  return (
    <Swiper
      a11y={{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide'
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
      pagination={{ clickable: true }}>
      {carouselItem.map((item) => (
        <SwiperSlide key={item.id}>
          <Link href={item.route}>
            <a>
              <CarouselItem text={item.text} description={item.description} bgImg={item.img} />
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
