import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
import image4 from "../../assets/images/image4.jpeg";
import image5 from "../../assets/images/image5.jpeg";
import image6 from "../../assets/images/image6.jpeg";
import image7 from "../../assets/images/image7.jpeg";

export default () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        <SwiperSlide>
          <img src={image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
