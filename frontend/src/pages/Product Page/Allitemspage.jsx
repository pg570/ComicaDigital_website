import {
  Box,
  Button,
  Checkbox,
  Container,
  filter,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { Component, useEffect, useState } from "react";
import ratingicon from "../../Assets/ratingicon.png";
import wishlisttrue from "../../Assets/wishlisttrue.png";
import wishlistfalse from "../../Assets/wishlistfalse.png";
import Sortingbar from "./sortingbar";
import Filters from "./Filters";
import axios from "axios";
import ItemComponent from "./ItemComponent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Allitemspage = () => {
  let [arr, setarr] = useState([]);
  let [temparr, settemparr] = useState([]);
  var { category } = useParams();
  const { Brand } = useSelector((store) => store.brand);
  console.log(Brand);
  useEffect(() => {
    console.log(category);
    try {
      axios
        .get(
          `https://comicadigitalbackend.up.railway.app/api/products/category/${category}`
        )
        .then((res) => setarr(res.data));
      // console.log(arr)
      // setTimeout(() => {
      //   sortfun()
      // }, 5000);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  // const sortfun=()=>{
  //       let newarr = arr.filter((word) => word.category === category);

  //   console.log(newarr);
  // }
  // useEffect(() => {
  //   try {
  //     console.log(category);
  //     console.log(temparr);
  //     let newarr = temparr.findIndex((obj) => obj.brand === Brand[1]) !== -1;

  //     console.log(newarr);

  //     setarr(newarr);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, [temparr]);
  // useEffect(()=>{
  console.log(arr);
  // },[arr])
  // brand: "boAt";
  // category: "headphones";
  // img: "https://www.reliancedigital.in/medias/boAt-Airdopes-138-Airdopes-491973383-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTAwMnxpbWFnZS9qcGVnfGltYWdlcy9oYmUvaGYwLzk5MDQ0ODY0ODE5NTAuanBnfDMwOTI2ZGM0NzA3ZmFmMWY3YzI4MjA1MDQ3NmFiOTM3Njk0ZTUyMGMyMWJlZTM4Y2QwYmQ0MGM4OTBjMjAzZmU";
  // mrp: 4490;
  // offer_price: 1349;
  // price: 1199;
  // rating: 4;
  // title: "boAt Airdopes 138 Twin Wireless Earbuds with IWP Technology, Bluetooth V5.0, Immersive Audio, Up to 15H Total Playback, Instant Voice Assistant and Type-C Charging, Steel Blue";
  // __v: 0;
  // _id: "636e462decbfae605af10e5e";

  return (
    <Container mt={"10px"} maxW={"100%"}>
      <Flex w={"100%"} bg={"#f5f7f7"}>
        <Flex
          display={{
            sm: "none",
            md: "flex",
          }}
          h={"1000px"}
          justifyContent={"center"}
        >
          <Filters />
        </Flex>
        <Container maxW={"1096px"}>
          <Box m={"10px"}>
            <Sortingbar />
          </Box>
          <SimpleGrid
            columns={[1, 1, 1, 2, 3]}
            justifyContent={"center"}
            gap={"20px"}
            p={"15px"}
          >
            {arr.map((data) => (
              <ItemComponent
                key={data._id}
                id={data._id}
                img={data.img}
                title={data.title}
                rating={data.rating}
                offer_price={data.offer_price}
                mrp={data.offer_price}
                discount={data.discount}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
    </Container>
  );
};

export default Allitemspage;
