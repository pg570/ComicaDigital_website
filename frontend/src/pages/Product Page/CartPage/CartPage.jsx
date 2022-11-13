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
import axios from "axios";
import React, { useEffect, useState } from "react";
import ratingicon from "../../../Assets/ratingicon.png";
import Checkout from "./checkout";
import Pricing from "./Pricing";
import SingleCartitem from "./SingleCartitem";

const CartPage = () => {

const [arr,setarr]=useState([])

  useEffect(()=>{
    axios.get(`https://comicadigitalbackend.up.railway.app/api/carts/636d17107a76c29165e5ca37`).then((res)=>setarr(res.data))
  },[])


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
          <Stack maxW={"875px"}>
          {arr.map((e)=>
            <SingleCartitem obj={e}  />
            )}

          </Stack>
          <GridItem>
            <Checkout />
            <Pricing />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CartPage;
