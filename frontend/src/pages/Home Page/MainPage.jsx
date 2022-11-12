import React from "react";
import { Box} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";
import { MobileAndTablets } from "./NavbarTitles";

function MainPage() {
  return (
    <Box color={"black"}>
      <Box color={"white"}>
       
       {/** changed  by madhu */}
       
      </Box>
      <Box
        width={"100%"}
        bgColor={"white"}
        height="auto"
        m={"0px"}
        p="0px 10px 20px 10px"
      >
        <Container/>
      </Box>
      
    </Box>
  );
}

export default MainPage;
