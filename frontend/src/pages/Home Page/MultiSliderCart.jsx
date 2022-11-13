import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export function MultiSliderCart({ data }) {
  // console.log(endpoint)
  return (
    <>
    
    <Link to={`/Allitems/${data.category}`}>
      <VStack
        height={"100%"}
        justifyContent="center"
        alignItems={"center"}
        color="black"
      >
        <Image src={data.img} height="50%" width={"60%"} />
        <Text>{data.title}</Text>
        <Text>Deal Price : {data.offer_price}</Text>
        <Text textDecor={"line-through"}>MRP : {data.mrp}</Text>
        <Text> You Save ({data.price})</Text>
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
        <Text>{data.name}</Text>
      </VStack>
    </Link>
  );
}
