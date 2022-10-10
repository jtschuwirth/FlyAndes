import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


export const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div style={{height:"1000px"}}><img alt="" src="assets/carousel1.jpg" width={"100%"}/></div></SwiperSlide>
      <SwiperSlide><div style={{height:"1000px"}}><img alt="" src="assets/carousel2.jpg" width={"100%"}/></div></SwiperSlide>
      <SwiperSlide><div style={{height:"1000px"}}><img alt="" src="assets/carousel3.jpg" width={"100%"}/></div></SwiperSlide>
      ...
    </Swiper>
  );
};
