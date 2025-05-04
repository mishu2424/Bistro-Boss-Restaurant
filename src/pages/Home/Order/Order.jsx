import Header from "../../../components/shared/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import './Order.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import orderImg1 from '../../../assets/home/slide1.jpg'
import orderImg2 from '../../../assets/home/slide2.jpg'
import Slide from "../../../components/shared/Slide";
const Order = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2">
      <Header
        subheader={"From 11:00am to 10:00pm"}
        header={"Order online"}
      ></Header>
      <div className="relative">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper custom-swiper"
        >
          <SwiperSlide><Slide img={orderImg1} text={"Salads"}></Slide></SwiperSlide>
          <SwiperSlide><Slide img={orderImg2} text={"Soups"}></Slide></SwiperSlide>
          <SwiperSlide><Slide img={orderImg1} text={"Salads"}></Slide></SwiperSlide>
          <SwiperSlide><Slide img={orderImg1} text={"Salads"}></Slide></SwiperSlide>
          <SwiperSlide><Slide img={orderImg1} text={"Salads"}></Slide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Order;
