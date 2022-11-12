import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../HomePage/Footer";
import Navbar from "../HomePage/Navbar";

function SignUp() {
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

  const isErrorEmail = formState.email === "";
  const isErrorMobileNo = formState.number === "";

  return (
    <Box color={"black"}>
      <Box color={"white"}>
        <Navbar />
      </Box>
      <Box p="50px 50px">
        <FormControl
          isInvalid={isErrorEmail || isErrorMobileNo}
          width="30%"
          margin={"auto"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          borderRadius={"10px"}
          p="30px"
          //   border="1px solid red"
        >
          <Heading fontSize={"lg"} textAlign="left" mb="30px">
            Register New Account
          </Heading>
          <FormLabel>First Name*</FormLabel>
          <Input
            type="text"
            value={formState.firstName}
            name="firstName"
            onChange={handleInputChange}
          />
          <FormLabel>Last Name*</FormLabel>
          <Input
            type="text"
            value={formState.lastName}
            name="lastName"
            onChange={handleInputChange}
          />
          <FormLabel>Email*</FormLabel>
          <Input
            type="email"
            value={formState.email}
            name="email"
            onChange={handleInputChange}
          />
          {!isErrorEmail ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              Mandatory fields cannot be empty
            </FormErrorMessage>
          )}
          <Button>VERIFY EMAIL</Button>
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
          <Box>
            <Text display="inline-block" fontSize={"sm"}> Already Registered? </Text>
            <Text display="inline-block" fontSize={"sm"} color="red" fontWeight={"bold"}>&nbsp;LOGIN</Text>
          </Box>
        </FormControl>
      </Box>

      <Box color={"white"}>
        <Footer />
      </Box>
    </Box>
  );
}

export default SignUp;
