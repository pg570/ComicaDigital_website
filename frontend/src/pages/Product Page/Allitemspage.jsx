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
import Nodata from "../../Assets/Nodata.png";
import load from "../../Assets/load.gif";
import Sortingbar from "./sortingbar";
import Filters from "./Filters";
import axios from "axios";
import ItemComponent from "./ItemComponent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Allitemspage = () => {
  let [arr, setarr] = useState([]);
  let [temparr, settemparr] = useState([]);
  const [loading, setloading] = useState(false);
  const [sort, setsort] = useState("");
  var { category } = useParams();

  const { Brand } = useSelector((store) => store.brand);

  console.log(Brand);

  const filteredProducts = arr.filter(({ brand }) => Brand.includes(brand));
  console.log(filteredProducts);
  useEffect(() => {
    setloading(true);
    console.log(category);
    try {
      axios
        .get(
          `https://comicadigitalbackend.up.railway.app/api/products?search=${category}${sort}`
        )
        .then((res) => {
          setarr(res.data);
          console.log(res.data);
        });
      setloading(false);
    } catch (err) {
      console.log(err.message);
    }
  }, [category, sort]);

  const asscending = async () => {
    setsort("&sort=offer_price,asc");
  };
  const decending = async () => {
    setsort("&sort=offer_price");
  };

  const checkdata = () => {
    if (loading) {
      return (
        <Box>
          <Image src={load} />
        </Box>
      );
    }

    if (arr.length === 0 && filteredProducts.length === 0) {
      return (
        <Box display={"flex"} justifyContent={"center"}>
          <Image
            h={"500px"}
            src={Nodata}
            alt="No relevent data present in data base"
          />
        </Box>
      );
    }
  };

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
            <Sortingbar asscending={asscending} decending={decending} />
          </Box>
          {checkdata()}
          <SimpleGrid
            columns={[1, 1, 1, 2, 3]}
            justifyContent={"center"}
            gap={"20px"}
            p={"15px"}
          >
            {filteredProducts.length <= 0
              ? arr.map((data) => (
                  <Flex justifyContent={"center"}>
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
                  </Flex>
                ))
              : filteredProducts.map((data) => (
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
            {}
          </SimpleGrid>
        </Container>
      </Flex>
    </Container>
  );
};

export default Allitemspage;
