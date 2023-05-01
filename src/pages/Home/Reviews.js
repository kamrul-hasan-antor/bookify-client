import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    name: "antor",
    designation: "CEO of Akij",
    rating: 5,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima voluptatem praesentium possimus excepturi, veniam cumque animi. Fuga voluptatum, ab quibusdam veniam eaque quaerat commodi aspernatur earum quae velit. In, omnis at quidem inventore neque distinctio itaque officia doloremque nobis vero facilis consequuntur reiciendis dolor quo suscipit iste sed perspiciatis.",
  },
  {
    name: "antor hasans",
    designation: "CEO of Akij",
    rating: 5,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima voluptatem praesentium possimus excepturi, veniam cumque animi. Fuga voluptatum, ab quibusdam veniam eaque quaerat commodi aspernatur earum quae velit. In, omnis at quidem inventore neque distinctio itaque officia doloremque nobis vero facilis consequuntur reiciendis dolor quo suscipit iste sed perspiciatis.",
  },
  {
    name: "ali",
    designation: "CEO of Akij",
    rating: 5,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima voluptatem praesentium possimus excepturi, veniam cumque animi. Fuga voluptatum, ab quibusdam veniam eaque quaerat commodi aspernatur earum quae velit. In, omnis at quidem inventore neque distinctio itaque officia doloremque nobis vero facilis consequuntur reiciendis dolor quo suscipit iste sed perspiciatis.",
  },
  {
    name: "jonab",
    designation: "CEO of Akij",
    rating: 5,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima voluptatem praesentium possimus excepturi, veniam cumque animi. Fuga voluptatum, ab quibusdam veniam eaque quaerat commodi aspernatur earum quae velit. In, omnis at quidem inventore neque distinctio itaque officia doloremque nobis vero facilis consequuntur reiciendis dolor quo suscipit iste sed perspiciatis.",
  },
  {
    name: "putifar hosen",
    designation: "CEO of Akij",
    rating: 5,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima voluptatem praesentium possimus excepturi, veniam cumque animi. Fuga voluptatum, ab quibusdam veniam eaque quaerat commodi aspernatur earum quae velit. In, omnis at quidem inventore neque distinctio itaque officia doloremque nobis vero facilis consequuntur reiciendis dolor quo suscipit iste sed perspiciatis.",
  },
  {
    name: "rudamun",
    designation: "CEO of Akij",
    rating: 5,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima voluptatem praesentium possimus excepturi, veniam cumque animi. Fuga voluptatum, ab quibusdam veniam eaque quaerat commodi aspernatur earum quae velit. In, omnis at quidem inventore neque distinctio itaque officia doloremque nobis vero facilis consequuntur reiciendis dolor quo suscipit iste sed perspiciatis.",
  },
];

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto py-16 ">
        <div className="text-center mb-8">
          <h6 className="text-3xl flex justify-center items-center mb-2">
            {/* <span className="inline-block relative h-0.5 w-2 mx-1"></span> */}
            <span className="inline-block relative h-0.5 w-2"></span>
            <span className="inline-block relative h-0.5 w-2 mx-1"></span>
            <span className="inline-block relative h-0.5 w-10 mr-4"></span>
            <p className="mb-2 text-[#1c3c6b]">Reviews</p>
            <span className="inline-block relative h-0.5 w-10 ml-4"></span>
            <span className="inline-block relative h-0.5 w-2 mx-1"></span>
            <span className="inline-block relative h-0.5 w-2"></span>
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
            nostrum.
          </p>
        </div>

        <Swiper
          className="mySwiper h-full w-full"
          navigation={true}
          loop={true}
          spaceBetween={30}
          speed={1500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {reviews.map((review, i) => {
            const { name, designation, message } = review;
            return (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 ">
                  <small>"{message}"</small>
                  <div className="mt-4">
                    <div className="flex relative review-card">
                      <img
                        src="https://valuedesign.co.in/travon-wp/wp-content/uploads/2023/02/testi_1_4.jpg"
                        alt=""
                        className="rounded-full w-14 mr-4"
                      />
                      <div className="text-[#1c3c6b] ">
                        <h5 className="capitalize font-semibold">{name}</h5>
                        <small className="text-sm">{designation}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
