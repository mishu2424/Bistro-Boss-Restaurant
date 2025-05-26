import MenuCard2 from "../../../components/shared/MenuCard2";
import './SingleTabCategory.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SingleTabCategory = ({ categories }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-bullet">' + (index + 1) + "</span>";
    },
  };

  //sending categories array and the number of items/size I want to show per slide to chunkArray function.   
  const chunkedItems = chunkArray(categories, 6);
  console.log(chunkedItems);

  return (
    <div>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        {/* mapping each array as group; received arrays from chunkArray */}
        {chunkedItems.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.map((item) => (
                <MenuCard2 key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Helper function
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    // i=0;arr.length=9;
    // result.push(arr.slice(0,6)) <-- index from 0-5
    // i=6;arr.length()=9; 
    // result.push(arr.slice(6,12))<--index from 6-8

    // for example,if arr.length=18;
    // i=0; arr.length=18;
    // result.push(arr.slice(0,6))<-- (0-5)
    // i=6;arr.length=18;
    // result.push(arr.slice(6,12))<-- (6-11)
    // i=12;arr.length=18;
    // result.push(arr.slice(12,18))<-- (12-17)
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default SingleTabCategory;
