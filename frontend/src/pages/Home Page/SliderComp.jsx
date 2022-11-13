import { Box, Button, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MultiSliderAllItemsCart, MultiSliderCart } from "./MultiSliderCart";

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
    <Box>
      <Slider {...settings}>
        {slides.map((el, i) => {
          return (
            <Box key={i} height={{ lg: "300px", sm: "200px", base: "100px" }}>
              <Image src={el.img} width="100%" height={"100%"} />;
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
  // console.log(slides[0].category)
  return (
    <Box mb="50px">
      <HStack justifyContent={"flex-start"} alignItems="center" gap="20px">
        <Heading textAlign={"left"} ml="30px" mb="20px" fontSize={"xl"}>
          BEST SELLERS FROM 
        </Heading>
        <Link to={`Allitems/`}>
          <Button colorScheme={"blue"}>View All</Button>
        </Link>
      </HStack>
      <Slider {...settings}>
        {slides.map((el, i) => {
          return (
            <Box
              key={i}
              height={{ lg: "350px", sm: "200px", base: "100px" }}
              boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
            >
              <MultiSliderCart data={{ ...el }} />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}

// -----------------------------------------------

export function MultiSliderAllItemsComp({ slides }) {
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
  // console.log(slides[0].category);
  return (
    <>
      <Box>
        <Heading textAlign={"left"} ml="30px" mb="20px" fontSize={"xl"}>
          BEST SELLERS FROM
        </Heading>
        <Slider {...settings}>
          {slides.map((el, i) => {
            return (
              <Box key={i} height={{ lg: "300px", sm: "200px", base: "100px" }}>
                <MultiSliderAllItemsCart data={{ ...el }} />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </>
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
