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
          <Text>Smartphones</Text>
          <Text>Laptops</Text>
          <Text>DSLR Cameras</Text>
          <Text>Televisions</Text>
          <Text>Air Conditioners</Text>
          <Text>Refrigerators</Text>
          <Text>Kitchen Appliances</Text>
          <Text>Accessories</Text>
          <Text>Personal Care & Grooming</Text>
        </Box>
        <Box color={"#ffffff"}>
          <Heading fontSize={"md"}>SITE INFO</Heading>
          <Text >About Reliance Digital</Text>
          <Text>resQ Services</Text>
          <Text>Site Map</Text>
          <Text>Gift Cards</Text>
          <Text>Corporate Enquires</Text>
          <Text>Contact Us</Text>
        </Box>
        <Box>
          <Heading fontSize={"md"}>RESOURCE CENTRE</Heading>
          <Text>Prduct Reviews</Text>
          <Text>Buying Guides</Text>
          <Text>How Tos</Text>
          <Text>Feature Stories</Text>
          <Text>Event & Happenings</Text>
        </Box>
        {isLargerThan1000&&<Box>
          <Heading fontSize={"md"}>POLICIES</Heading>
          <Text>Terms of Use</Text>
          <Text>FAQs</Text>
          <Text>Cancellation & Return Policy</Text>
          <Text>Pricing & Payment Policy</Text>
          <Text>Shipping & Delivery Policy</Text>
          <Text>Privacy Policy</Text>
          <Text>E-waste Recycling Policy</Text>
          <Text>EMI and Additional Cashback T&C</Text>
          <Text>RelianceOne Loyalty Program T&C</Text>
          <Text>Caution Notice</Text>
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
        <Text width={"88%"} margin="auto">
          Product prices, offers and availability are subject to change from
          time to time. All prices are inclusive of taxes. Product colours &
          images are only for illustration and they may not exactly match with
          the actual product. Product specs are subject to change & may vary
          from actual product. While every care is taken to avoid inaccuracies
          in content, these are provided as is, without warranty of any kind.
        </Text>
        <Divider orientation="horizontal" m="20px 0px 20px 0px" />
        <Text> © 2022 Reliance Digital. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
