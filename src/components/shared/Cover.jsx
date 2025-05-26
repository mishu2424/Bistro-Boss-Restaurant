import { Parallax } from "react-parallax";
import './Cover.css'
const Cover = ({ title, img, text }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt={title}
      strength={300}
    >
      <div
        className="hero h-[600px]"
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center p-5 bg-cover">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{text}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
