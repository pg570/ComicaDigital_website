
import React, { useState } from 'react'
import {Box, Button, Input, useDisclosure,Flex, Heading} from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel

  } from '@chakra-ui/react'
  import "./payment.css"
  import axios from "axios"

const Editpayment = ({handleEdit}) => {
  const [data,setData]=useState([])
  const [invoice, setInvoice] = useState({
    
  });
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleEditChange = (event) => {
      const { name, value } = event.target;
      setInvoice({
        ...invoice,
        [name]: value,
      });
    };

    console.log("invoice:",invoice)

  
   

   
  return (
    <Box>
     
 

    <>
      <Button class="priya_on" onClick={onOpen}>Edit</Button>
     

      <Modal 
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent id="pr_in">
            <Box sx={{backgroundColor:"#3399cc",color:"white",padding:"13px 20px"}}> <Heading sx={{fontSize:"19px"}}>Edit Address</Heading></Box>
         
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
             <Input  onChange={(e)=>handleEditChange(e)} name="pincode"  ref={initialRef} placeholder='Pin Code' >{data.pincode}</Input>
            </FormControl>

            <FormControl mt={4}>
            
              <Flex sx={{gap:"6px"}}>
              <Input onChange={(e)=>handleEditChange(e)} name="firstname" placeholder='First name' />
              <Input onChange={(e)=>handleEditChange(e)} name="lastname" placeholder='Last name' />
              </Flex>
             
            </FormControl>


            <FormControl mt={4}>
             <Input onChange={(e)=>handleEditChange(e)}  name="address"  placeholder='Enter Flat No. /House No. /Floor /Building' />
            </FormControl>

            <FormControl mt={4}>
             <Input   placeholder='Enter Colony/Street' />
            </FormControl>

            
            <FormControl mt={4}>
             <Input  placeholder='Enter Landermark' />
            </FormControl>

            <FormControl mt={4}>
            
            <Flex sx={{gap:"6px"}}>
            <Input onChange={(e)=>handleEditChange(e)} name="city" placeholder='Enter City' />
          
            <Input onChange={(e)=>handleEditChange(e)}  name="state" placeholder='Enter State' />
            </Flex>
           
          </FormControl>

          <FormControl mt={4}>
            
            <Flex sx={{gap:"6px"}}>
            <Input onChange={(e)=>handleEditChange(e)} name="mobile" placeholder='Enter Mobile Number' />
            <Input placeholder='Enter Landline Number' />
            </Flex>
           
          </FormControl>


          </ModalBody>

          <ModalFooter>
            <Button onClick={handleEdit} colorScheme='blue' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
 
    </Box>
  )
}

export default Editpayment