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
  const [categoryval,setcategory]=useState()
  const [sort,setsort] = useState("")
  var { category } = useParams();

  const { Brand } = useSelector((store) => store.brand);
  console.log(Brand);
  useEffect(() => {
    console.log(category);
    try {
      axios
        .get(
          `https://comicadigitalbackend.up.railway.app/api/products?search=${category}${sort}`
        )
        .then((res) => {setarr(res.data)
        });

    } catch (err) {
      console.log(err.message);
    } 
  }, [category,sort]);


  const asscending = async()=>{
 setsort("&sort=offer_price,asc")
  
  }
  const decending = async()=>{
    setsort("&sort=offer_price")
 
  }



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
          <Filters  />
        </Flex>
        <Container maxW={"1096px"}>
          <Box m={"10px"}>
            <Sortingbar asscending={asscending} decending={decending} />
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
                offer_price={data.price}
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
