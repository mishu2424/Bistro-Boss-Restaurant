import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

import slide1 from "../../../assets/home/01.jpg";
import slide2 from "../../../assets/home/02.jpg";
import slide3 from "../../../assets/home/03.png";
import slide4 from "../../../assets/home/04.jpg";
import slide5 from "../../../assets/home/05.png";
import slide6 from "../../../assets/home/06.png";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      <Carousel
        showArrows={true}
        animationHandler="fade"
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev &&
          hovered && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                left: 15,
                transform: "translateY(-50%)",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "0.2rem 0.6rem",
                borderRadius: "50%",
              }}
            >
              <IoIosArrowBack />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext &&
          hovered && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                right: 15,
                transform: "translateY(-50%)",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "0.2rem 0.6rem",
                borderRadius: "50%",
              }}
            >
              <IoIosArrowForward />
            </button>
          )
        }
      >
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" />
        </div>
        <div>
          <img src={slide5} alt="Slide 5" />
        </div>
        <div>
          <img src={slide6} alt="Slide 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
