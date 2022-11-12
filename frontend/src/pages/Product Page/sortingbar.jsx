import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Sortingbar = () => {
  return (
    <Flex bg={"#ffffff"} mb={"7px"} p={"10px"} justifyContent={"space-between"}>
      <Stack w={"40%"} textAlign={"start"}>
        <Heading fontFamily={"Roboto"} color={"#333333"} fontSize={"24px"}>
          Sortingbar
        </Heading>
        <Text color={"#666666"} fontSize={"14px"}>
          (Showing 1-9 products of 9 products)
        </Text>
      </Stack>
      <Flex display={{
        base:"none"
      }} w={"50%"} pr={"50px"} justifyContent={"space-between"} >
      <Box
        h={"30px"}
        w={"100px"}
        alignSelf={"center"}
        alignItems={"center"}
        p={"5px"}
        color={"#31812e"}
        bg={"#f5f7f7"}
        fontSize={"12px"}
        borderRadius={"6px"}
      >
        Relevance
      </Box>
      <Box
        h={"30px"}
        w={"auto"}
        alignSelf={"center"}
        alignItems={"center"}
        p={"5px"}
        color={"#31812e"}
        bg={"#f5f7f7"}
        fontSize={"12px"}
        borderRadius={"6px"}
      >
        Price(Low - High)
      </Box>
      <Box
        h={"30px"}
        w={"auto"}
        alignSelf={"center"}
        alignItems={"center"}
        p={"5px"}
        color={"#31812e"}
        bg={"#f5f7f7"}
        fontSize={"12px"}
        borderRadius={"6px"}
      >
        Price(High - Low)
      </Box>
      </Flex>
    </Flex>
  );
};

export default Sortingbar;
