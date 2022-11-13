import React from "react";
import { Box} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";

function MainPage() {
  return (
    <Box color={"black"}>
      <Box
        width={"100%"}
        // bgColor={"white"}
        height="auto"
        m={"0px"}
        p="0px 10px 20px 10px"
        // border={"5px solid green"}
      >
        <Container/>
      </Box>
      
    </Box>
  );
}

export default MainPage;
