import {
  chakra,
  Box,
  ChakraProvider,
  Flex,
  Image,
  Stack,
  Text,
  Container,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import ratingicon from "../../../Assets/ratingicon.png";
import Checkout from "./checkout";
import Pricing from "./Pricing";

const CartPage = () => {
  let val = Array.from({ length: 4 }, (_, i) => i + 1);
  console.log(val);

  return (
    <Box mt={"50px"} bg={"#f5f7f7"}>
      <Container maxW={"1362px"}>
        <SimpleGrid
          // gridTemplateColumns={[1,1,1,2]}

          columns={[1, 1, 1, 2]}
          gap={4}
          
        >
          <GridItem bg={"#ffffff"} maxW={"875px"}>
            <Box>
              <SimpleGrid columns={[1, 1, 1, 2]} maxW={"875px"}>
                <Flex justifyContent={"center"} h={"217px"}>
                  <Box>
                    <Image
                      h={"171px"}
                      w={"171px"}
                      src={
                        "https://www.reliancedigital.in/medias/Hammer-Sting-3-0-Earphone-492796748-i-1?context=bWFzdGVyfGltYWdlc3w2MjEyMHxpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDYzLzk4MTU3OTkwMzc5ODIuanBnfDFmZDdkZDE5YWIxMzQ2YjYxM2ZiYTQzMmEwZGNlOWJlMTJiNmE3YWM2NmZkMjI5MTUwMzE5ZGQ1YzVhOWQ1Zjc"
                      }
                    />
                    <Flex justifyContent={"space-around"}>
                      <Box
                        h={"30px"}
                        w={"30px"}
                        fontSize={"15px"}
                        color={"#333333"}
                        bg={"#cccccc"}
                        borderRadius={"2px"}
                        lineHeight={"30px"}
                      >
                        -
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        border={"solid back"}
                        h={"30px"}
                        w={"30px"}
                        fontSize={"15px"}
                        color={"#000000"}
                        bg={"#ffffff"}
                        borderRadius={"2px"}
                        lineHeight={"16.1px"}
                      >
                        3
                      </Box>
                      <Box
                        h={"30px"}
                        w={"30px"}
                        fontSize={"15px"}
                        color={"#333333"}
                        bg={"#cccccc"}
                        borderRadius={"2px"}
                        lineHeight={"30px"}
                      >
                        +
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
                <Box maxW={"708px"}>
                  <Text
                    fontSize={"14px"}
                    lineHeight={"21px"}
                    textAlign={"start"}
                    color={"#003380"}
                  >
                    Hammer String 3 blotooth Wireless Neckband Earphone with
                    Sweat-proof and Deep Bass, Black Red with 1 year warranty
                  </Text>
                  <Text
                    color={"#666666"}
                    fontSize={"14px"}
                    lineHeight={"21px"}
                    textAlign={"start"}
                  >
                    item id 898989898
                  </Text>
                  <Flex gap={"2px"}>
                    {val.map((e) => {
                      return <Image h={"18px"} w={"18px"} src={ratingicon} />;
                    })}
                    <Text
                      color={"#003380"}
                      fontSize={"12px"}
                      textAlign={"start"}
                    >
                      (1 Review)
                    </Text>
                  </Flex>
                  <Text fontSize={"14px"} color={"#666666"} textAlign={"right"}>
                    <chakra.span color={"#000000"} fontSize={"18px"}>
                      ₹399{"    "}
                    </chakra.span>
                    M.R.P..₹3495 Inclusive of all Taxes{" "}
                  </Text>
                  <Text color={"#43a047"} fontSize={"14px"} textAlign={"right"}>
                    Your Save: 89%(₹3,096)
                  </Text>
                  <Text
                    fontSize={"13px"}
                    lineHeight={"19.5px"}
                    textAlign={"right"}
                    color={"#15967c"}
                  >
                    Free Shipping
                  </Text>
                  <Text
                    color={"#003380"}
                    fontSize={"13px"}
                    lineHeight={"20px"}
                    textAlign={"right"}
                  >
                    Standerd Delivery: 13 Nov (sun) - 14 Nov (Mon)
                  </Text>
                  <Text color={"#666666"} fontSize={"12px"} textAlign={"right"}>
                    *Delivery assurance is subject to our delivery locations
                    staying open as per govt regulations
                  </Text>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={[1, 1, 1, 2]}>
                <Box
                  //   w={"50%"}
                  border={"1px solid #cccccc"}
                  fontSize={"13px"}
                  textAlign={"center"}
                  color={"#1774ef"}
                >
                  Remove
                </Box>
                <Box
                  //   w={"50%"}
                  border={"1px solid #cccccc"}
                  fontSize={"13px"}
                  textAlign={"center"}
                  color={"#1774ef"}
                >
                  Move to wishlist
                </Box>
              </SimpleGrid>
            </Box>
          </GridItem>
          <GridItem   >
            <Checkout  />
            <Pricing/>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CartPage;
