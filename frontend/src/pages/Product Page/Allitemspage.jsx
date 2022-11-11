import {
  Box,
  Button,
  Checkbox,
  Container,
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
const Allitemspage = () => {
  let [arr, setarr] = useState([]);
  let dat = {
    img: "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDlhLzk3ODI2NTE2MTczMTAuanBnfDQ2NGE4NGI1YjhmZWFkZTE1YThiYzE2YjcyZDBlODQ4MTk4M2Y2NmE2ZGMyOWNiN2EzZmU3ZmNkM2YzM2MyYjQ",
    dis: "Lenovo Tab M8 3rd Gen 20.32 cm (8 inch) LTE Tablet 4 GB RAM, 64 GB, Iron Grey, ZA8G0000IN",
    rating: 5,
    priceafterdiscount: 13999,
    pricebeforeiscount: 20000,
    discount: "30%(₹6,011)",
    wishlist: true,
  };
  let val = Array.from({ length: dat.rating }, (_, i) => i + 1);
  console.log(val);

  const getdata = async () => {
    let data = await axios
      .get("https://comicadigitalbackend.up.railway.app/api/products")
      .then((res) => setarr(res.data));
  };

  useEffect(() => {
    getdata();
  }, []);

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
          sm:"none",
           md:"flex"
        }}
        h={"1000px"}  justifyContent={"center"}>
          <Filters />
        </Flex>
        <Container maxW={"1096px"}  >
          <Box m={"10px"}>
            <Sortingbar />
          </Box>
          <SimpleGrid columns={[1,1, 1, 2, 3]} justifyContent={"center"} gap={"20px"} p={"15px"}>
            {arr.map((data) => (
              <ItemComponent
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
