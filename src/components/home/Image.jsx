import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ImageSlider() {
  const slides = [
    { id: 1, src: "/home-bg.png", title: "Supporting Surgeons, Saving Lives" },
    { id: 2, src: "/home-bg.png", title: "Empowering Healthcare, Inspiring Hope" },
    { id: 3, src: "/home-bg.png", title: "Innovating for a Healthier Tomorrow" },
  ];
  // Swiper reference
  const swiperRef = useRef(null);
  return (
    <div className="px-4 sm:px-12 md:px-16">
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] mt-5 rounded-md shadow-md relative overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // save swiper instance
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full relative">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Overlay text/button */}
                <div className="absolute flex flex-col gap-4 sm:gap-6 bottom-36 sm:bottom-12 lg:bottom-40 left-6 sm:left-20 max-w-[90%]">
                  <h1 className="font-medium text-xl sm:text-3xl md:text-4xl text-[#4EA291] leading-snug">
                    {slide.title}
                  </h1>
                  <div className="hidden sm:flex bg-[#4EA291] w-40 sm:w-48 h-10 items-center justify-around rounded-md hover:bg-[#3b8275] transition">
                    <button className="text-white text-sm sm:text-base">Get this from Jurhy</button>
                    <img src="/home-arrow.png" alt="arrow" className="w-5 sm:w-6" />
                  </div>
                </div>
                {/* Clickable left/right areas */}
                <div
                  className="absolute top-0 left-0 h-full w-1/2 cursor-pointer"
                  onClick={() => swiperRef.current?.slidePrev()}
                />
                <div
                  className="absolute top-0 right-0 h-full w-1/2 cursor-pointer"
                  onClick={() => swiperRef.current?.slideNext()}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
