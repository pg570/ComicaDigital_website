import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  return (
    <Box color={"#ffffff"} bgColor={"#003380"}>
      <HStack
        textAlign={"left"}
        justifyContent="space-between"
        p="20px 60px 0px 60px"
        alignItems={"flex-start"}
        lineHeight="35px"
        
      >
        <Box>
          <Heading fontSize={"md"}>PRODUCT CATEGORIES</Heading>
          <Text color={"white"}>Smartphones</Text>
          <Text color={"white"}>Laptops</Text>
          <Text color={"white"}>DSLR Cameras</Text>
          <Text color={"white"}>Televisions</Text>
          <Text color={"white"}>Air Conditioners</Text>
          <Text color={"white"}>Refrigerators</Text>
          <Text color={"white"}>Kitchen Appliances</Text>
          <Text color={"white"}>Accessories</Text>
          <Text color={"white"}>Personal Care & Grooming</Text>
        </Box>
        <Box color={"#ffffff"}>
          <Heading fontSize={"md"}>SITE INFO</Heading>
          <Text color={"white"}>About Reliance Digital</Text>
          <Text color={"white"}>resQ Services</Text>
          <Text color={"white"}>Site Map</Text>
          <Text color={"white"}>Gift Cards</Text>
          <Text color={"white"}>Corporate Enquires</Text>
          <Text color={"white"}>Contact Us</Text>
        </Box>
        <Box>
          <Heading fontSize={"md"}>RESOURCE CENTRE</Heading>
          <Text color={"white"}>Prduct Reviews</Text>
          <Text color={"white"}>Buying Guides</Text>
          <Text color={"white"}>How Tos</Text>
          <Text color={"white"}>Feature Stories</Text>
          <Text color={"white"}>Event & Happenings</Text>
        </Box>
        {isLargerThan1000&&<Box>
          <Heading fontSize={"md"}>POLICIES</Heading>
          <Text color={"white"}>Terms of Use</Text>
          <Text color={"white"}>FAQs</Text>
          <Text color={"white"}>Cancellation & Return Policy</Text>
          <Text color={"white"}>Pricing & Payment Policy</Text>
          <Text color={"white"}>Shipping & Delivery Policy</Text>
          <Text color={"white"}>Privacy Policy</Text>
          <Text color={"white"}>E-waste Recycling Policy</Text>
          <Text color={"white"}>EMI and Additional Cashback T&C</Text>
          <Text color={"white"}>RelianceOne Loyalty Program T&C</Text>
          <Text color={"white"}>Caution Notice</Text>
        </Box>}
      </HStack>

      <Box textAlign={"left"}>
        <Flex
          direction={["column","row","row"]}
          justifyContent={"flex-start"}
          alignItems="flex-start"
          gap={["2rem","20%","20%"]}
          p="20px 60px 30px 60px"
        >
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={"md"}>FOLLOW US</Heading>
            <HStack>
              <button>
                <AiFillFacebook />
              </button>
              <button>
                <AiOutlineTwitter />
              </button>
              <button>
                <AiFillYoutube />
              </button>
            </HStack>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={"md"}>
              EXPERIENCE RELIANCE DIGITAL APP ON MOBILE
            </Heading>
            <HStack>
              <Image
                src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
                width={"8rem"}
              />
              <Image
                src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
                width={"8rem"}
              />
            </HStack>
          </VStack>
        </Flex>
      </Box>
      <Box bgColor={"#0a244a"} textAlign="center" p="10px 0px 10px 0px">
        <Heading size={"sm"} textDecor="underline" mb={"20px"}>
          Disclaimer
        </Heading>
        <Text width={"88%"} margin="auto" color={"white"}>
          Product prices, offers and availability are subject to change from
          time to time. All prices are inclusive of taxes. Product colours &
          images are only for illustration and they may not exactly match with
          the actual product. Product specs are subject to change & may vary
          from actual product. While every care is taken to avoid inaccuracies
          in content, these are provided as is, without warranty of any kind.
        </Text>
        <Divider orientation="horizontal" m="20px 0px 20px 0px" />
        <Text color={"white"} textAlign="center"> © 2022 Reliance Digital. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
