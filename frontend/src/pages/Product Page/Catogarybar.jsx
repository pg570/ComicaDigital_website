// import chakra, { Box, Button, CloseButton, Flex, HStack, IconButton, Link, SimpleGrid, Spacer, Stack, useColorMode, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react';
import React from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Stack,
  SimpleGrid,
  Spacer,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
import Mobile$tel from "./Mobile$tel";
const Catogarybar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  // const mobileNav = useDisclosure();
  // const { toggleColorMode: toggleMode } = useColorMode();
  // const text = useColorModeValue("dark", "light");
  // const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  // const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  // const hbgh = useColorModeValue("gray.100", "brand.500");

  const Section = (props) => {
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{
          bg: hbg,
        }}
      >
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = Mobile$tel;

  return (
    <Flex
      mt={"0px"}
      bg={"#003380"}
      display={{
        base: "none",
        md: "inline-flex",
        lg: "inline-flex",
      }}
      h={"38px"}
      alignItems={"center"}
      w={"100%"}
      justifyContent={"space-around"}
    >
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            MOBILES & TABLETS
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Mobile$tel}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            TELEVISIONS
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            AUDIO
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          zIndex={10}
          display="none"
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            HOME APPLIANCES
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            COMPUTERS
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            CAMERAS
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            KITCHEN APPLIANCES
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            PERSONAL CARE
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
      <Box role="group">
        <Box
          bg={bg}
          color="gray.500"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoIosArrowDown />}
        >
          <Text fontWeight={"500"} bg={"#003380"} color={"#ffffff"} fontSize={"sm"}>
            {" "}
            ACCESSORIES
          </Text>
        </Box>
        <Box
          pos="absolute"
          left={0}
          w="full"
          display="none"
          zIndex={10}
          _groupHover={{
            display: "block",
          }}
        >
          {Features}
        </Box>
      </Box>
    </Flex>
  );
};

export default Catogarybar;
