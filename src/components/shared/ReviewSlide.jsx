import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { SiComma } from "react-icons/si";

import comma from "../../assets/others/Group.png";
const ReviewSlide = ({ review }) => {
  return (
    <div>
      <div className="flex flex-col text-center py-20 items-center justify-center gap-5">
        <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
        <img src={comma} alt="comma" />
        <p className="text-sm">{review?.details}</p>
        <h4 className="text-xl text-yellow-500">{review?.name}</h4>
      </div>
    </div>
  );
};

export default ReviewSlide;
