import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export function MultiSliderCart({ data }) {
  // console.log(data.category)
  return (
    <>
      <Link to={`/Allitems/${data.category}`}>
        <VStack
          height={"100%"}
          justifyContent="center"
          alignItems={"flex-start"}
          pl="20px"
          gap="10px"
        >
          <Image src={data.img} height="50%" width={"60%"} margin="auto" />
          <Text color={"blue"}>{data.title}</Text>
          <VStack justifyContent="center"
          alignItems={"flex-start"} lineHeight="10px">
            <Text color={"gray"}>
              Deal Price :{" "}
              <Text
                display={"inline-block"}
                color={"black"}
                fontWeight="bold"
                fontSize={"lg"}
              >
                ₹ {data.offer_price}
              </Text>
            </Text>
            <Text color={"gray"} textDecor={"line-through"}>MRP : {data.mrp}</Text>
            <Text color={"gray"}> You Save ({data.price})</Text>
            <Button colorScheme={"green"} size="xs" borderRadius={"50px"}>
              OFFERS AVAILABLE
            </Button>
          </VStack>
        </VStack>
      </Link>
    </>
  );
}

export function MultiSliderAllItemsCart({ data }) {
  return (
    <Link to={`/Allitems/${data.category}`}>
      {" "}
      <VStack
        height={"100%"}
        justifyContent="center"
        alignItems={"center"}
        color="black"
      >
        <Image src={data.img} height="50%" width={"60%"} />
        <Text color={"gray"}>{data.name}</Text>
      </VStack>
    </Link>
  );
}
