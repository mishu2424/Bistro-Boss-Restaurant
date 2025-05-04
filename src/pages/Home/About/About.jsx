import React from "react";
import './About.css'
const About = () => {
  return (
    <div className={`max-w-7xl mx-auto px-32 py-28 flex items-center justify-center about-container bg-cover bg-center my-10`}>
      <div className="p-5 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="text-2xl font-extrabold">Bistro Boss</h2>
        <p className="text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          reprehenderit vitae, aliquam repellat commodi eius repudiandae, cumque
          soluta expedita est voluptas facere quae, architecto autem quis nemo
          deserunt tempora quod.
        </p>
      </div>
    </div>
  );
};

export default About;
