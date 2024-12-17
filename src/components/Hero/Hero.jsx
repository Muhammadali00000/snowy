import React, { useEffect } from "react";
import "./Hero.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="wrap">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="100"
              className="box"
            ></div>
            <div
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              className="box"
            ></div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="900"
              className="box"
            ></div>
          </div>
          <div className="wrap">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="900"
              className="box"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              className="box"
            ></div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="100"
              className="box"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
