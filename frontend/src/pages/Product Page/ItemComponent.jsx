import React, { useState } from "react";
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
import ratingicon from "../../Assets/ratingicon.png";
import wishlisttrue from "../../Assets/wishlisttrue.png";
import wishlistfalse from "../../Assets/wishlistfalse.png";
import { Link } from "react-router-dom";

const ItemComponent = (props) => {
  const [wish, setwish] = useState(false);
  let val = Array.from({ length: props.rating }, (_, i) => i + 1);

  
  return (
    <div bg={"#ffffff"} key={props.id}>
      <Box boxShadow="base" bg={"#ffffff"} w={"291px"}>
        <Flex justifyContent={"center"} w={"100%"}>
          <Link to={`/SingleProduct/${props.id}`}>
            <Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                h={"210px"}
                w={"265px"}
              >
                <Image h={"210px"} w={"265px"} mt={"22px"} src={props.img} />
              </Box>

              <Box h={"128px"} w={"265px"} mt={"15px"}>
                <Text m={"5px"} fontSize={"15px"} color="#003380" noOfLines={2}>
                  {props.title}
                </Text>
                <Box m={"5px"} display={"flex"}>
                  {val.map((e) => {
                    return <Image h={"18px"} w={"18px"} src={ratingicon} />;
                  })}
                  <Text fontSize={"14px"}>(1 Reviews)</Text>
                </Box>
                <Box m={"5px"} fontSize={"13px"} display={"flex"} gap={"8px"}>
                  <Text color={"#003380"}>₹{props.offer_price}</Text>
                  <Text color={"#666666"} textDecoration={"line-through"}>
                    ₹{props.mrp}
                  </Text>
                  <Text color={"#43a047"}>{props.discount}</Text>
                </Box>
                <Box
                  w={"100px"}
                  h={"16px"}
                  borderRadius={"16px"}
                  borderColor={"#31812e"}
                  bg={"#effcf5"}
                >
                  {" "}
                  <Box w={"100%"}>
                    <Text fontSize={"10px"} color="#31812e">
                      {" "}
                      OFFERS AVAILABILE{" "}
                    </Text>{" "}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        </Flex>
        <Box borderStyle={"groove"} color={"#666666"} display={"flex"}>
          <Button w={"50%"} boxShadow="base" colorScheme={"#ffffff"}>
            <Checkbox pr={"5px"}></Checkbox>{" "}
            <Text color={"#666666"}> Compare</Text>
          </Button>
          <Button
            boxShadow="base"
            w={"50%"}
            colorScheme={"#ffffff"}
            onClick={() => setwish(!wish)}
          >
            {" "}
            <Image src={wish ? wishlisttrue : wishlistfalse} pr={"5px"} />{" "}
            <Text color={"#666666"} fontSize={"14px"}>
              {" "}
              Wishlist
            </Text>{" "}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ItemComponent;
