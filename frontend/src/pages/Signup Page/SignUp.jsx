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
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Home Page/Footer";
import Navbar from "../Home Page/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { signUpAPI } from "../../store/auth/auth.actions";
import { Link } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.auth);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const isErrorEmail = formState.email === "";
  const isErrorPassword = formState.password === "";

  const handleSubmit = () => {
    dispatch(signUpAPI(formState));
  };

  useEffect(() => {
    if (data.error) {
      console.log("login");
    }
    if (data.loading) {
      console.log("loading");
    }
  });
  console.log(data);

  return (
    <Box color={"black"} bgColor="white">
      <Box p="50px 50px">
        <FormControl
          isInvalid={isErrorEmail || isErrorPassword}
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
          <FormLabel>Password*</FormLabel>
          <Input
            type="text"
            value={formState.password}
            name="password"
            onChange={handleInputChange}
          />
          {!isErrorPassword ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              Mandatory fields cannot be empty
            </FormErrorMessage>
          )}
          <Button colorScheme={"red"} width="100%" onClick={handleSubmit}>
            PROCEED
          </Button>
          <Box>
            <Text display="inline-block" fontSize={"sm"}>
              {" "}
              Already Registered?{" "}
            </Text>
            <Link to="/login">
              <Text
                display="inline-block"
                fontSize={"sm"}
                color="red"
                fontWeight={"bold"}
              >
                &nbsp;LOGIN
              </Text>
            </Link>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}

export default SignUp;
