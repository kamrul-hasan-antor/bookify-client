import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      className="mySwiper rounded-md h-full w-full"
      navigation={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={image} className="min-h-full w-full" alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
