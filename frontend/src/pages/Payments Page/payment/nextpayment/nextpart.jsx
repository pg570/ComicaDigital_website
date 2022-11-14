import { Box, Text, Button, Flex, Heading, Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Icon,
  UnorderedList,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import "../payment.css";
// import { CheckCircleIcon } from "@chakra-ui/icons";
// import { Select } from "@chakra-ui/react";
// import { useContext } from "react";
// import { useBoolean } from "@chakra-ui/react";
// import { AppProvider } from "../context/Context";
import { Link } from "react-router-dom";
import PaymetRoutes from "../PayRoutes/PaymetRoutes";

import axios from "axios";
import GetProductDetail from "./GetProductDetail";
import { useSelector } from "react-redux";

const Nextpayment = () => {
  // const { data } = useContext(AppProvider);
  // console.log(data, "me data hu");

  const [address, setAddress] = useState([]);
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState("");
  const [detail, setDetail] = useState({});

  const {cost} = useSelector((store)=>store.Cart)

  const user = JSON.parse(localStorage.getItem("userDetails"));

  async function getProduct() {
    try {
      let res = await axios.get(
        `https://comicadigitalbackend.up.railway.app/api/carts/${user.userId}`
      );

      // console.log(res.data);
      setProduct(res.data);
      // setProductId(res.data.productId)
    } catch (e) {
      console.log(e.message);
    }
  }

  // async function getDetailId(id){
  //   try {
  //     let res = await axios.get(`https://comicadigitalbackend.up.railway.app/api/products/${id}`);
  //     console.log(res.data)
  //     //  setDetail(res.data);

  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  async function getData() {
    try {
      let res = await axios.get(
        `https://comicadigitalbackend.up.railway.app/api/addresses/userId/${user.userId}`
      );

      // console.log(res.data);
      setAddress(res.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getData();
  }, [address]);

  useEffect(() => {
    getProduct();
  }, [product]);

  return (
    <Box sx={{ backgroundColor: "#f5f7f7", height: "auto", padding: "70px" }}>
      {address.map((data) => {
        return (
          <>
            <Box
              sx={{
                width: "95%",
                height: "auto",
                borderRadius: "8px",
                backgroundColor: "#e7e9e9",
                border: "1px solid #dddddd",
                padding: "10px 20px",
                textAlign: "start",
                margin: "auto",
              }}
            >
              <Flex>
                <Checkbox size="xl" colorScheme="blue" defaultChecked>
                  <h4>SHIPPING ADDRESS</h4>
                </Checkbox>
              </Flex>
              <br />

              <h6 class="owl_schl">
                {data.firstname} {data.lastname}
              </h6>

              <Text
                sx={{
                  marginLeft: "13px",
                  color: "rgb(51, 51, 51)",
                  fontSize: "13px",
                  fontWeight: "600",
                  paddingTop: "5px",
                  fontWeight:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                }}
              >
                {data.address}, {data.city}, {data.city}-{data.pincode},{" "}
                {data.state}
              </Text>

              <Text
                sx={{
                  marginLeft: "13px",
                  color: "rgb(51, 51, 51)",
                  fontSize: "13px",
                  fontWeight: "600",
                  paddingTop: "5px",
                  fontWeight:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                }}
              >
                <b id="spcl_b">Mobile : </b> {data.mobile}{" "}
              </Text>
              <br />
              <br />
            </Box>
          </>
        );
      })}
      <br />
      <Box
        sx={{
          width: "95%",
          height: "auto",
          borderRadius: "8px",
          backgroundColor: "#e7e9e9",
          border: "1px solid #dddddd",
          padding: "20px",
          textAlign: "start",
          margin: "auto",
        }}
      >
        <Flex>
          <Checkbox size="xl" colorScheme="blue" defaultChecked>
            <h4>ORDER DETAILS</h4>
          </Checkbox>
        </Flex>

        <br />
        {product?.map((el) => {
          return <GetProductDetail id={el.productId} qty={el.qty} />;
        })}

        <br />
        <Flex sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="pari_diff">{detail.title}</Box>
        <Flex sx={{ display: "flex", justifyContent: "start", gap: "20px" }}>
          <Box className="pari_diff">Total cost:</Box>

          <Box className="pari_diff" display={"flex"}>
            Price: ₹{cost}.00
          </Box>
        </Flex>
      </Flex>
        <br />
      </Box>
      <br />
      <br />
      <br />
      <br />

      <Box
        sx={{
          textAlign: "start",
          backgroundColor: "white",
          widht: "90%",
          height: "auto",
          padding: "20px 0px 20px 0px",
          border: "1px solid black",
        }}
      >
        <h4 id="ha_havp">PAY SECURILY</h4>

        <Flex>
          <Box
            sx={{
              borderRight: "1px solid #adadad ",
              padding: "0px 10px 0px 0px",
            }}
          >
            <RadioGroup defaultValue="1">
              <List spacing={3}>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9  ",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/credit">Credit Card</Link>
                    </Radio>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9 ",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/nextpayment/netbanking">
                    <ListItem sx={{ cursor: "pointer" }}>
                      <Radio size="md" colorScheme="blue">
                        Net Banking
                      </Radio>
                    </ListItem>
                  </Link>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/credit">Debit Card</Link>
                    </Radio>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  {/* You can also use custom icons from react-icons */}
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/upi">UPI</Link>
                    </Radio>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/wallet">Wallet </Link>
                    </Radio>
                  </ListItem>{" "}
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/buynowpaylater">
                        BuyNow Pay Later
                      </Link>
                    </Radio>
                  </ListItem>
                </Box>
              </List>
            </RadioGroup>
          </Box>

          <Box sx={{ padding: "0px 200px 0px 20px" }}>
            <PaymetRoutes />
          </Box>

          {/* ***** */}
        </Flex>
      </Box>
    </Box>
  );
};

export default Nextpayment;
