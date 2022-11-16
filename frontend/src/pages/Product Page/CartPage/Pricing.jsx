import {
  Text,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { totalcost } from "../../../store/Cart/Cart.Module";
// import { Totalfun } from "./Totalfun";

const Pricing = ({ render }) => {
  const [arr, setarr] = useState([]);
  const [pay, setpay] = useState(0);
  const [sum, setsum] = useState(0);
  const [couponinput, setcouponinput] = useState("");
  const [qty, setqty] = useState(0);
// const navigator = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    fetchproducts();
  }, [render]);

  const user = JSON.parse(localStorage.getItem("userDetails"));
  
  
   
  const fetchproducts = async () => {
    await axios
      .get(
        `https://comicadigitalbackend.up.railway.app/api/carts/${user.userId}`
      )
      .then((res) => {
        setarr(res.data);
        Totalfun(res.data);
        totalqty(res.data);
      });
  };
  console.log(arr);
  const totalqty = (data) => {
    let totalqty = 0;
    data.forEach((e) => {
      totalqty += e.qty;
    });
    setqty(totalqty);
  };

  const Totalfun = async (data) => {
    let total = 0;
    console.log(data);
    data.map(async (e) => {
      await axios
        .get(
          `https://comicadigitalbackend.up.railway.app/api/products/${e.productId}`
        )
        .then((res) => {
          console.log(res.data);
          total += +res.data.offer_price * +e.qty;
        });
      console.log(total);
      dispatch(totalcost(total));
      setsum(total);
      setpay(total);
    });
  };

  const handleClick = () => {
    let coupon = "Madhu@50";
    let coupon25 = "Madhu@25";
    let Remove = "Madhu@0";
    console.log(sum);
    setcouponinput("");

    if (Remove === couponinput) {
      dispatch(dispatch({ type: "Total_cost", payload: sum }))

      return setpay(sum);
    }
    if (coupon === couponinput) {
      
      dispatch(dispatch({ type: "Total_cost", payload: (sum / 2) }))
      return setpay(sum / 2)
    }
    if (coupon25 === couponinput) {
      dispatch(dispatch({ type: "Total_cost", payload: (sum - sum / 4) }))

      return setpay(sum - sum / 4);
    }
  };

  return (
    <Box border={"solid 1px black"} borderRadius={"3px"} bg={"#ffffff"}>
      <Flex justifyContent={"center"} borderRadius={"3px"} bg={"#ffffff"}>
        <InputGroup mt={"10px"} w={"80%"}>
          <Input
            value={couponinput}
            onChange={(e) => setcouponinput(e.target.value)}
            pr="4.5rem"
            type={"text"}
            placeholder="Enter Coupon Code"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              Apply
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Flex justifyContent={"center"}>
        <Stack
          w={"80%"}
          p={"10px"}
          textAlign={"start"}
          gap={"10px"}
          mt={"10px"}
        >
          <Text fontWeight={"bold"} fontSize={"14px"} color={"#333333"}>
            PRICE DETAILS
          </Text>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"12px"} textAlign={"start"} color={"#333333"}>
              Price({qty} Items)
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize={"12px"}
              textAlign={"right"}
              color={"#333333"}
            >
              ₹{sum}
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"12px"} textAlign={"start"} color={"#333333"}>
              Delivery Charges
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize={"12px"}
              textAlign={"right"}
              color={"#43a047"}
            >
              FREE
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"14px"} textAlign={"start"} color={"#333333"}>
              AMOUNT PAYABLE
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize={"12px"}
              textAlign={"right"}
              color={"#003380"}
            >
              ₹{pay}
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Pricing;
