import {
    Text,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Pricing = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <Box  border={"solid 1px black"} borderRadius={"10px"} bg={"#ffffff"}  >
    <Flex justifyContent={"center"} borderRadius={"10px"} bg={"#ffffff"}>
      <InputGroup mt={"10px"} w={"80%"}>
        <Input pr="4.5rem" type={"text"} placeholder="Enter Coupon Code" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            Apply
          </Button>
        </InputRightElement>
      </InputGroup>
      
    </Flex>
    <Flex justifyContent={"center"} >
    <Stack w={"80%"} p={"10px"} textAlign={"start"} gap={"10px"} mt={"10px"} >
      <Text  fontWeight={"bold"} fontSize={"14px"} color={"#333333"} >PRICE DETAILS</Text>
      <Flex justifyContent={"space-between"}>
      <Text  fontSize={"12px"} textAlign={"start"} color={"#333333"} >Price(2 Items)</Text>
      <Text fontWeight={"bold"} fontSize={"12px"} textAlign={"right"} color={"#333333"} >₹3333</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
      <Text  fontSize={"12px"} textAlign={"start"} color={"#333333"} >Delivery Charges</Text>
      <Text fontWeight={"bold"} fontSize={"12px"} textAlign={"right"} color={"#43a047"} >FREE</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
      <Text  fontSize={"14px"} textAlign={"start"} color={"#333333"} >AMOUNT PAYABLE</Text>
      <Text fontWeight={"bold"} fontSize={"12px"} textAlign={"right"} color={"#003380"} >₹3396</Text>
      </Flex>
      
      </Stack>
      </Flex>
      </Box>
  );
};

export default Pricing;
