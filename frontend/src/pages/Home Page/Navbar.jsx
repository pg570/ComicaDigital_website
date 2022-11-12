import React from "react";
import {
  Box,
  HStack,
  Image,
  Input,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import PhoneNavDrawer from "./PhoneNavDrawer";
import { MobileAndTablets } from "./NavbarTitles";
import { useState } from "react";
import Catogarybar from "../Product Page/Catogarybar";
import {useDispatch,useSelector} from "react-redux"
import { store } from "../../store/store";
import { logout } from "../../store/auth/auth.actions";


function Navbar() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [display, setDisplay] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [click, setClick] = useState(false);
  const {isAuthenticated} = useSelector(store=>store.auth)
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
  console.log(isAuthenticated)

  return (
    <>
      {/* ---------------------------------------title div---------------------------------------- */}

      {display&&<Box
        display={display ? "block" : "none"}
        position={"absolute"}
        top="130px"
        zIndex={10}
        width="100%"
      >
        <MobileAndTablets />
      </Box>}

      <Box bgColor={"#e42529"}>
        {/* -------------------------------------------------------------------------- */}
        <HStack justifyContent={"flex-end"} mr="20px">
          {/* ----------------------------------phone----------------------------------- */}
          {!isLargerThan1000 && (
            <Box position={"absolute"} left="10px">
              <PhoneNavDrawer
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
            </Box>
          )}

          <MdLocationOn />
          <Text>Find a Store |</Text>
          <Text>Buying Guides |</Text>
          <Text>Contact us</Text>
        </HStack>

        <Box width={"100%"}>
          <HStack
            justifyContent={"space-between"}
            p="0px 20px 0px 40px"
            width={"100%"}
          >
            <Box>
              <Image src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" />
            </Box>
            <Box width={"40%"} color="black">
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
                <Text>Select your PIN Code |</Text>
                <BsCartFill />
                <Text>Cart |</Text>
                <CgProfile />
                <Text>{isAuthenticated?<AfterUserLogin/>:"Login"}</Text>
              </HStack>
            )}
          </HStack>
          {/* ------------------------------------phone------------------------------------- */}
          {!isLargerThan1000 && (
            <HStack justifyContent={"flex-end"} mr="20px">
              <Text>Select your PIN Code |</Text>
              <BsCartFill />
              <Text>Cart |</Text>
              <CgProfile />
              <Text>Login</Text>
            </HStack>
          )}
        </Box>

        {isLargerThan1000 && (
          <HStack
            gap="30px"
            justifyContent={"space-between"}
            bgColor={"#003380"}
            p="10px 40px 10px 40px"
          >
            <Catogarybar/>
            {/* <Text
              // onClick={handleClick}
              onMouseOver={() => handleMouseOver("MOBILE&TABLETS")}
              onMouseOut={handleMouseOut}
            >
              MOBILES & TABLETS
            </Text>
            <Text>TELEVISION</Text>
            <Text>AUDIO</Text>
            <Text>HOME APPLIANCES</Text>
            <Text>COMPUTERS</Text>
            <Text>CAMERAS</Text>
            <Text>KITCHEN APPLIANCES</Text>
            <Text>PERSONAL CARE</Text>
            <Text>ACCESSORIES</Text> */}
          </HStack>
        )}
      </Box>
    </>
  );
}

export default Navbar;


function AfterUserLogin(){
  const dispatch = useDispatch()
  const data = useSelector(store=>store.auth)
  const [status,setStatus] = useState(false)
const handleOpen = ()=>{
  setStatus(!status)
}
const handleLogout = ()=>{
  dispatch(logout())
}
  return (
    <>
    <Text onClick={handleOpen}>hi aman</Text>
    {
      status && <Box bgColor={"blue.500"} borderRadius="10px" position="absolute" top={"80px"} height="50px" p="20px" right={"0px"}>
        <Text onClick={handleLogout}>LogOut</Text>
      </Box>
    }
    </>
  )
}
