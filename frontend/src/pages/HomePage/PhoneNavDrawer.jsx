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
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"blue.500"}>
          <DrawerCloseButton />

          <DrawerBody lineHeight={"40px"} mt="30px">
            <Text>MOBILES & TABLETS</Text>
            <Text>TELEVISION</Text>
            <Text>AUDIO</Text>
            <Text>HOME APPLIANCES</Text>
            <Text>COMPUTERS</Text>
            <Text>CAMERAS</Text>
            <Text>KITCHEN APPLIANCES</Text>
            <Text>PERSONAL CARE</Text>
            <Text>ACCESSORIES</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PhoneNavDrawer;
