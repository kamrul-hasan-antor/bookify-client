import React from "react";
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import slide3 from "../../images/slide-3.jpg";
import slide4 from "../../images/slide-4.jpg";
import slide5 from "../../images/slide-5.jpg";
import slide6 from "../../images/slide-6.jpg";
import slide7 from "../../images/slide-7.jpg";
import slide8 from "../../images/slide-8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

const Gallery = () => {
  return (
    <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto py-16">
      <div className=" text-center mb-8">
        <h6 className="text-3xl flex justify-center items-center mb-2">
          {/* <span className="inline-block relative h-0.5 w-2 mx-1"></span> */}
          <span className="inline-block relative h-0.5 w-2"></span>
          <span className="inline-block relative h-0.5 w-2 mx-1"></span>
          <span className="inline-block relative h-0.5 w-10 mr-4"></span>

          <p className="mb-2 text-[#1c3c6b]">Photo Gallery</p>
          <span className="inline-block relative h-0.5 w-10 ml-4"></span>
          <span className="inline-block relative h-0.5 w-2 mx-1"></span>
          <span className="inline-block relative h-0.5 w-2"></span>
        </h6>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nostrum.
        </p>
      </div>

      <Swiper
        className="mySwiper h-full w-full"
        navigation={true}
        loop={true}
        spaceBetween={30}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={image} className="h-[300px] w-full" alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;
