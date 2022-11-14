import { chakra, Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ratingicon from "../../../Assets/ratingicon.png";
import { Rendercartfun } from "../../../store/Cart/Cart.Module";
import { Cartreducer } from "../../../store/Cart/Cart.reducer";

const SingleCartitem = (props) => {
  const [obj, setobj] = useState([]);
  const [render, setrender] = useState(true);
const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(
        `https://comicadigitalbackend.up.railway.app/api/products/${props.obj.productId}`
      )
      .then((res) => setobj(res.data));
    // console.log(props.obj.productId)
  }, []);

  console.log(props);

  let val = Array.from({ length: obj.rating }, (_, i) => i + 1);
  console.log(val);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");

  const AddMore = async (id) => {
    // console.log(id)
    let {data} = await axios.patch(
      `https://comicadigitalbackend.up.railway.app/api/carts/${id}`,
      {
        qty: props.obj.qty + 1,
      }
    );
    props.reload()
    // dispatch(Cartreducer({ type: "Render_cart", payload: data }))
    console.log(data);
    setrender(!render);
  };
  const removeMore = async (id) => {
    console.log(id);
    let data = await axios.patch(
      `https://comicadigitalbackend.up.railway.app/api/carts/${id}`,
      {
        qty: props.obj.qty>=1?props.obj.qty - 1:1
      }
    );
    console.log(data);
    props.reload()
        setrender(!render);
  };


  const DeletefromCart = async(id)=>{
    let data = await axios.delete(
      `https://comicadigitalbackend.up.railway.app/api/carts/${id}`
    );
    console.log(data);
    props.reload()  }

  return (
    <div>
      <Box bg={"#ffffff"} p={"10px"}>
        <SimpleGrid columns={[1, 1, 1, 2]} maxW={"875px"}>
          <Flex justifyContent={"center"} h={"217px"}>
            <Box>
              <Image h={"171px"} w={"171px"} src={obj.img} />
              <Flex justifyContent={"space-around"}>
                <Box
                  h={"30px"}
                  w={"30px"}
                  fontSize={"15px"}
                  color={"#333333"}
                  bg={"#cccccc"}
                  borderRadius={"2px"}
                  lineHeight={"30px"}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => {
                    removeMore(props.obj._id);
                    console.log(props);
                  }}
                >
                  -
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  border={"solid back"}
                  h={"30px"}
                  w={"30px"}
                  fontSize={"15px"}
                  color={"#000000"}
                  bg={"#ffffff"}
                  borderRadius={"2px"}
                  lineHeight={"16.1px"}
                >
                  {props.obj.qty}
                </Box>
                <Box
                  h={"30px"}
                  w={"30px"}
                  fontSize={"15px"}
                  color={"#333333"}
                  bg={"#cccccc"}
                  borderRadius={"2px"}
                  lineHeight={"30px"}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => {
                    AddMore(props.obj._id);
                    console.log(props);
                  }}
                >
                  +
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Box maxW={"708px"}>
            <Text
              fontSize={"14px"}
              lineHeight={"21px"}
              textAlign={"start"}
              color={"#003380"}
            >
              Hammer String 3 blotooth Wireless Neckband Earphone with
              Sweat-proof and Deep Bass, Black Red with 1 year warranty
            </Text>
            <Text
              color={"#666666"}
              fontSize={"14px"}
              lineHeight={"21px"}
              textAlign={"start"}
            >
              item id {props.obj.qty}
            </Text>
            <Flex gap={"2px"}>
              {val.map((e) => {
                return <Image key={e} h={"18px"} w={"18px"} src={ratingicon} />;
              })}
              <Text color={"#003380"} fontSize={"12px"} textAlign={"start"}>
                (1 Review)
              </Text>
            </Flex>
            <Text fontSize={"14px"} color={"#666666"} textAlign={"right"}>
              <chakra.span color={"#000000"} fontSize={"18px"}>
                ₹{obj.offer_price}
              </chakra.span>
              <br></br>
              M.R.P..₹{obj.mrp}Inclusive of all Taxes{" "}
            </Text>
            <Text color={"#43a047"} fontSize={"14px"} textAlign={"right"}>
              Your Save: {obj.mrp - obj.offer_price}
            </Text>
            <Text
              fontSize={"13px"}
              lineHeight={"19.5px"}
              textAlign={"right"}
              color={"#15967c"}
            >
              Free Shipping
            </Text>
            <Text
              color={"#003380"}
              fontSize={"13px"}
              lineHeight={"20px"}
              textAlign={"right"}
            >
              Standerd Delivery: {+dd}/{mm} - {+dd + 2}/{mm}
            </Text>
            <Text color={"#666666"} fontSize={"12px"} textAlign={"right"}>
              *Delivery assurance is subject to our delivery locations staying
              open as per govt regulations
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 1, 1, 2]}>
          <Box
            //   w={"50%"}
            h={"40px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid #cccccc"}
            fontSize={"13px"}
            textAlign={"center"}
            color={"#1774ef"}
            _hover={{cursor:"pointer"}}
            onClick={()=>DeletefromCart(props.obj._id)}
          >
            Remove
          </Box>
          <Box
            h={"40px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            //   w={"50%"}
            border={"1px solid #cccccc"}
            fontSize={"13px"}
            textAlign={"center"}
            color={"#1774ef"}
          >
            Move to wishlist
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default SingleCartitem;
