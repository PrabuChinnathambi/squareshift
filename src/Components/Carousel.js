import React from "react";
import Slider from "react-slick";

const Carousel = (props) => {
  console.log(props, "props");

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <Slider className="slider" {...settings}>
        <p>Haiiii</p>
      </Slider>
    </div>
  );
};

export default Carousel;
