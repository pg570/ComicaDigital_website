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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ratingicon from "../../../Assets/ratingicon.png";
import Checkout from "./checkout";
import Pricing from "./Pricing";
import SingleCartitem from "./SingleCartitem";

const CartPage = () => {

const [arr,setarr]=useState([])
const [render,setrender] = useState(true)
// const navigator = useNavigate()


const user = JSON.parse(localStorage.getItem('userDetails'));
// if(!user){
//   navigator("/login")
// }
  useEffect(()=>{
    try{
      axios.get(`https://comicadigitalbackend.up.railway.app/api/carts/${user.userId}`).then((res)=>setarr(res.data))

    }catch(err){
      console.log(err.message)
    }
  },[render])
  console.log(render)


  const reload =()=>{
    setrender(!render)
    console.log(render)
    // console.log("reknvjdfnvdonvuern")
  }

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
            <SingleCartitem obj={e} reload={reload} />
            )}

          </Stack>
          <GridItem>
            <Checkout />
            <Pricing render={render} />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CartPage;
