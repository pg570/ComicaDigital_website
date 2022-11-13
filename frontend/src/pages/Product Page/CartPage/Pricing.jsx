import {
    Text,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Totalfun } from "./Totalfun";

const Pricing = () => {



  const [arr,setarr]=useState([])
const [pay,setpay]= useState(0)
  const [sum,setsum]=useState(0)
const [couponinput,setcouponinput]=useState("")

  useEffect( ()=>{
    fetchproducts()
// let data = Totalfun().then((e)=>console.log(e))
// console.log(data)
  },[])

   const fetchproducts= async()=>{
    await axios.get(`https://comicadigitalbackend.up.railway.app/api/carts/636d17107a76c29165e5ca37`).then((res)=>{
    setarr(res.data)  
    Totalfun(res.data)})
    // console.log(data)
   }

    const Totalfun=async (data)=>{

    let total =0
    
       data.map(async(e)=>{
        // return  console.log(e)
       await axios.get(`https://comicadigitalbackend.up.railway.app/api/products/${e.productId}`).then((res)=>{
            console.log(res.data)
        total+=res.data.offer_price
        })
        console.log(total)
        setsum(total)
        setpay(total)
     })
    
    
    }



  const handleClick =async () => {
    // console.log("click");
   let coupon = "Madhu@50"
   let coupon25 = "Madhu@25"
  // await setpay(sum)
   if(coupon===couponinput){
    setpay(pay/2)
   }
   if(coupon25===couponinput){
    setpay(pay-pay/4)
    
   }
   setcouponinput("")
  };

  return (
    <Box  border={"solid 1px black"} borderRadius={"3px"} bg={"#ffffff"}  >
    <Flex justifyContent={"center"} borderRadius={"3px"} bg={"#ffffff"}>
      <InputGroup mt={"10px"} w={"80%"}>
        <Input value={couponinput} onChange={(e)=>setcouponinput(e.target.value)} pr="4.5rem" type={"text"} placeholder="Enter Coupon Code" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            Apply
          </Button>
        </InputRightElement>
      </InputGroup>
      
    </Flex>
    <Flex justifyContent={"center"} >
    <Stack w={"80%"} p={"10px"} textAlign={"start"} gap={"10px"} mt={"10px"} >
      <Text  fontWeight={"bold"} fontSize={"14px"} color={"#333333"} >PRICE DETAILS</Text>
      <Flex justifyContent={"space-between"}>
      <Text  fontSize={"12px"} textAlign={"start"} color={"#333333"} >Price({arr.length} Items)</Text>
      <Text fontWeight={"bold"} fontSize={"12px"} textAlign={"right"} color={"#333333"} >₹{sum}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
      <Text  fontSize={"12px"} textAlign={"start"} color={"#333333"} >Delivery Charges</Text>
      <Text fontWeight={"bold"} fontSize={"12px"} textAlign={"right"} color={"#43a047"} >FREE</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
      <Text  fontSize={"14px"} textAlign={"start"} color={"#333333"} >AMOUNT PAYABLE</Text>
      <Text fontWeight={"bold"} fontSize={"12px"} textAlign={"right"} color={"#003380"} >₹{pay}</Text>
      </Flex>
      
      </Stack>
      </Flex>
      </Box>
  );
};

export default Pricing;
