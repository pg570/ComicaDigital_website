import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <Box mb={"10px"} bg={"#ffffff"} color="Black">
    <Link to={"/payment"}>
      <Flex justifyContent={"center"}>
        
          <Box
            bg={"#e42529"}
            borderRadius={"3px"}
            color={"#ffffff"}
            w={"80%"}
            h={"36px"}
            fontSize={"13px"}
            lineHeight={"34px"}
          >
          
            CHECKOUT
          </Box>
        
      </Flex>
      </Link>
    </Box>
  );
};

export default Checkout;
