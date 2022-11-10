import { Box, Button, Checkbox, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ratingicon from "../../Assets/ratingicon.png";
import wishlisttrue from "../../Assets/wishlisttrue.png";
import wishlistfalse from "../../Assets/wishlistfalse.png";
import Sortingbar from "./sortingbar";
import Filters from "./Filters";

const Allitemspage = () => {
  let data = {
    img: "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDlhLzk3ODI2NTE2MTczMTAuanBnfDQ2NGE4NGI1YjhmZWFkZTE1YThiYzE2YjcyZDBlODQ4MTk4M2Y2NmE2ZGMyOWNiN2EzZmU3ZmNkM2YzM2MyYjQ",
    dis: "Lenovo Tab M8 3rd Gen 20.32 cm (8 inch) LTE Tablet 4 GB RAM, 64 GB, Iron Grey, ZA8G0000IN",
    rating: 5,
    priceafterdiscount: 13999,
    pricebeforeiscount: 20000,
    discount: "30%(₹6,011)",
    wishlist: true,
  };
  let val = Array.from({ length: data.rating }, (_, i) => i + 1);
  console.log(val);

  return (
    <Box >
    <Flex bg={"#f5f7f7"}>
    <Filters/>
    <Container  maxW={"100%"} >
    <Sortingbar/>
      <Box bg={"#ffffff"} boxShadow="base" h="432" w={"291px"} p={"15px"}>
        <Box h={"210px"} w={"265px"}>
          <Image
            h={"210px"}
            w={"265px"}
            mt={"22px"}
            src={
              "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDlhLzk3ODI2NTE2MTczMTAuanBnfDQ2NGE4NGI1YjhmZWFkZTE1YThiYzE2YjcyZDBlODQ4MTk4M2Y2NmE2ZGMyOWNiN2EzZmU3ZmNkM2YzM2MyYjQ"
            }
          />
        </Box>
        <Box h={"128px"} w={"265px"} m={"5px"}>
          <Text m={"5px"} fontSize={"15px"} color="#003380" noOfLines={2}>
            {data.dis}
          </Text>
          <Box m={"5px"} display={"flex"}>
            {val.map((e) => {
              return <Image h={"18px"} w={"18px"} src={ratingicon} />;
            })}
            <Text fontSize={"14px"}>(1 Reviews)</Text>
          </Box>
          <Box m={"5px"} fontSize={"13px"} display={"flex"} gap={"8px"}>
            <Text color={"#003380"}>₹{data.priceafterdiscount}</Text>
            <Text color={"#666666"} textDecoration={"line-through"}>
              ₹{data.pricebeforeiscount}
            </Text>
            <Text color={"#43a047"}>{data.discount}</Text>
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
        <Box borderStyle={"groove"} color={"#666666"} display={"flex"}>
          <Button w={"50%"} boxShadow="base" colorScheme={"#ffffff"}>
            <Checkbox pr={"5px"}></Checkbox>{" "}
            <Text color={"#666666"}> Compare</Text>
          </Button>
          <Button boxShadow="base" w={"50%"} colorScheme={"#ffffff"}>
            {" "}
            <Image
              src={!!data.wishlist ? wishlisttrue : wishlistfalse}
              pr={"5px"}
            />{" "}
            <Text color={"#666666"} fontSize={"14px"}>
              {" "}
              Wishlist
            </Text>{" "}
          </Button>
        </Box>
      </Box>
    </Container>
    </Flex>
    
    </Box>
  );
};

export default Allitemspage;
