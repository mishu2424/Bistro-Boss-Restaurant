import Header from "../../../components/shared/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewSlide from "../../../components/shared/ReviewSlide";


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  const getData=async()=>{
    const {data}=await axios('/reviews.json');
    setReviews(data);
  }
  return (
    <div className="max-w-7xl mx-auto space-y-5 my-15">
      <Header
        subheader={"What our clients say"}
        header={"TESTIMONIALS"}
      ></Header>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map((review)=><SwiperSlide key={review._id}>
                <ReviewSlide review={review}></ReviewSlide>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;
