import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function PhoneNavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} colorScheme="red" variant={"unstyled"}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"red.700"}>
          <DrawerCloseButton />

          <DrawerBody lineHeight={"40px"} mt="30px" >
            <Text color={"white"}>MOBILES & TABLETS</Text>
            <Text color={"white"}>TELEVISION</Text>
            <Text color={"white"}>AUDIO</Text>
            <Text color={"white"}>HOME APPLIANCES</Text>
            <Text color={"white"}>COMPUTERS</Text>
            <Text color={"white"}>CAMERAS</Text>
            <Text color={"white"}>KITCHEN APPLIANCES</Text>
            <Text color={"white"}>PERSONAL CARE</Text>
            <Text color={"white"}>ACCESSORIES</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PhoneNavDrawer;
