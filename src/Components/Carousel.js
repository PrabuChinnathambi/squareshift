import React from "react";
import Slider from "react-slick";

const Carousel = ({ data }) => {
  console.log(data);
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
        {data.slice(4).map((item, i) => {
          return (
            <div>
              <img src={item.url} alt="img" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
