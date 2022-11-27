import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Lazy, Autoplay } from 'swiper'
import { Link as ChakraLink, useMediaQuery, Flex, Heading, Text } from '@chakra-ui/react'
import { carouselItems } from 'constants/carousel'

export const Slider: React.FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 425px)')

  return (
    <Swiper
      className='swiper'
      a11y={{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide'
      }}
      modules={[Pagination, A11y, Lazy, Autoplay]}
      slidesPerView={1}
      navigation={false}
      loop={true}
      lazy={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      pagination={{
        dynamicBullets: true
      }}>
      {carouselItems?.map((item) => (
        <SwiperSlide key={item.id} className='swiper-slide'>
          <Link passHref legacyBehavior href={`/continent/${item.route}`}>
            <ChakraLink
              _hover={{
                textDecoration: 'none'
              }}>
              <Flex
                w='100%'
                h='450px'
                bgImage={item.img}
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='cover'
                justify='center'
                py={4}
                alignItems='center'
                direction='column'
                color='whiteAlpha.900'>
                <Heading mb={4} fontWeight='semibold' fontSize={['2xl', '4xl', '5xl']}>
                  {item.text}
                </Heading>
                {!!isMobile && (
                  <Text fontWeight='semibold' fontSize={['lg', 'xl', '3xl']}>
                    {item.description}
                  </Text>
                )}
              </Flex>
            </ChakraLink>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
