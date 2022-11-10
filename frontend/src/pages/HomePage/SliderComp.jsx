import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import MultiSliderCart from "./MultiSliderCart";

// --------------------------MainSliderComp---------------------------

export function MainSliderComp({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box height="280px">
      <Slider {...settings}>
          {slides.map((el,i) => {
            return (
              <Box key={i}>
                <Image src={el.img} width="100%" height={"300px"}/>;
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
}

// --------------------------MultiComp-----------------------

export function MultiSliderComp({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box>
      <Slider {...settings}>
          {slides.map((el,i) => {
            return (
              <Box key={i}>
                  <MultiSliderCart data={{...el}} />
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
}

// ----------------------------------Slider Arrows ---------------------------------

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#c6bfbf",
        height: "100px",
        width: "50px",
        zIndex: "1",
        position: "absolute",
        right: "0px",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#c6bfbf",
        height: "100px",
        width: "50px",
        zIndex: "1",
        position: "absolute",
        left: "0px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}
