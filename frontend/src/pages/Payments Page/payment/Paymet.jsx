import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  useDisclosure,
  Flex,
  Heading,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import "./payment.css";
import axios from "axios";

const Paymets = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [invoice, setInvoice] = useState({});
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "mobile" || name === "pincode") {
      setInvoice({
        ...invoice,
        [name]: +value,
        userId: user.userId,
      });
    } else {
      setInvoice({
        ...invoice,
        [name]: value,
        userId: user.userId,
      });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
      console.log(invoice);

    try {
      await axios.post(
        "https://comicadigitalbackend.up.railway.app/api/addresses",
        invoice
      );
      alert("Address Added Successfully!");
    } catch (e) {
      console.log(e.message);
    }
  }
  // console.log(invoice);
  return (
    <Box>
      <>
        <Button
          variant="blackAplha"
          bgColor={"rgb(0, 51, 128)"}
          color="white"
          onClick={onOpen}
        >
          ADD NEW SHIPPING ADDRESS
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent id="pr_in">
            <Box
              sx={{
                backgroundColor: "#3399cc",
                color: "white",
                padding: "13px 20px",
              }}
            >
              {" "}
              <Heading sx={{ fontSize: "19px" }}>Add a new Address</Heading>
            </Box>

            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  type="number"
                  onChange={(e) => handleChange(e)}
                  name="pincode"
                  ref={initialRef}
                  placeholder="Pin Code"
                />
              </FormControl>

              <FormControl mt={4}>
                <Flex sx={{ gap: "6px" }}>
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="firstname"
                    placeholder="First name"
                  />

                  <Input
                    onChange={(e) => handleChange(e)}
                    name="lastname"
                    placeholder="Last name"
                  />
                </Flex>
              </FormControl>

              <FormControl mt={4}>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="address"
                  placeholder=" Enter Colony/Street"
                />
              </FormControl>

              <FormControl mt={4}>
                <Input placeholder="Enter Flat No. /House No. /Floor /Building" />
              </FormControl>

              <FormControl mt={4}>
                <Input placeholder="Enter Landermark" />
              </FormControl>

              <FormControl mt={4}>
                <Flex sx={{ gap: "6px" }}>
                  <Input
                    onChange={(e) => handleChange(e)}
                    name="city"
                    placeholder="Enter City"
                  />

                  <Input
                    onChange={(e) => handleChange(e)}
                    name="state"
                    placeholder="Enter State"
                  />
                </Flex>
              </FormControl>

              <FormControl mt={4}>
                <Flex sx={{ gap: "6px" }}>
                  <Input
                    type="number"
                    onChange={(e) => handleChange(e)}
                    name="mobile"
                    placeholder="Enter Mobile Number"
                  />
                  <Input placeholder="Enter Landline Number" />
                </Flex>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default Paymets;
