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
import Footer from "../Home Page/Footer";
import Navbar from "../Home Page/Navbar";
import {useDispatch,useSelector} from "react-redux"
import { loginAPI } from "../../store/auth/auth.actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(store=>store.auth)
  const [formState, setFormState] = useState({
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

  const handleSubmit = ()=>{
    dispatch(loginAPI(formState))
  }

  useEffect(()=>{
    if(data.isAuthenticated){
      // navigate("/")
      console.log("home page")
    }
  })

  return (
    <Box color={"black"} bgColor="white">
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
            isInvalid={isErrorEmail||isErrorPassword}
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
