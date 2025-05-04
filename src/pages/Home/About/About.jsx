import React from "react";
import "./About.css";
const About = () => {
  return (
    <div
      className={`max-w-7xl mx-auto px-32 py-28 flex items-center justify-center about-container bg-fixed bg-cover bg-center my-10`}
    >
      <div className="p-5 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="text-2xl font-extrabold">Bistro Boss</h2>
        <p className="text-base text-center">
          Bistro Boss blends rich culinary tradition with a bold modern flair,
          creating a dining experience that feels both timeless and innovative.
          Rooted in a love for hearty, handcrafted meals and warm hospitality,
          Bistro Boss carries forward the essence of classic bistro
          culture—where food is soulful, and every guest is treated like family.
        </p>
      </div>
    </div>
  );
};

export default About;
