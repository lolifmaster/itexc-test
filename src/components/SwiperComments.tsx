import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Comment from "./Comment";
import Bgimage from "../assets/bg-jafar.jpg";

// Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

const SwiperComments = () => {
  return (
    <div
      className="relative grid min-h-screen w-full items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bgimage})`,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <Swiper
        spaceBetween={10}
        navigation={{ hideOnClick: true, enabled: true }}
        className="z-10 mx-auto w-3/4 bg-slate-50 py-6 md:py-14"
      >
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComments;
