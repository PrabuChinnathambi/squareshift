import React, { useState, useLayoutEffect, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  const [count, setCount] = useState(4);
  const [greeting, setGreeting] = useState("");
  const [size, setSize] = useState([0, 0]);
  const [actualWidth] = useState(window.screen.width);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < actualWidth) {
      setCount(3);
      setGreeting("Screen Size is decreased. So, Image count is changed to 3");
    }
  }, [size]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider_container">
      {data && (
        <div>
          <p>Count of Images: {count}</p>
          <p>{greeting && greeting}</p>
          <span>
            Window size: {size[0]} x {size[1]}
          </span>
          <Slider {...settings}>
            {data?.slice(0, count)?.map((item, i) => {
              return (
                <div key={i}>
                  <p>Index of Image: {i + 1}</p>
                  <img src={item.url} alt="img" />;
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Carousel;
