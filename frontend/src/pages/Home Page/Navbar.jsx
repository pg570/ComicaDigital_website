import React, { useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import PhoneNavDrawer from "./PhoneNavDrawer";
import { MobileAndTablets } from "./NavbarTitles";
import { useState } from "react";
import Catogarybar from "../Product Page/Catogarybar";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/store";
import { logout } from "../../store/auth/auth.actions";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [display, setDisplay] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [click, setClick] = useState(false);
  const { data, error, loading } = useSelector((store) => store.auth);
  const toast = useToast();

  const handleMouseOver = (text) => {
    setTitleText(text);
    setDisplay(true);
  };
  const handleMouseOut = () => {
    setDisplay(false);
  };
  const handleClick = () => {
    setClick(!click);
  };

  // console.log(data.isAuthenticated)

  return (
    <>
      <Box bgColor={"#e42529"} color="white">
        {/* -------------------------------------------------------------------------- */}
        <HStack justifyContent={"flex-end"} mr="20px">
          {/* ----------------------------------phone----------------------------------- */}
          {!isLargerThan1000 && (
            <Box position={"absolute"} left="0px">
              <PhoneNavDrawer
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
            </Box>
          )}

          <MdLocationOn />
          <Text color={"white"} fontWeight="500">
            Find a Store |
          </Text>
          <Text color={"white"} fontWeight="500">
            Buying Guides |
          </Text>
          <Text color={"white"} fontWeight="500">
            Contact us
          </Text>
        </HStack>

        <Box pb={"3px"} width={"100%"}>
          <HStack
            justifyContent={"space-between"}
            p="0px 20px 0px 40px"
            width={"100%"}
          >
            <Box>
              <Link to="/">
                {" "}
                <Image
                  _hover={{ cursor: "pointer" }}
                  src={require("./logo.png")}
                  width="60%"
                />
              </Link>
            </Box>
            <Box
              width={{ lg: "40%", md: "100%", sm: "100%", base: "100%" }}
              color="black"
            >
              <Input
                type={"text"}
                placeholder="Find your favourite products"
                width={"100%"}
                bgColor={"white"}
                borderRadius={"50px"}
                border="0px"
                borderColor={"black"}
              />
            </Box>
            {isLargerThan1000 && (
              <HStack justifyContent={"flex-end"}>
                <Text color={"white"} fontWeight="500">
                  Select your PIN Code |
                </Text>

                <BsCartFill />
                <Link to="/Cart">
                  <Text color={"white"} fontWeight="500">
                    Cart |
                  </Text>
                </Link>
                <CgProfile />

                <Text color={"white"} fontWeight="500">
                  {data.isAuthenticated ? (
                    <AfterUserLogin />
                  ) : (
                    <Link to="/login">
                      <Text color={"white"} fontWeight="500">
                        Login
                      </Text>
                    </Link>
                  )}
                </Text>
              </HStack>
            )}
          </HStack>
          {/* ------------------------------------phone------------------------------------- */}
          {!isLargerThan1000 && (
            <HStack justifyContent={"flex-end"} mr="20px">
              <Text color={"white"} fontWeight="500">
                Select your PIN Code |
              </Text>

              <BsCartFill />
              <Link to="/Cart">
                <Text color={"white"} fontWeight="500">
                  Cart |
                </Text>
              </Link>
              <CgProfile />
              <Link to="/login">
                <Text color={"white"} fontWeight="500">
                  Login
                </Text>
              </Link>
            </HStack>
          )}
        </Box>
        <Catogarybar />
      </Box>
    </>
  );
}

export default Navbar;

// --------------------------------------------------------------------------------

function AfterUserLogin() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.auth);
  const [status, setStatus] = useState(false);
  const [items, setItems] = useState({});
  const handleOpen = () => {
    setStatus(!status);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('userDetails'));
  if (items) {
   setItems(items);
  }
}, []);
// console.log(items)
  return (
    <Menu>
      <MenuButton
        _hover={{ cursor: "pointer" }}
        color={"white"}
        as={Text}
        rightIcon={<ChevronDownIcon />}
      >
        Hi {items.userName}
      </MenuButton>
      <MenuList color={"black"}>
        <MenuItem>My Profile</MenuItem>
        <MenuItem>My Orders</MenuItem>
        <MenuItem>My Address</MenuItem>
        <MenuItem>My Wishlist</MenuItem>
        <MenuItem>My Credits</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
