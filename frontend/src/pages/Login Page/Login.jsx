import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../HomePage/Footer";
import Navbar from "../HomePage/Navbar";

function Login() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  console.log(formState);

  const isErrorMobileNo = formState.number === "";

  return (
    <Box color={"black"}>
      <Box color={"white"}>
        <Navbar />
      </Box>
      <Box p="50px 50px">
        <Flex
          direction={["column", "column", "row", "row"]}
          gap="30px"
          justifyContent={"center"}
          alignItems="center"
        >
          <Box width={{ sm: "100%" }}>
            <Image
              src="https://www.reliancedigital.in/akamai/images/mobile/Login-banner.jpeg"
              width="100%"
            />
          </Box>
          <FormControl
            isInvalid={isErrorMobileNo}
            width={{ sm: "100%" }}
            margin={"auto"}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            borderRadius={"10px"}
            p={"30px"}
            //   border="1px solid red"
          >
            <Heading fontSize={"lg"} textAlign="left" mb="30px">
              Login / Register
            </Heading>

            <FormLabel>Mobile Number*</FormLabel>
            <Input
              type="number"
              value={formState.number}
              name="number"
              onChange={handleInputChange}
            />
            {!isErrorMobileNo ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>
                Mandatory fields cannot be empty
              </FormErrorMessage>
            )}
            <Button colorScheme={"red"} width="100%">
              PROCEED
            </Button>
          </FormControl>
        </Flex>
      </Box>

      <Box color={"white"}>
        <Footer />
      </Box>
    </Box>
  );
}

export default Login;
